import { createEffect, createSignal, on, Show } from "solid-js"

import { IconGithub } from "~/components/icons"
import { Button } from "~/components/ui/button"

type GitHubRepoFormat = `${string}/${string}`

export function GitHubStarButton(props: { repo: GitHubRepoFormat }) {
  const [stars, setStars] = createSignal<number>()

  const fetchStars = async () => {
    const res = await fetch(`https://api.github.com/repos/${props.repo}`)
    const data = await res.json()
    setStars(data.stargazers_count)
  }

  createEffect(
    on(
      () => props.repo,
      () => fetchStars()
    )
  )

  return (
    <Button
      as="a"
      href={`https://github.com/${props.repo}`}
      target="_blank"
      rel="noopener noreferrer"
      variant="ghost"
    >
      <span class="flex items-center gap-2">
        <IconGithub />
        <Show when={stars()}>{(count) => count()}</Show>
      </span>
    </Button>
  )
}
