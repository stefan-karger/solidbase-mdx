// @refresh reload
import { mount, StartClient } from "@solidjs/start/client"

// biome-ignore lint/style/noNonNullAssertion: it's just how it works <3
mount(() => <StartClient />, document.getElementById("app")!)
