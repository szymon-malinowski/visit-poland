import { DestinationGrid } from '../components/organisms/DestinationGrid'
import { CollectionPageTemplate } from '../components/templates/CollectionPageTemplate'
import type { Destination } from '../components/molecules/DestinationCard'

const destinations: Destination[] = [
  {
    name: 'Kraków',
    description: 'Royal history, cobbled streets, and a lively cultural scene.',
    image: '/images/destinations/krakow.webp',
    imageAlt: "St. Mary's Basilica beside Kraków's Main Market Square",
  },
  {
    name: 'Gdańsk',
    description: 'Colourful waterfront architecture on the Baltic coast.',
    image: '/images/destinations/gdansk.webp',
    imageAlt: 'Historic buildings and the medieval Crane on the Motława River in Gdańsk',
  },
  {
    name: 'Warsaw',
    description: 'A resilient capital where restored history meets modern design.',
    image: '/images/destinations/warsaw.webp',
    imageAlt: 'Palace of Culture and Science rising above central Warsaw',
  },
  {
    name: 'Wrocław',
    description: 'Island bridges, a grand market square, and hundreds of dwarfs.',
    image: '/images/destinations/wroclaw.webp',
    imageAlt: 'Gothic Old Town Hall in Wrocław Market Square',
  },
  {
    name: 'Zakopane',
    description: 'A mountain base for hiking, skiing, and highland traditions.',
    image: '/images/destinations/zakopane.webp',
    imageAlt: 'Traditional wooden houses beneath the Tatra Mountains in Zakopane',
  },
  {
    name: 'Poznań',
    description: 'Renaissance landmarks, lakeside escapes, and local flavours.',
    image: '/images/destinations/poznan.webp',
    imageAlt: 'Colourful merchant houses and the Town Hall in Poznań Old Market Square',
  },
]

export function DestinationsPage() {
  return (
    <CollectionPageTemplate
      description="Find the Polish city or region that belongs on your itinerary."
      eyebrow="Places to go"
      title="Destinations"
    >
      <DestinationGrid destinations={destinations} />
    </CollectionPageTemplate>
  )
}
