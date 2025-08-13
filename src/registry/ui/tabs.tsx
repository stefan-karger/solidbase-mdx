import type { ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import * as TabsPrimitive from "@kobalte/core/tabs"

import { cn } from "~/lib/utils"

type TabsProps<T extends ValidComponent = "div"> = TabsPrimitive.TabsRootProps<T> & {
  class?: string | undefined
}

const Tabs = <T extends ValidComponent = "div">(props: PolymorphicProps<T, TabsProps<T>>) => {
  const [local, others] = splitProps(props as TabsProps, ["class"])
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      class={cn("flex flex-col gap-2", local.class)}
      {...others}
    />
  )
}

type TabsListProps<T extends ValidComponent = "div"> = TabsPrimitive.TabsListProps<T> & {
  class?: string | undefined
}

const TabsList = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsListProps<T>>
) => {
  const [local, others] = splitProps(props as TabsListProps, ["class"])
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      class={cn(
        "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground",
        local.class
      )}
      {...others}
    />
  )
}

type TabsTriggerProps<T extends ValidComponent = "button"> = TabsPrimitive.TabsTriggerProps<T> & {
  class?: string | undefined
}

const TabsTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, TabsTriggerProps<T>>
) => {
  const [local, others] = splitProps(props as TabsTriggerProps, ["class"])
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      class={cn(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 data-[selected]:shadow-sm data-[state=active]:bg-background dark:text-muted-foreground dark:data-[selected]:border-input dark:data-[selected]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        local.class
      )}
      {...others}
    />
  )
}

type TabsContentProps<T extends ValidComponent = "div"> = TabsPrimitive.TabsContentProps<T> & {
  class?: string | undefined
}

const TabsContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsContentProps<T>>
) => {
  const [local, others] = splitProps(props as TabsContentProps, ["class"])
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      class={cn("flex-1 outline-none", local.class)}
      {...others}
    />
  )
}

type TabsIndicatorProps<T extends ValidComponent = "div"> = TabsPrimitive.TabsIndicatorProps<T> & {
  class?: string | undefined
}

const TabsIndicator = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TabsIndicatorProps<T>>
) => {
  const [local, others] = splitProps(props as TabsIndicatorProps, ["class"])
  return (
    <TabsPrimitive.Indicator
      class={cn(
        "duration-250ms absolute transition-all data-[orientation=horizontal]:-bottom-px data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:-right-px data-[orientation=vertical]:w-[2px]",
        local.class
      )}
      {...others}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsIndicator }
