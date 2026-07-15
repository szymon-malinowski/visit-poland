export type Attraction = {
  name: string
  category: string
  location: string
}

type AttractionRowProps = {
  attraction: Attraction
}

export function AttractionRow({ attraction }: AttractionRowProps) {
  return (
    <li className="list-row items-center gap-3 border-b border-base-300 last:border-b-0 md:grid md:grid-cols-[0.7fr_2fr_1fr] md:gap-8">
      <span className="badge badge-secondary badge-outline">
        {attraction.category}
      </span>
      <h2 className="font-serif text-xl font-semibold text-primary md:text-2xl">
        {attraction.name}
      </h2>
      <p className="text-base-content/60 md:text-right">
        {attraction.location}
      </p>
    </li>
  )
}
