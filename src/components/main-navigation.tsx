import { Index, Match, Switch } from "solid-js"
import { useLocation } from "@solidjs/router"

import { Badge } from "~/components/ui/badge"
import { docsConfig } from "~/config/docs"
import { cn } from "~/lib/utils"

export function MainNavigation() {
  const location = useLocation()

  return (
    <aside class="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
      <div class="no-scrollbar relative h-full overflow-y-auto py-6 pr-6">
        <div class="flex flex-col gap-6">
          <Index each={docsConfig.sidebarNav}>
            {(category) => (
              <div class="flex flex-col gap-1">
                <h4 class="rounded-md px-2 py-1 text-sm font-medium">{category().title}</h4>
                <div class="grid grid-flow-row auto-rows-max gap-0.5 text-sm">
                  <Index each={category().items}>
                    {(link) => (
                      <a
                        href={link().href}
                        class={cn(
                          "hover:bg-accent hover:text-accent-foreground group relative flex h-8 w-full items-center rounded-lg px-2 after:absolute after:inset-x-0 after:inset-y-[-2px] after:rounded-lg",
                          link().href === location.pathname
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground font-normal"
                        )}
                      >
                        <span>{link().title}</span>
                        <Switch>
                          <Match when={link().status === "new"}>
                            <Badge variant="success" class="ml-2">
                              new
                            </Badge>
                          </Match>
                          <Match when={link().status === "updated"}>
                            <Badge variant="secondary" class="ml-2">
                              updated
                            </Badge>
                          </Match>
                        </Switch>
                      </a>
                    )}
                  </Index>
                </div>
              </div>
            )}
          </Index>
        </div>
      </div>
    </aside>
  )
}
