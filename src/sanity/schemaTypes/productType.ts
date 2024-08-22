import { defineField, defineType } from 'sanity';

export default defineType({
   name: 'product',
   title: 'Product',
   type: 'document',
   fields: [
      defineField({
         name: 'name',
         title: 'Name',
         type: 'string',
      }),
      defineField({
         name: 'slug',
         title: 'Slug',
         type: 'slug',
         options: {
            source: 'name',
            maxLength: 96,
         },
      }),
      defineField({
         name: 'price',
         title: 'Price',
         type: 'number',
      }),
      defineField({
         name: 'description',
         title: 'Description',
         type: 'text',
      }),
      defineField({
         name: 'image',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
      }),
      // defineField({
      //    name: 'category',
      //    title: 'Category',
      //    type: 'reference',
      //    to: [{ type: 'category' }],
      // }),
      defineField({
         name: 'stock',
         title: 'Stock',
         type: 'number',
      }),
   ],
});
