// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server"

import { getHtmlProps } from "@kobalte/solidbase/server"

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html {...getHtmlProps()}>
        <head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
          <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
          <link href="/favicon.ico" rel="shortcut icon" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <meta content="SolidUI" name="apple-mobile-web-app-title" />
          <link href="/site.webmanifest" rel="manifest" />
          {assets}
        </head>
        <body class="overscroll-none font-sans text-foreground antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)]">
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
))
