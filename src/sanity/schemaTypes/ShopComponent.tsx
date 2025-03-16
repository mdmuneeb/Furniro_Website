import {defineField, defineType} from 'sanity'


export const ShoppingComponent = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        type: 'string',
        title: 'Name',
      }),
      defineField({
        name: 'price',
        type: 'number',
        title: 'Price',
      }),
      defineField({
        name: 'description',
        type: 'text',
        title: 'Description',
      }),
      defineField({
        name: 'image',
        type: 'image',
        title: 'Image',
      }),
      defineField({
        name: 'category',
        type: 'string',
        title: 'Category',
      }),
    ],
  })
  