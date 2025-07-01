import { createSignal, onMount } from "solid-js"
import { A } from "@solidjs/router"

import { IconGithub } from "~/components/icons"
import { Button } from "~/components/ui/button"

const FALLBACK_STAR_COUNT = 1200

async function getGithubStarCount() {
  try {
    const res = await fetch("https://ungh.cc/repos/stefan-karger/solid-ui")
    const data = await res.json()
    return data.repo?.stars ?? FALLBACK_STAR_COUNT
  } catch (error) {
    console.error(error)
    return FALLBACK_STAR_COUNT
  }
}

export function GitHubLink() {
  const [stars, setStars] = createSignal(FALLBACK_STAR_COUNT)

  onMount(async () => {
    const stars = await getGithubStarCount()
    setStars(stars)
  })

  const beautify = () =>
    stars() >= 1000 ? `${(stars() / 1000).toFixed(1)}k` : stars().toLocaleString()

  return (
    <Button
      as={A}
      href={`https://github.com/stefan-karger/solid-ui`}
      target="_blank"
      rel="noreferrer"
      size="sm"
      variant="ghost"
      class="h-8 shadow-none"
    >
      <span class="flex items-center gap-2">
        <IconGithub />
        <span class="text-muted-foreground text-xs tabular-nums">{beautify()}</span>
      </span>
    </Button>
  )
}
