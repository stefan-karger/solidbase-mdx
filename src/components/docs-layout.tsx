import type { ParentProps } from "solid-js"

import { MainNavigation } from "~/components/main-navigation"
import { TableOfContents } from "~/components/table-of-contents"

export function DocsLayout(props: ParentProps) {
  return (
    <div class="container-wrapper">
      <div class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <MainNavigation />
        <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div class="mx-auto w-full min-w-0">
            <article>{props.children}</article>
          </div>
          <div class="hidden text-sm xl:block">
            <TableOfContents />
          </div>
        </main>
      </div>
    </div>
  )
}
