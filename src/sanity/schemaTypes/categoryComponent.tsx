import {defineField, defineType} from 'sanity'

export const CategoryComponent = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'CategoryName',
      type: 'string',
    }),
  ],
})