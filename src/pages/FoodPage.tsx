import type { Food } from '../components/molecules/FoodCard'
import { FoodGrid } from '../components/organisms/FoodGrid'
import { CollectionPageTemplate } from '../components/templates/CollectionPageTemplate'

const foods: Food[] = [
  {
    name: 'Pierogi ruskie',
    category: 'Dumplings',
    description:
      'Hand-folded dumplings filled with potato and twaróg, finished with fried onions.',
    image: '/images/food/pierogi.webp',
    imageAlt: 'Pierogi ruskie with fried onions and sour cream',
  },
  {
    name: 'Żurek',
    category: 'Soup',
    description:
      'A tangy sour rye soup traditionally served with white sausage, egg, and marjoram.',
    image: '/images/food/zurek.webp',
    imageAlt: 'Bowl of żurek with white sausage and hard-boiled egg',
  },
  {
    name: 'Bigos',
    category: 'Stew',
    description:
      'Slow-cooked hunter’s stew combining sauerkraut, cabbage, sausage, and tender meat.',
    image: '/images/food/bigos.webp',
    imageAlt: 'Traditional bigos with cabbage, sausage, and meat',
  },
  {
    name: 'Kotlet schabowy',
    category: 'Main course',
    description:
      'A crisp breaded pork cutlet served with potatoes and creamy cucumber salad.',
    image: '/images/food/kotlet-schabowy.webp',
    imageAlt: 'Kotlet schabowy with boiled potatoes and mizeria',
  },
  {
    name: 'Oscypek',
    category: 'Highland cheese',
    description:
      'Smoked sheep’s cheese from the Tatra highlands, often grilled with cranberry preserve.',
    image: '/images/food/oscypek.webp',
    imageAlt: 'Grilled oscypek cheese served with cranberry preserve',
  },
  {
    name: 'Pączki',
    category: 'Pastry',
    description:
      'Soft Polish doughnuts filled with rose jam and finished with glaze and orange peel.',
    image: '/images/food/paczki.webp',
    imageAlt: 'Glazed pączki with rose jam filling and candied orange peel',
  },
]

export function FoodPage() {
  return (
    <CollectionPageTemplate
      description="Taste the comforting dishes, regional traditions, and sweet treats that define Polish cuisine."
      eyebrow="What to eat"
      title="Polish food"
    >
      <FoodGrid foods={foods} />
    </CollectionPageTemplate>
  )
}
