import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"

import { SolidBaseRoot } from "@kobalte/solidbase/client"

import "~/styles/globals.css"

export default function App() {
  return (
    <Router root={SolidBaseRoot}>
      <FileRoutes />
    </Router>
  )
}
