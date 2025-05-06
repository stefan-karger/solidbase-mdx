import { createSignal } from "solid-js"

import { Button } from "~/components/ui/button"
import { Drawer, DrawerContent, DrawerTrigger } from "~/components/ui/drawer"

export function MobileNavigation() {
  const [open, setOpen] = createSignal(false)

  return (
    <Drawer open={open()} onOpenChange={setOpen}>
      <DrawerTrigger
        as={Button<"button">}
        variant="ghost"
        size="icon"
        class="inline-flex md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-6"
        >
          <line
            x1="1"
            y1="8"
            x2="23"
            y2="8"
            style={{
              "transform-origin": "center",
              transition: "transform 0.3s ease-in-out",
              transform: open() ? "rotate(45deg) translateY(4px)" : ""
            }}
          />
          <line
            x1="1"
            y1="16"
            x2="23"
            y2="16"
            style={{
              "transform-origin": "center",
              transition: "transform 0.3s ease-in-out",
              transform: open() ? "rotate(-45deg) translateY(-4px)" : ""
            }}
          />
        </svg>
        <span class="sr-only">Toggle Menu</span>
      </DrawerTrigger>
      <DrawerContent class="min-h-[80svh]">LOOK AT ME I'M THE CONTENT!</DrawerContent>
    </Drawer>
  )
}
