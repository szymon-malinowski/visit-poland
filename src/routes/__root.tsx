import { createRootRoute } from '@tanstack/react-router'
import { App } from '../App'
import { NotFoundPage } from '../pages/NotFoundPage'

export const Route = createRootRoute({
  component: App,
  notFoundComponent: NotFoundPage,
})
