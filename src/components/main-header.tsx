import { GitHubStarButton } from "~/components/github-star-button"
import { MobileNavigation } from "~/components/mobile-navigation"
import { ModeToggle } from "~/components/mode-toggle"

export function MainHeader() {
  return (
    <header class="border-grid bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div class="container-wrapper">
        <div class="container m-auto flex h-14 items-center justify-between">
          <div class="hidden md:flex">NAV</div>
          <MobileNavigation />
          <div class="flex items-center gap-2">
            <ModeToggle />
            <GitHubStarButton repo="stefan-karger/solid-ui" />
          </div>
        </div>
      </div>
    </header>
  )
}
