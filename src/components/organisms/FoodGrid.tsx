import { FoodCard, type Food } from '../molecules/FoodCard'

type FoodGridProps = {
  foods: Food[]
}

export function FoodGrid({ foods }: FoodGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {foods.map((food) => (
        <FoodCard food={food} key={food.name} />
      ))}
    </div>
  )
}
