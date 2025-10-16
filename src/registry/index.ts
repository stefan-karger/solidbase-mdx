import { hooks } from "~/registry/registry-hooks"
import { ui } from "~/registry/registry-ui"

export const registry = {
  name: "SolidUI",
  homepage: "https://www.solid-ui.com",
  items: [...ui, ...hooks]
}
