import { examples } from "~/registry/registry-examples"
import { hooks } from "~/registry/registry-hooks"
import { lib } from "~/registry/registry-lib"
import { ui } from "~/registry/registry-ui"
import type { Registry } from "~/registry/schema"

export const registry: Registry = {
  name: "SolidUI",
  homepage: "https://www.solid-ui.com",
  items: [...lib, ...ui, ...hooks, ...examples]
}
