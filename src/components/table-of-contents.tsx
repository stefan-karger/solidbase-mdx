import { createEffect, createSignal, Index, on } from "solid-js"
import { isServer } from "solid-js/web"

import type { TableOfContentsItemData } from "@kobalte/solidbase/client"
import { useCurrentPageData } from "@kobalte/solidbase/client"

import { cn } from "~/lib/utils"

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
    on(toc, (toc) => {
      setHeadings(
        flattenData(toc).map((item) => {
          const el = document.getElementById(item.href.slice(1)) ?? undefined
          return { ...item, el }
        })
      )
    })
  )

  if (!isServer) {
    window.addEventListener("scroll", () => {
      let current

      for (const heading of headings()) {
        if (!heading.el) continue
        if (heading.el.getBoundingClientRect().top < 300) {
          current = heading.href
        }
      }
      setCurrentSection(current)
    })
  }

  return (
    <aside class="sticky top-24">
      <nav aria-labelledby="on-this-page-title">
        <h2 id="on-this-page-title" class="font-medium">
          On This Page
        </h2>
        <ul class="m-0 list-none">
          <Index each={headings()}>
            {(section) => (
              <li class="mt-0 pt-2" style={{ "padding-left": `${section().depth}rem` }}>
                <a
                  class={cn(
                    "text-muted-foreground hover:text-foreground inline-block no-underline transition-colors",
                    section().href === currentSection()
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                  href={section().href}
                >
                  {section().title}
                </a>
              </li>
            )}
          </Index>
        </ul>
      </nav>
    </aside>
  )
}

function flattenData(data: TableOfContentsItemData[] | undefined, depth: number = 0): TocItem[] {
  if (!data) return []
  return data.flatMap((item) => {
    const currentItem = {
      title: item.title,
      href: item.href,
      depth
    }
    return [currentItem, ...flattenData(item.children, depth + 1)]
  })
}
