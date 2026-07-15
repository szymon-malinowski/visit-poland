import {
  DestinationCard,
  type Destination,
} from '../molecules/DestinationCard'

type DestinationGridProps = {
  destinations: Destination[]
}

export function DestinationGrid({ destinations }: DestinationGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {destinations.map((destination, index) => (
        <DestinationCard
          destination={destination}
          index={index}
          key={destination.name}
        />
      ))}
    </div>
  )
}
