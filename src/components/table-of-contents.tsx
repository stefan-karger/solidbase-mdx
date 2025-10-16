import { createEffect, createSignal, Index, on, Show } from "solid-js"
import { isServer } from "solid-js/web"

import type { TableOfContentsItemData } from "@kobalte/solidbase/client"
import { useCurrentPageData } from "@kobalte/solidbase/client"

type TocItem = {
  title: string
  href: string
  depth: number
  el?: HTMLElement
}

export function TableOfContents() {
  const data = useCurrentPageData()
  const toc = () => data()?.toc

  const [currentSection, setCurrentSection] = createSignal<string>()
  const [headings, setHeadings] = createSignal<TocItem[]>([])

  createEffect(
    on(toc, (newToc) => {
      setHeadings(
        flattenData(newToc).map((item) => {
          const el = document.getElementById(item.href.slice(1)) ?? undefined
          return { ...item, el }
        })
      )
    })
  )

  if (!isServer) {
    window.addEventListener("scroll", () => {
      let current: string | undefined

      for (const heading of headings()) {
        if (!heading.el) {
          continue
        }
        if (heading.el.getBoundingClientRect().top < 300) {
          current = heading.href
        }
      }
      setCurrentSection(current)
    })
  }

  return (
    <Show when={headings().length > 0}>
      <nav aria-labelledby="on-this-page-title" class="no-scrollbar overflow-y-auto px-12">
        <h2
          class="sticky top-0 h-6 bg-background text-muted-foreground text-xs"
          id="on-this-page-title"
        >
          On This Page
        </h2>
        <ul class="flex list-none flex-col gap-2 text-sm">
          <Index each={headings()}>
            {(section) => (
              <li style={{ "padding-left": `${section().depth}rem` }}>
                <a
                  class="text-[0.8rem] text-muted-foreground no-underline transition-colors hover:text-foreground data-[active=true]:text-foreground"
                  data-active={section().href === currentSection()}
                  href={section().href}
                >
                  {section().title}
                </a>
              </li>
            )}
          </Index>
        </ul>
      </nav>
    </Show>
  )
}

function flattenData(data: TableOfContentsItemData[] | undefined, depth = 0): TocItem[] {
  if (!data) {
    return []
  }
  return data.flatMap((item) => {
    if (item.href) {
      const currentItem = {
        title: item.title,
        href: item.href,
        depth
      }
      return [currentItem, ...flattenData(item.children, depth + 1)]
    }
    return flattenData(item.children, depth + 1)
  })
}
