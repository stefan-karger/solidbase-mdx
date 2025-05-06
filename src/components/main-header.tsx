import { MobileNavigation } from "./mobile-navigation"
import { ModeToggle } from "./mode-toggle"

export function MainHeader() {
  return (
    <header class="border-grid bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div class="container-wrapper">
        <div class="container m-auto flex h-14 items-center justify-between">
          <div class="hidden md:flex">NAV</div>
          <MobileNavigation />
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
