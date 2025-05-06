type NavElement = {
  title: string
  href: string
  external?: boolean
  status?: "new" | "updated"
}

type NavCategory = {
  title: string
  items: NavElement[]
}

type Config = {
  mainNav: NavElement[]
  sidebarNav: NavCategory[]
}

export const docsConfig: Config = {
  mainNav: [
    {
      title: "Docs",
      href: "/docs/introduction"
    },
    {
      title: "Components",
      href: "/docs/components/accordion"
    },
    {
      title: "Examples",
      href: "/examples/cards"
    },
    {
      title: "Blocks",
      href: "/blocks"
    }
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction"
        },
        {
          title: "Installation",
          href: "/docs/installation/overview"
        },
        {
          title: "Dark Mode",
          href: "/docs/dark-mode/overview"
        },
        {
          title: "CLI",
          href: "/docs/cli"
        },
        {
          title: "Figma",
          href: "/docs/figma"
        },
        {
          title: "About",
          href: "/docs/about"
        }
      ]
    },
    {
      title: "Installation",
      items: [
        {
          title: "SolidStart",
          href: "/docs/installation/solid-start"
        },
        {
          title: "Vite",
          href: "/docs/installation/vite"
        },
        {
          title: "Astro",
          href: "/docs/installation/astro"
        },
        {
          title: "Tauri",
          href: "/docs/installation/tauri"
        },
        {
          title: "Manual",
          href: "/docs/installation/manual"
        }
      ]
    },
    {
      title: "Visualizations",
      items: [
        {
          title: "Bar List",
          href: "/docs/components/bar-list"
        },
        {
          title: "Charts",
          href: "/docs/components/charts"
        },
        {
          title: "Delta Bar",
          href: "/docs/components/delta-bar"
        },
        {
          title: "Progress",
          href: "/docs/components/progress"
        },
        {
          title: "Progress Circle",
          href: "/docs/components/progress-circle"
        }
      ]
    },
    {
      title: "UI",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion"
        },
        {
          title: "Alert",
          href: "/docs/components/alert"
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog"
        },
        {
          title: "Aspect Ratio",
          href: "/docs/components/aspect-ratio"
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar"
        },
        {
          title: "Badge",
          href: "/docs/components/badge"
        },
        {
          title: "Badge Delta",
          href: "/docs/components/badge-delta"
        },
        {
          title: "Breadcrumb",
          href: "/docs/components/breadcrumb"
        },
        {
          title: "Button",
          href: "/docs/components/button"
        },
        {
          title: "Callout",
          href: "/docs/components/callout"
        },
        {
          title: "Card",
          href: "/docs/components/card"
        },
        {
          title: "Carousel",
          href: "/docs/components/carousel"
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox"
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible"
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox"
        },
        {
          title: "Command",
          href: "/docs/components/command"
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu"
        },
        {
          title: "Data Table",
          href: "/docs/components/data-table",
          status: "new"
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          status: "new"
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog"
        },
        {
          title: "Drawer",
          href: "/docs/components/drawer"
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu"
        },
        {
          title: "Hover Card",
          href: "/docs/components/hover-card"
        },
        {
          title: "Label",
          href: "/docs/components/label"
        },
        {
          title: "Menubar",
          href: "/docs/components/menubar"
        },
        {
          title: "Navigation Menu",
          href: "/docs/components/navigation-menu"
        },
        {
          title: "Number Field",
          href: "/docs/components/number-field"
        },
        {
          title: "OTP Field",
          href: "/docs/components/otp-field"
        },
        {
          title: "Pagination",
          href: "/docs/components/pagination"
        },
        {
          title: "Popover",
          href: "/docs/components/popover"
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group"
        },
        {
          title: "Resizable",
          href: "/docs/components/resizable"
        },
        {
          title: "Select",
          href: "/docs/components/select"
        },
        {
          title: "Separator",
          href: "/docs/components/separator"
        },
        {
          title: "Sheet",
          href: "/docs/components/sheet"
        },
        {
          title: "Sidebar",
          href: "/docs/components/sidebar",
          status: "new"
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton"
        },
        {
          title: "Slider",
          href: "/docs/components/slider"
        },
        {
          title: "Sonner",
          href: "/docs/components/sonner"
        },
        {
          title: "Switch",
          href: "/docs/components/switch"
        },
        {
          title: "Table",
          href: "/docs/components/table"
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs"
        },
        {
          title: "Text Field",
          href: "/docs/components/text-field"
        },
        {
          title: "Timeline",
          href: "/docs/components/timeline"
        },
        {
          title: "Toast",
          href: "/docs/components/toast"
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle"
        },
        {
          title: "Toggle Group",
          href: "/docs/components/toggle-group"
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip"
        }
      ]
    }
  ]
}
