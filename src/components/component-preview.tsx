import { type ComponentProps, splitProps } from "solid-js"

export function ComponentPreview(props: ComponentProps<"div"> & { name: string }) {
  const [, others] = splitProps(props, ["name"])
  return (
    <div
      class="preview flex h-[450px] w-full justify-center rounded-lg border p-10 data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center"
      {...others}
    />
  )
}
