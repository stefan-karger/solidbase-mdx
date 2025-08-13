import { type ComponentProps, lazy, splitProps } from "solid-js"

export function ComponentPreview(props: ComponentProps<"div"> & { name: string }) {
  const [local, others] = splitProps(props, ["name"])
  const Comp = lazy(() => import("~/registry/examples/button-example"))
  return (
    <div {...others}>
      <Comp />
    </div>
  )
}
