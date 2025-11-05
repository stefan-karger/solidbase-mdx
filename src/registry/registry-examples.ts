import type { Registry } from "~/registry/schema"

export const examples: Registry["items"] = [
  {
    name: "button-default",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-default.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-destructive",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-destructive.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-ghost",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-ghost.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-icon",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-icon.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-link",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-link.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-loading",
    type: "registry:example",
    registryDependencies: ["button", "spinner"],
    files: [
      {
        path: "examples/button-loading.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-outline",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-outline.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-rounded",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-rounded.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-secondary",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-secondary.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-sizes",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-sizes.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "button-with-icon",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-with-icon.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "dropdown-menu-checkboxes",
    type: "registry:example",
    registryDependencies: ["dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-checkboxes.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "dropdown-menu-demo",
    type: "registry:example",
    registryDependencies: ["dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "dropdown-menu-dialog",
    type: "registry:example",
    registryDependencies: ["dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-dialog.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "dropdown-menu-radio-group",
    type: "registry:example",
    registryDependencies: ["dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-radio-group.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "field-demo",
    type: "registry:example",
    registryDependencies: ["field"],
    files: [
      {
        path: "examples/field-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "select-demo",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-demo.tsx",
        type: "registry:example"
      }
    ]
  },
  {
    name: "tooltip-demo",
    type: "registry:example",
    registryDependencies: ["tooltip"],
    files: [
      {
        path: "examples/tooltip-demo.tsx",
        type: "registry:example"
      }
    ]
  }
]
