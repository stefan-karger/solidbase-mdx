import type { ComponentProps, ParentProps } from "solid-js"

export const h1 = (props: ParentProps) => {
  return <h1 class="font-heading mt-2 scroll-m-20 text-4xl font-bold" {...props} />
}
export const h2 = (props: ParentProps) => {
  return (
    <h2
      class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  )
}
export const h3 = (props: ParentProps) => {
  return (
    <h3 class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
  )
}
export const h4 = (props: ParentProps) => {
  return (
    <h4 class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight" {...props} />
  )
}

export const pre = (props: ComponentProps<"pre">) => {
  return <pre class="no-scrollbar" {...props} />
}
