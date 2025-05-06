import { Show } from "solid-js"
import { Title } from "@solidjs/meta"
import type { RouteSectionProps } from "@solidjs/router"
import { useMatch } from "@solidjs/router"

import { DocsLayout } from "~/components/docs-layout"
import { MainHeader } from "~/components/main-header"

export default function (props: RouteSectionProps) {
  const isBlock = useMatch(() => "/blocks/*")
  const isDocsPage = useMatch(() => "/docs/*")

  return (
    <>
      <Title>SolidUI</Title>
      <Show when={!isBlock()} fallback={props.children}>
        <MainHeader />
        <main class="expressive-code-overrides">
          <Show when={isDocsPage()} fallback={props.children}>
            <DocsLayout>{props.children}</DocsLayout>
          </Show>
        </main>
      </Show>
    </>
  )
}
