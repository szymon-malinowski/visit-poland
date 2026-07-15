import { createFileRoute } from '@tanstack/react-router'
import { AttractionsPage } from '../pages/AttractionsPage'

export const Route = createFileRoute('/attractions')({
  component: AttractionsPage,
})
