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
         initialValue: 0
      }),
      defineField({
         name: 'image',
         title: 'Image',
         type: 'image',
         options: {
            hotspot: true,
         },
      }),
      defineField({
         name: 'category',
         title: 'Category',
         type: 'string',
         options: {
            list: [
               { title: 'Accesories', value: 'accesories' },
               { title: 'Beer', value: 'beer' },
               { title: 'Non-Alcoholic', value: 'non-alcoholic' },
               { title: 'Spirits', value: 'spirits' },
               { title: 'Wine', value: 'wine' },
            ],
         },
      }),
      defineField({
         name: 'subCategory',
         title: 'Sub-category',
         type: 'string',
         options: {
            list: [
               { title: 'Craft Beer', value: 'craft-beer' },
               { title: 'Lager', value: 'lager' },
               { title: 'Pink Wine', value: 'pink-wine' },
               { title: 'Red Wine', value: 'red-wine' },
               { title: 'Soft Drinks', value: 'soft-drinks' },
               { title: 'Sparkling Wine', value: 'sparkling-wine' },
               { title: 'Vodka', value: 'vodka' },
               { title: 'Whiskey', value: 'whiskey' },
               { title: 'White Wine', value: 'white-wine' },
            ],
         },
      }),
      defineField({
         name: 'milliliters',
         title: 'ML',
         type: 'number',
         initialValue: 750,
      }),
      defineField({
         name: 'year',
         title: 'Year',
         type: 'number',
         initialValue: 2023,
      }),
      defineField({
         name: 'cellar',
         title: 'Cellar',
         type: 'string',
      }),
      defineField({
         name: 'region',
         title: 'Region',
         type: 'string',
         options: {
            list: [
               { title: 'Beazley, San Luis', value: 'beazley-san-luis' },
               { title: 'Godoy Cruz, Mendoza', value: 'godoy-cruz-mendoza' },
               { title: 'Luján de Cuyo, Mendoza', value: 'lujan-de-cuyo-mendoza' },
               { title: 'Maipú, Mendoza', value: 'maipu-mendoza' },
               { title: 'Mendoza', value: 'mendoza' },
               { title: 'Monterrico, Jujuy', value: 'monterrico-jujuy' },
               { title: 'San Martín, Mendoza', value: 'san-martin-mendoza' },
               { title: 'Valle de Uco, Mendoza', value: 'valle-de-uco-mendoza' },
               { title: 'Vista Flores, Mendoza', value: 'vista-flores-mendoza' },
            ]
         }
      }),
      defineField({
         name: 'varietal',
         title: 'Varietal',
         type: 'array',
         of: [{ type: 'string' }],
         options: {
            list: [
               { title: 'Cabernet Sauvignon', value: 'cabernet-sauvignon' },
               { title: 'Chardonnay', value: 'chardonnay' },
               { title: 'Malbec', value: 'malbec' },
               { title: 'Malbec Rosé', value: 'malbec-rose' },
               { title: 'Merlot', value: 'merlot' },
               { title: 'Pinot Noir', value: 'pinot-noir' },
               { title: 'Sauvignon Blanc', value: 'sauvignon-blanc' },
               { title: 'Syrah', value: 'syrah' },
               { title: 'Tempranillo', value: 'tempranillo' },
            ],
            // layout: 'tags',
         },
      }),
      defineField({
         name: 'fermentationTime',
         title: 'Fermentation Time',
         type: 'string',
         options: {
            list: [
               { title: 'Crianza', value: 'crianza' },
               { title: 'Joven', value: 'joven' },
               { title: 'Reserva', value: 'reserva' },
               { title: 'Gran Reserva', value: 'gran-reserva' },
            ],
         },
      }),
      defineField({
         name: 'organic',
         title: 'Organic',
         type: 'boolean',
         initialValue: false
      }),
      defineField({
         name: 'oak',
         title: 'Oak',
         type: 'boolean',
         initialValue: false
      }),
   ],
});
