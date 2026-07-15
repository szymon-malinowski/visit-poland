import { createFileRoute } from '@tanstack/react-router'
import { FoodPage } from '../pages/FoodPage'

export const Route = createFileRoute('/food')({
  component: FoodPage,
})
