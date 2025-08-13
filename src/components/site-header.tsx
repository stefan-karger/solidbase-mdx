import { A } from "@solidjs/router"

import { GitHubLink } from "~/components/github-link"
import { MobileNavigation } from "~/components/mobile-navigation"
import { ModeToggle } from "~/components/mode-toggle"
import { Separator } from "~/registry/ui/separator"

import { Button } from "../registry/ui/button"

export function SiteHeader() {
  return (
    <header class="sticky top-0 z-50 w-full bg-background">
      <div class="container-wrapper">
        <div class="**:data-[slot=separator]:!h-4 container m-auto flex h-(--header-height) items-center justify-between">
          <div class="hidden lg:block">
            <Button as={A} class="size-9" href="/" size="icon" variant="ghost">
              <svg class="size-6" viewBox="-1 -1 26 26">
                <title>SolidUI</title>
                <path
                  class="fill-black dark:fill-white"
                  d="M23.25 17.01V6.987A2.48 2.48 0 0 0 22 4.841l-8.75-5.01a2.52 2.52 0 0 0-2.5 0L2 4.841A2.48 2.48 0 0 0 .75 6.99v10.02c0 .886.476 1.704 1.25 2.146l8.75 5.01a2.52 2.52 0 0 0 2.5 0l8.75-5.01a2.48 2.48 0 0 0 1.25-2.147"
                />
                <path
                  class="stroke-white dark:stroke-black"
                  d="M21 16.008V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.008a2.02 2.02 0 0 0-2 0L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008a2.02 2.02 0 0 0 2 0l7-4.008c.619-.355 1-1.01 1-1.718z"
                  fill="none"
                  stroke-width="1.5"
                />
                <path
                  class="stroke-white dark:stroke-black"
                  d="M12 22V12m0 0 8.73-5.04m-17.46 0L12 12"
                  stroke-width="1.5"
                />
              </svg>
            </Button>
          </div>
          <MobileNavigation />
          <div class="flex items-center gap-2">
            <GitHubLink />
            <Separator orientation="vertical" />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
