import type { Component, ComponentProps, JSX, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import * as DialogPrimitive from "@kobalte/core/dialog"
import type { PolymorphicProps } from "@kobalte/core/polymorphic"

import { cn } from "~/lib/utils"

const Dialog: Component<DialogPrimitive.DialogRootProps> = (props) => (
  <DialogPrimitive.Root data-slot="dialog" {...props} />
)

const DialogTrigger: Component<DialogPrimitive.DialogTriggerProps> = (props) => (
  <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
)

const DialogPortal: Component<DialogPrimitive.DialogPortalProps> = (props) => {
  const [, rest] = splitProps(props, ["children"])
  return (
    <DialogPrimitive.Portal data-slot="dialog-portal" {...rest}>
      <div class="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
        {props.children}
      </div>
    </DialogPrimitive.Portal>
  )
}

type DialogOverlayProps<T extends ValidComponent = "div"> =
  DialogPrimitive.DialogOverlayProps<T> & { class?: string | undefined }

const DialogOverlay = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DialogOverlayProps<T>>
) => {
  const [, rest] = splitProps(props as DialogOverlayProps, ["class"])
  return (
    <DialogPrimitive.Overlay
      class={cn(
        "data-[closed]:fade-out-0 data-[expanded]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[closed]:animate-out data-[expanded]:animate-in",
        props.class
      )}
      data-slot="dialog-overlay"
      {...rest}
    />
  )
}

type DialogContentProps<T extends ValidComponent = "div"> =
  DialogPrimitive.DialogContentProps<T> & {
    class?: string | undefined
    children?: JSX.Element
  }

const DialogContent = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, DialogContentProps<T>>
) => {
  const [, rest] = splitProps(props as DialogContentProps, ["class", "children"])
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        class={cn(
          "data-[closed]:fade-out-0 data-[closed]:zoom-out-95 data-[expanded]:fade-in-0 data-[expanded]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[closed]:animate-out data-[expanded]:animate-in sm:max-w-lg",
          props.class
        )}
        data-slot="dialog-content"
        {...rest}
      >
        {props.children}
        <DialogPrimitive.CloseButton
          class="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[expanded]:bg-accent data-[expanded]:text-muted-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
          data-slot="dialog-close"
        >
          <svg
            class="size-4"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
          <span class="sr-only">Close</span>
        </DialogPrimitive.CloseButton>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

const DialogHeader: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <div
      class={cn("flex flex-col gap-2 text-center sm:text-left", props.class)}
      data-slot="dialog-header"
      {...rest}
    />
  )
}

const DialogFooter: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <div
      class={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", props.class)}
      data-slot="dialog-footer"
      {...rest}
    />
  )
}

type DialogTitleProps<T extends ValidComponent = "h2"> = DialogPrimitive.DialogTitleProps<T> & {
  class?: string | undefined
}

const DialogTitle = <T extends ValidComponent = "h2">(
  props: PolymorphicProps<T, DialogTitleProps<T>>
) => {
  const [, rest] = splitProps(props as DialogTitleProps, ["class"])
  return (
    <DialogPrimitive.Title
      class={cn("font-semibold text-lg leading-none", props.class)}
      data-slot="dialog-title"
      {...rest}
    />
  )
}

type DialogDescriptionProps<T extends ValidComponent = "p"> =
  DialogPrimitive.DialogDescriptionProps<T> & {
    class?: string | undefined
  }

const DialogDescription = <T extends ValidComponent = "p">(
  props: PolymorphicProps<T, DialogDescriptionProps<T>>
) => {
  const [, rest] = splitProps(props as DialogDescriptionProps, ["class"])
  return (
    <DialogPrimitive.Description
      class={cn("text-muted-foreground text-sm", props.class)}
      data-slot="dialog-description"
      {...rest}
    />
  )
}

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription
}
