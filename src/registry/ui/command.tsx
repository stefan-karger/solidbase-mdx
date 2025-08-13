import { type Component, type ComponentProps, splitProps, type ValidComponent } from "solid-js"

import type { PolymorphicProps } from "@kobalte/core"
import * as CommandPrimitive from "@kobalte/core/search"

import { cn } from "~/lib/utils"

type CommandProps<
  Option,
  OptGroup = never,
  T extends ValidComponent = "div"
> = CommandPrimitive.SearchRootProps<Option, OptGroup, T> & {
  class?: string | undefined
}

const Command = <Option, OptGroup = never, T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CommandProps<Option, OptGroup, T>>
) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <CommandPrimitive.Root
      class={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
        local.class
      )}
      data-slot="command"
      open
      {...others}
    />
  )
}

type CommandInputProps = CommandPrimitive.SearchInputProps & {
  class?: string | undefined
}

const CommandInput: Component<CommandInputProps> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <CommandPrimitive.Control
      class="flex h-9 items-center gap-2 border-b px-3"
      data-slot="command-input-wrapper"
    >
      <CommandPrimitive.Indicator>
        <CommandPrimitive.Icon>
          <svg
            class="size-4 shrink-0 opacity-50"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
        </CommandPrimitive.Icon>
      </CommandPrimitive.Indicator>
      <CommandPrimitive.Input
        class={cn(
          "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          local.class
        )}
        data-slot="command-input"
        {...others}
      />
    </CommandPrimitive.Control>
  )
}

const CommandContent = CommandPrimitive.Content

type CommandListProps<
  Option,
  OptGroup = never,
  T extends ValidComponent = "ul"
> = CommandPrimitive.SearchListboxProps<Option, OptGroup, T> & {
  class?: string | undefined
}

const CommandList = <Option, OptGroup = never, T extends ValidComponent = "ul">(
  props: PolymorphicProps<T, CommandListProps<Option, OptGroup, T>>
) => {
  const [local, others] = splitProps(props as CommandListProps<Option>, ["class"])
  return (
    <CommandPrimitive.Listbox
      class={cn("max-h-[300px] scroll-py-1 overflow-y-auto overflow-x-hidden", local.class)}
      data-slot="command-list"
      {...others}
    />
  )
}

type CommandEmptyProps<T extends ValidComponent = "span"> =
  CommandPrimitive.SearchNoResultProps<T> & {
    class?: string | undefined
  }

const CommandEmpty = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, CommandEmptyProps<T>>
) => {
  const [local, others] = splitProps(props as CommandEmptyProps, ["class"])
  return (
    <CommandPrimitive.NoResult
      class={cn("py-6 text-center text-sm", local.class)}
      data-slot="command-empty"
      {...others}
    />
  )
}

type CommandItemProps<T extends ValidComponent = "li"> = CommandPrimitive.SearchItemProps<T> & {
  class?: string | undefined
}

const CommandItem = <T extends ValidComponent = "li">(
  props: PolymorphicProps<T, CommandItemProps<T>>
) => {
  const [local, others] = splitProps(props as CommandItemProps, ["class"])
  return (
    <CommandPrimitive.Item
      class={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
        local.class
      )}
      data-slot="command-item"
      {...others}
    />
  )
}

const CommandItemLabel = CommandPrimitive.ItemLabel
const CommandItemDescription = CommandPrimitive.ItemDescription

const CommandGroupLabel: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"])
  return (
    <div
      class={cn("scroll-mt-16 p-3 pb-1 font-medium text-muted-foreground text-xs", local.class)}
      {...others}
    />
  )
}

export {
  Command,
  CommandInput,
  CommandContent,
  CommandList,
  CommandEmpty,
  CommandItem,
  CommandItemLabel,
  CommandItemDescription,
  CommandGroupLabel
}
