import { createFileRoute } from '@tanstack/react-router'
import { DestinationsPage } from '../pages/DestinationsPage'

export const Route = createFileRoute('/destinations')({
  component: DestinationsPage,
})
