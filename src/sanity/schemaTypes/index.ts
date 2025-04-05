import { type SchemaTypeDefinition } from 'sanity'
import { ShoppingComponent } from './ShopComponent'
import { CategoryComponent } from './categoryComponent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ShoppingComponent, CategoryComponent],
}
