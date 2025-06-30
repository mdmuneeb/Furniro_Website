import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'userId',
      title: 'User ID',
      type: 'string',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Product Name' },
            { name: 'quantity', type: 'number', title: 'Quantity' },
            { name: 'price', type: 'number', title: 'Price' },
          ],
        },
      ],
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
    }),
    defineField({
      name: 'deliveryDate',
      title: 'Delivery Date',
      type: 'date',
    }),
  ],
})
