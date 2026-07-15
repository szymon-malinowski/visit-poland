export type Destination = {
  name: string
  description: string
}

type DestinationCardProps = {
  destination: Destination
  index: number
}

export function DestinationCard({
  destination,
  index,
}: DestinationCardProps) {
  return (
    <article className="card min-h-64 border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-md">
      <div className="card-body">
        <span className="badge badge-secondary badge-outline">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="card-title mt-8 font-serif text-2xl text-primary">
          {destination.name}
        </h2>
        <p className="leading-relaxed text-base-content/70">
          {destination.description}
        </p>
      </div>
    </article>
  )
}
