import { DestinationGrid } from '../components/organisms/DestinationGrid'
import { CollectionPageTemplate } from '../components/templates/CollectionPageTemplate'
import type { Destination } from '../components/molecules/DestinationCard'

const destinations: Destination[] = [
  {
    name: 'Kraków',
    description: 'Royal history, cobbled streets, and a lively cultural scene.',
  },
  {
    name: 'Gdańsk',
    description: 'Colourful waterfront architecture on the Baltic coast.',
  },
  {
    name: 'Warsaw',
    description: 'A resilient capital where restored history meets modern design.',
  },
  {
    name: 'Wrocław',
    description: 'Island bridges, a grand market square, and hundreds of dwarfs.',
  },
  {
    name: 'Zakopane',
    description: 'A mountain base for hiking, skiing, and highland traditions.',
  },
  {
    name: 'Poznań',
    description: 'Renaissance landmarks, lakeside escapes, and local flavours.',
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
