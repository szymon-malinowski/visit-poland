import {
  AttractionRow,
  type Attraction,
} from '../molecules/AttractionRow'

type AttractionListProps = {
  attractions: Attraction[]
}

export function AttractionList({ attractions }: AttractionListProps) {
  return (
    <ul className="list rounded-box border border-base-300 bg-base-100 shadow-sm">
      {attractions.map((attraction) => (
        <AttractionRow attraction={attraction} key={attraction.name} />
      ))}
    </ul>
  )
}
