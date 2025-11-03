import { type ComponentProps, createMemo, splitProps } from "solid-js"

import { Index } from "~/registry/__index__"

export function ComponentPreview(props: ComponentProps<"div"> & { name: string }) {
  const [local, others] = splitProps(props, ["name"])

  const Preview = createMemo(() => {
    const Component = Index[local.name]?.component

    if (!Component) {
      return (
        <p class="text-muted-foreground text-sm">
          Component{" "}
          <code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {local.name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component />
  })

  return (
    <div
      class="preview flex min-h-[450px] w-full items-center justify-center rounded-lg border p-10"
      {...others}
    >
      <Preview />
    </div>
  )
}
