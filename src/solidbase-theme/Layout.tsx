import { Show } from "solid-js"
import { isServer } from "solid-js/web"
import { Title } from "@solidjs/meta"
import type { RouteSectionProps } from "@solidjs/router"
import { useMatch } from "@solidjs/router"

import { ColorModeProvider, ColorModeScript, cookieStorageManagerSSR } from "@kobalte/core"
import { getCookie } from "vinxi/http"

import { DocsLayout } from "~/components/docs-layout"
import { MainHeader } from "~/components/main-header"

function getServerCookies() {
  "use server"
  const colorMode = getCookie("kb-color-mode")
  return colorMode ? `kb-color-mode=${colorMode}` : ""
}

export default function (props: RouteSectionProps) {
  const storageManager = cookieStorageManagerSSR(isServer ? getServerCookies() : document.cookie)

  const isBlock = useMatch(() => "/blocks/*")
  const isDocsPage = useMatch(() => "/docs/*")

  return (
    <>
      <ColorModeScript storageType={storageManager.type} />
      <ColorModeProvider storageManager={storageManager}>
        <Title>SolidUI</Title>
        <Show when={!isBlock()} fallback={props.children}>
          <MainHeader />
          <main class="expressive-code-overrides">
            <Show when={isDocsPage()} fallback={props.children}>
              <DocsLayout>{props.children}</DocsLayout>
            </Show>
          </main>
        </Show>
      </ColorModeProvider>
    </>
  )
}
