import { type ComponentProps, type ParentProps, splitProps } from "solid-js"

import * as T from "~/registry/ui/tabs"

export const h1 = (props: ComponentProps<"h1">) => {
  return <h1 class="mt-2 scroll-m-28 font-bold font-heading text-3xl tracking-tight" {...props} />
}
export const h2 = (props: ComponentProps<"h2">) => {
  return (
    <h2
      class="[&+p]:!mt-4 mt-12 scroll-m-28 font-heading font-medium text-2xl tracking-tight first:mt-0 lg:mt-20 [&>a]:no-underline *:[code]:text-2xl"
      {...props}
    />
  )
}
export const h3 = (props: ComponentProps<"h3">) => {
  return (
    <h3
      class="mt-8 scroll-m-28 font-heading font-semibold text-xl tracking-tight [&>a]:no-underline *:[code]:text-xl"
      {...props}
    />
  )
}

export const h4 = (props: ComponentProps<"h4">) => {
  return <h4 class="mt-8 scroll-m-28 font-heading font-medium text-lg tracking-tight" {...props} />
}

export const h5 = (props: ComponentProps<"h5">) => {
  return <h5 class="mt-8 scroll-m-28 font-medium text-lg tracking-tight" {...props} />
}

export const h6 = (props: ComponentProps<"h6">) => {
  return <h6 class="mt-8 scroll-m-28 font-medium text-base tracking-tight" {...props} />
}

export const a = (props: ComponentProps<"a">) => {
  return <a class="underline underline-offset-4" {...props} />
}

export const p = (props: ComponentProps<"p">) => {
  return <p class="leading-relaxed [&:not(:first-child)]:mt-6" {...props} />
}

export const strong = (props: ComponentProps<"strong">) => {
  return <strong class="font-medium" {...props} />
}

export const ul = (props: ComponentProps<"ul">) => {
  return <ul class="my-6 ml-6 list-decimal" {...props} />
}

export const li = (props: ComponentProps<"li">) => {
  return <li class="mt-2" {...props} />
}

export const blockquote = (props: ComponentProps<"blockquote">) => {
  return <blockquote class="mt-6 border-l-2 pl-6 italic" {...props} />
}

export const img = (props: ComponentProps<"img">) => {
  const [local, others] = splitProps(props, ["alt"])
  return <img alt={local.alt} class="rounded-md" {...others} />
}

export const hr = (props: ComponentProps<"hr">) => {
  return <hr class="my-4 md:my-8" {...props} />
}

export const pre = (props: ComponentProps<"pre">) => {
  return <pre class="no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none" {...props} />
}

export const Steps = (props: ParentProps) => {
  return <div class="[&>h3]:step steps *:[h3]:first:!mt-0 mb-12 [counter-reset:step]" {...props} />
}

export const Step = (props: ComponentProps<"h3">) => {
  return <h3 class="mt-8 scroll-m-32 font-heading font-medium text-xl tracking-tight" {...props} />
}

export const Tabs = (props: ComponentProps<typeof T.Tabs>) => {
  return <T.Tabs class="relative mt-6 w-full" {...props} />
}

export const TabsList = (props: ComponentProps<typeof T.TabsList>) => {
  return (
    <T.TabsList class="justify-start gap-4 rounded-none bg-transparent px-2 md:px-0" {...props} />
  )
}

export const TabsTrigger = (props: ComponentProps<typeof T.TabsTrigger>) => {
  return (
    <T.TabsTrigger
      class="px-0 text-base text-muted-foreground data-[selected=]:text-foreground data-[selected=]:shadow-none dark:data-[selected=]:border-transparent dark:data-[selected=]:bg-transparent"
      {...props}
    />
  )
}

export const TabsContent = (props: ComponentProps<typeof T.TabsContent>) => {
  return (
    <T.TabsContent
      class="relative bg-none [&>.steps]:mt-6 [&_h3.font-heading]:font-medium [&_h3.font-heading]:text-base *:[figure]:first:mt-0"
      {...props}
    />
  )
}

export { ComponentPreview } from "~/components/component-preview"
