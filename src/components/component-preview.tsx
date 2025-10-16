import { type ComponentProps, splitProps } from "solid-js"

export function ComponentPreview(props: ComponentProps<"div"> & { name: string }) {
  const [, others] = splitProps(props, ["name"])
  return <div class="preview flex h-[450px] w-full items-center justify-center p-10" {...others} />
}
