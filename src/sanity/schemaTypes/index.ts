import { type SchemaTypeDefinition } from 'sanity'
import { ShoppingComponent } from './ShopComponent'
import { CategoryComponent } from './categoryComponent'
import orderPlacedComponent from './orderPlacedComponent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ShoppingComponent, CategoryComponent, orderPlacedComponent],
}
