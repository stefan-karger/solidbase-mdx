import type { ValidComponent } from "solid-js"
import { mergeProps, splitProps } from "solid-js"

import type { PolymorphicProps } from "@kobalte/core"
import * as TextFieldPrimitive from "@kobalte/core/text-field"
import { cva } from "class-variance-authority"

import { cn } from "~/lib/utils"

type TextFieldRootProps<T extends ValidComponent = "div"> =
  TextFieldPrimitive.TextFieldRootProps<T> & {
    class?: string | undefined
  }

const TextField = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldRootProps<T>>
) => {
  const [local, others] = splitProps(props as TextFieldRootProps, ["class"])
  return (
    <TextFieldPrimitive.Root
      data-slot="textfield"
      class={cn("flex flex-col gap-2", local.class)}
      {...others}
    />
  )
}

type TextFieldInputProps<T extends ValidComponent = "input"> =
  TextFieldPrimitive.TextFieldInputProps<T> & {
    class?: string | undefined
    type?:
      | "button"
      | "checkbox"
      | "color"
      | "date"
      | "datetime-local"
      | "email"
      | "file"
      | "hidden"
      | "image"
      | "month"
      | "number"
      | "password"
      | "radio"
      | "range"
      | "reset"
      | "search"
      | "submit"
      | "tel"
      | "text"
      | "time"
      | "url"
      | "week"
  }

const TextFieldInput = <T extends ValidComponent = "input">(
  rawProps: PolymorphicProps<T, TextFieldInputProps<T>>
) => {
  const props = mergeProps<TextFieldInputProps<T>[]>({ type: "text" }, rawProps)
  const [local, others] = splitProps(props as TextFieldInputProps, ["type", "class"])
  return (
    <TextFieldPrimitive.Input
      type={local.type}
      data-slot="textfield-input"
      class={cn(
        "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        local.class
      )}
      {...others}
    />
  )
}

type TextFieldTextAreaProps<T extends ValidComponent = "textarea"> =
  TextFieldPrimitive.TextFieldTextAreaProps<T> & { class?: string | undefined }

const TextFieldTextArea = <T extends ValidComponent = "textarea">(
  props: PolymorphicProps<T, TextFieldTextAreaProps<T>>
) => {
  const [local, others] = splitProps(props as TextFieldTextAreaProps, ["class"])
  return (
    <TextFieldPrimitive.TextArea
      data-slot="textfield-textarea"
      class={cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:ring-destructive/40",
        local.class
      )}
      {...others}
    />
  )
}

const labelVariants = cva(
  "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  {
    variants: {
      variant: {
        label: "data-[invalid]:text-destructive",
        description: "font-normal text-muted-foreground",
        error: "text-xs text-destructive"
      }
    },
    defaultVariants: {
      variant: "label"
    }
  }
)

type TextFieldLabelProps<T extends ValidComponent = "label"> =
  TextFieldPrimitive.TextFieldLabelProps<T> & { class?: string | undefined }

const TextFieldLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, TextFieldLabelProps<T>>
) => {
  const [local, others] = splitProps(props as TextFieldLabelProps, ["class"])
  return (
    <TextFieldPrimitive.Label
      data-slot="textfield-label"
      class={cn(labelVariants(), local.class)}
      {...others}
    />
  )
}

type TextFieldDescriptionProps<T extends ValidComponent = "div"> =
  TextFieldPrimitive.TextFieldDescriptionProps<T> & {
    class?: string | undefined
  }

const TextFieldDescription = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldDescriptionProps<T>>
) => {
  const [local, others] = splitProps(props as TextFieldDescriptionProps, ["class"])
  return (
    <TextFieldPrimitive.Description
      data-slot="textfield-description"
      class={cn(labelVariants({ variant: "description" }), local.class)}
      {...others}
    />
  )
}

type TextFieldErrorMessageProps<T extends ValidComponent = "div"> =
  TextFieldPrimitive.TextFieldErrorMessageProps<T> & {
    class?: string | undefined
  }

const TextFieldErrorMessage = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldErrorMessageProps<T>>
) => {
  const [local, others] = splitProps(props as TextFieldErrorMessageProps, ["class"])
  return (
    <TextFieldPrimitive.ErrorMessage
      data-slot="textfield-error"
      class={cn(labelVariants({ variant: "error" }), local.class)}
      {...others}
    />
  )
}

export {
  TextField,
  TextFieldInput,
  TextFieldTextArea,
  TextFieldLabel,
  TextFieldDescription,
  TextFieldErrorMessage
}
