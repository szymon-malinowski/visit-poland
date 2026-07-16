import type { Attraction } from '../components/molecules/AttractionRow'
import { AttractionList } from '../components/organisms/AttractionList'
import { CollectionPageTemplate } from '../components/templates/CollectionPageTemplate'

const attractions: Attraction[] = [
  {
    name: 'Wawel Royal Castle',
    category: 'History',
    location: 'Kraków',
    image: '/images/attractions/wawel-castle.webp',
    imageAlt: 'Wawel Royal Castle above the Vistula River in Kraków',
  },
  {
    name: 'Wieliczka Salt Mine',
    category: 'Heritage',
    location: 'Wieliczka',
    image: '/images/attractions/wieliczka-salt-mine.webp',
    imageAlt: 'Salt-carved Saint Kinga’s Chapel in the Wieliczka Salt Mine',
  },
  {
    name: 'Tatra National Park',
    category: 'Nature',
    location: 'Małopolska',
    image: '/images/attractions/tatra-national-park.webp',
    imageAlt: 'Tatra peaks reflected in the clear water of Morskie Oko',
  },
  {
    name: 'Malbork Castle',
    category: 'Architecture',
    location: 'Malbork',
    image: '/images/attractions/malbork-castle.webp',
    imageAlt: 'Red-brick walls and towers of Malbork Castle across the river',
  },
  {
    name: 'Białowieża Forest',
    category: 'Wildlife',
    location: 'Podlaskie',
    image: '/images/attractions/bialowieza-forest.webp',
    imageAlt: 'European bison in a sunlit clearing in Białowieża Forest',
  },
  {
    name: 'Museum of the Warsaw Uprising',
    category: 'Museum',
    location: 'Warsaw',
    image: '/images/attractions/warsaw-uprising-museum.webp',
    imageAlt: 'Warsaw Uprising Museum brick building and memorial tower',
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
