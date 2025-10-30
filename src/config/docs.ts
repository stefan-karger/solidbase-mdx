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
      title: "Components",
      href: "/docs/components"
    }
  ],
  sidebarNav: [
    {
      title: "Sections",
      items: [
        {
          title: "Components",
          href: "/docs/components"
        }
      ]
    },
    {
      title: "Components",
      items: [
        {
          title: "Button",
          href: "/docs/components/button"
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox"
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip"
        }
      ]
    }
  ]
}

export const flatConfig = () => [
  ...docsConfig.mainNav,
  ...docsConfig.sidebarNav.flatMap((category) => category.items)
]

export const getPrevAndNext = (curHref: string) => {
  const allElements = flatConfig()
  const curIdx = allElements.findIndex((el) => el.href === curHref)

  let prev: NavElement | null = null
  let next: NavElement | null = null

  if (curIdx === -1) {
    return { prev: null, next: null }
  }

  if (curIdx > 0) {
    prev = allElements[curIdx - 1]
  }

  if (curIdx < allElements.length - 1) {
    next = allElements[curIdx + 1]
  }

  return { prev, next }
}
