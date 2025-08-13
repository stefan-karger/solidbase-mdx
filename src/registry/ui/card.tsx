import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import { cn } from "~/lib/utils"

const Card: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="card"
      class={cn(
        "flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
        local.class
      )}
      {...others}
    />
  )
}

const CardHeader: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="card-header"
      class={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        local.class
      )}
      {...others}
    />
  )
}

const CardTitle: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div data-slot="card-title" class={cn("leading-none font-semibold", local.class)} {...others} />
  )
}

const CardDescription: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="card-description"
      class={cn("text-sm text-muted-foreground", local.class)}
      {...others}
    />
  )
}

const CardAction: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="card-action"
      class={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", local.class)}
      {...others}
    />
  )
}

const CardContent: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return <div data-slot="card-content" class={cn("px-6", local.class)} {...others} />
}

const CardFooter: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="card-footer"
      class={cn("flex items-center px-6 [.border-t]:pt-6", local.class)}
      {...others}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent }
