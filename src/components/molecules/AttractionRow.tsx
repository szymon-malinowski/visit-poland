export type Attraction = {
  name: string
  category: string
  location: string
  image: string
  imageAlt: string
}

type AttractionRowProps = {
  attraction: Attraction
}

export function AttractionRow({ attraction }: AttractionRowProps) {
  return (
    <li className="list-row grid gap-4 border-b border-base-300 p-4 last:border-b-0 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-center md:grid-cols-[10rem_minmax(0,1fr)_auto] md:gap-6">
      <figure className="h-44 overflow-hidden rounded-box bg-base-200 sm:h-28">
        <img
          alt={attraction.imageAlt}
          className="size-full object-cover"
          loading="lazy"
          src={attraction.image}
        />
      </figure>
      <div className="min-w-0">
        <span className="badge badge-secondary badge-outline">
          {attraction.category}
        </span>
        <h2 className="mt-3 font-serif text-xl font-semibold text-primary md:text-2xl">
          {attraction.name}
        </h2>
      </div>
      <p className="text-base-content/60 sm:col-start-2 md:col-start-auto md:text-right">
        {attraction.location}
      </p>
    </li>
  )
}
