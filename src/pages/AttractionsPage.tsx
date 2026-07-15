import type { Attraction } from '../components/molecules/AttractionRow'
import { AttractionList } from '../components/organisms/AttractionList'
import { CollectionPageTemplate } from '../components/templates/CollectionPageTemplate'

const attractions: Attraction[] = [
  { name: 'Wawel Royal Castle', category: 'History', location: 'Kraków' },
  { name: 'Wieliczka Salt Mine', category: 'Heritage', location: 'Wieliczka' },
  { name: 'Tatra National Park', category: 'Nature', location: 'Małopolska' },
  { name: 'Malbork Castle', category: 'Architecture', location: 'Malbork' },
  { name: 'Białowieża Forest', category: 'Wildlife', location: 'Podlaskie' },
  {
    name: 'Museum of the Warsaw Uprising',
    category: 'Museum',
    location: 'Warsaw',
  },
]

export function AttractionsPage() {
  return (
    <CollectionPageTemplate
      description="Build a trip around Poland’s most memorable landmarks and landscapes."
      eyebrow="Things to see"
      title="Attractions"
    >
      <AttractionList attractions={attractions} />
    </CollectionPageTemplate>
  )
}
