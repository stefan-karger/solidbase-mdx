import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js"
import { mergeProps, splitProps } from "solid-js"

import * as SheetPrimitive from "@kobalte/core/dialog"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const Sheet: Component<SheetPrimitive.DialogRootProps> = (props) => {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

const SheetTrigger = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, SheetPrimitive.DialogTriggerProps<T>>
) => {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

const SheetClose = <T extends ValidComponent = "button">(
  props: PolymorphicProps<T, SheetPrimitive.DialogCloseButtonProps<T>>
) => {
  return <SheetPrimitive.CloseButton data-slot="sheet-close" {...props} />
}

const SheetPortal: Component<SheetPrimitive.DialogPortalProps> = (props) => {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

type SheetOverlayProps<T extends ValidComponent = "div"> = SheetPrimitive.DialogOverlayProps<T> & {
  class?: string | undefined
}

const SheetOverlay = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SheetOverlayProps<T>>
) => {
  const [local, others] = splitProps(props as SheetOverlayProps, ["class"])
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      class={cn(
        "fixed inset-0 z-50 bg-black/50 data-[closed=]:animate-out data-[closed=]:fade-out-0 data-[expanded=]:animate-in data-[expanded=]:fade-in-0",
        local.class
      )}
      {...others}
    />
  )
}

type SheetContentProps<T extends ValidComponent = "div"> = SheetPrimitive.DialogContentProps<T> & {
  class?: string | undefined
  children?: JSX.Element
  side?: "top" | "right" | "bottom" | "left"
}

const SheetContent = <T extends ValidComponent = "div">(
  rawProps: PolymorphicProps<T, SheetContentProps<T>>
) => {
  const props = mergeProps<SheetContentProps<T>[]>({ side: "right" }, rawProps)
  const [local, others] = splitProps(props as SheetContentProps, ["class", "children", "side"])
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        class={cn(
          "fixed z-50 flex flex-col gap-4 bg-background shadow-lg transition ease-in-out data-[closed=]:animate-out data-[closed=]:duration-300 data-[expanded=]:animate-in data-[expanded=]:duration-500",
          local.side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 border-l data-[closed=]:slide-out-to-right data-[expanded=]:slide-in-from-right sm:max-w-sm",
          local.side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 border-r data-[closed=]:slide-out-to-left data-[expanded=]:slide-in-from-left sm:max-w-sm",
          local.side === "top" &&
            "inset-x-0 top-0 h-auto border-b data-[closed=]:slide-out-to-top data-[expanded=]:slide-in-from-top",
          local.side === "bottom" &&
            "inset-x-0 bottom-0 h-auto border-t data-[closed=]:slide-out-to-bottom data-[expanded=]:slide-in-from-bottom",
          local.class
        )}
        {...others}
      >
        {local.children}
        <SheetClose class="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
          <span class="sr-only">Close</span>
        </SheetClose>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

const SheetHeader: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="sheet-header"
      class={cn("flex flex-col gap-1.5 p-4", local.class)}
      {...others}
    />
  )
}

const SheetFooter: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      data-slot="sheet-footer"
      class={cn("mt-auto flex flex-col gap-2 p-4", local.class)}
      {...others}
    />
  )
}

type SheetTitleProps<T extends ValidComponent = "h2"> = SheetPrimitive.DialogTitleProps<T> & {
  class?: string | undefined
}

const SheetTitle = <T extends ValidComponent = "h2">(
  props: PolymorphicProps<T, SheetTitleProps<T>>
) => {
  const [local, others] = splitProps(props as SheetTitleProps, ["class"])
  return (
    <SheetPrimitive.Title class={cn("font-semibold text-foreground", local.class)} {...others} />
  )
}

type SheetDescriptionProps<T extends ValidComponent = "p"> =
  SheetPrimitive.DialogDescriptionProps<T> & { class?: string | undefined }

const SheetDescription = <T extends ValidComponent = "p">(
  props: PolymorphicProps<T, SheetDescriptionProps<T>>
) => {
  const [local, others] = splitProps(props as SheetDescriptionProps, ["class"])
  return (
    <SheetPrimitive.Description
      class={cn("text-sm text-muted-foreground", local.class)}
      {...others}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription
}
