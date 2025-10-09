import { type ComponentProps, lazy, splitProps } from "solid-js"

export function ComponentPreview(props: ComponentProps<"div"> & { name: string }) {
  const [local, others] = splitProps(props, ["name"])
  const Comp = lazy(() => import("~/registry/examples/button-example"))
  return (
    <div
      class="preview flex h-[450px] w-full justify-center rounded-lg border p-10 data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center"
      {...others}
    >
      <Comp />
    </div>
  )
}
