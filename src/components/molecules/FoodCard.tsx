export type Food = {
  name: string
  category: string
  description: string
  image: string
  imageAlt: string
}

type FoodCardProps = {
  food: Food
}

export function FoodCard({ food }: FoodCardProps) {
  return (
    <article className="card overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <figure className="h-52">
        <img
          className="size-full object-cover transition-transform duration-500 hover:scale-105"
          src={food.image}
          alt={food.imageAlt}
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <span className="badge badge-secondary badge-outline">
          {food.category}
        </span>
        <h2 className="card-title mt-8 font-serif text-2xl text-primary">
          {food.name}
        </h2>
        <p className="leading-relaxed text-base-content/70">
          {food.description}
        </p>
      </div>
    </article>
  )
}
