import type { JSX, ValidComponent } from "solid-js"
import { splitProps } from "solid-js"

import type { PolymorphicProps } from "@kobalte/core/polymorphic"
import * as SliderPrimitive from "@kobalte/core/slider"

import { Label } from "~/registry/ui/label"
import { cn } from "~/lib/utils"

type SliderRootProps<T extends ValidComponent = "div"> = SliderPrimitive.SliderRootProps<T> & {
  class?: string | undefined
}

const Slider = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderRootProps<T>>
) => {
  const [local, others] = splitProps(props as SliderRootProps, ["class"])
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      class={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        local.class
      )}
      {...others}
    />
  )
}

type SliderTrackProps<T extends ValidComponent = "div"> = SliderPrimitive.SliderTrackProps<T> & {
  class?: string | undefined
}

const SliderTrack = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderTrackProps<T>>
) => {
  const [local, others] = splitProps(props as SliderTrackProps, ["class"])
  return (
    <SliderPrimitive.Track
      data-slot="slider-track"
      class={cn(
        "relative grow rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
        local.class
      )}
      {...others}
    />
  )
}

type SliderFillProps<T extends ValidComponent = "div"> = SliderPrimitive.SliderFillProps<T> & {
  class?: string | undefined
}

const SliderFill = <T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SliderFillProps<T>>
) => {
  const [local, others] = splitProps(props as SliderFillProps, ["class"])
  return (
    <SliderPrimitive.Fill
      data-slot="slider-fill"
      class={cn(
        "absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full",
        local.class
      )}
      {...others}
    />
  )
}

type SliderThumbProps<T extends ValidComponent = "span"> = SliderPrimitive.SliderThumbProps<T> & {
  class?: string | undefined
  children?: JSX.Element
}

const SliderThumb = <T extends ValidComponent = "span">(
  props: PolymorphicProps<T, SliderThumbProps<T>>
) => {
  const [local, others] = splitProps(props as SliderThumbProps, ["class", "children"])
  return (
    <SliderPrimitive.Thumb
      data-slot="slider-thumb"
      class={cn(
        "block size-4 shrink-0 rounded-full border border-primary bg-background shadow-sm ring-ring/50 transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-[orientation=horizontal]:top-[-5px] data-[orientation=vertical]:left-[-5px]",
        local.class
      )}
      {...others}
    >
      <SliderPrimitive.Input />
    </SliderPrimitive.Thumb>
  )
}

const SliderLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, SliderPrimitive.SliderLabelProps<T>>
) => {
  return <SliderPrimitive.Label as={Label} {...props} />
}

const SliderValueLabel = <T extends ValidComponent = "label">(
  props: PolymorphicProps<T, SliderPrimitive.SliderValueLabelProps<T>>
) => {
  return <SliderPrimitive.ValueLabel as={Label} {...props} />
}

export { Slider, SliderTrack, SliderFill, SliderThumb, SliderLabel, SliderValueLabel }
