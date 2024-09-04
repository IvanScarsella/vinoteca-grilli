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
               { title: 'Accesorios', value: 'Accesorio' },
               { title: 'Aperitivos', value: 'Aperitivo' },
               { title: 'Bebidas sin Alcohol', value: 'Bebidas sin Alcohol' },
               { title: 'Cerveza', value: 'Cerveza' },
               { title: 'Gin', value: 'Gin' },
               { title: 'Licor', value: 'Licor' },
               { title: 'Whiskey', value: 'Whiskey' },
               { title: 'Bebida Blanca', value: 'Bebida Blanca' },
               { title: 'Vino', value: 'Vino' },
            ],
         },
      }),
      defineField({
         name: 'subCategory',
         title: 'Sub-category',
         type: 'string',
         options: {
            list: [
               { title: 'Negroni', value: 'Negroni' },
               { title: 'Vino Rosado', value: 'Vino Rosado' },
               { title: 'Vino Tinto', value: 'Vino Tinto' },
               { title: 'Savage', value: 'Savage' },
               { title: 'Espumante', value: 'Espumante' },
               { title: 'Vermouth', value: 'Vermouth' },
               { title: 'Vodka', value: 'Vodka' },
               { title: 'Vino Blanco', value: 'Vino Blanco' },
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
               { title: 'Beazley, San Luis', value: 'Beazley, San Luis' },
               { title: 'Godoy Cruz, Mendoza', value: 'Godoy Cruz, Mendoza' },
               { title: 'Luján de Cuyo, Mendoza', value: 'Luján de Cuyo, Mendoza' },
               { title: 'Maipú, Mendoza', value: 'Maipú, Mendoza' },
               { title: 'Mendoza', value: 'Mendoza' },
               { title: 'Monterrico, Jujuy', value: 'Monterrico, Jujuy' },
               { title: 'San Martín, Mendoza', value: 'San Martín, Mendoza' },
               { title: 'Valle de Uco, Mendoza', value: 'Valle de Uco, Mendoza' },
               { title: 'Vista Flores, Mendoza', value: 'Vista Flores, Mendoza' },
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
               { title: '100% Rosé', value: '100% Rosé' },
               { title: '90% Malbec - 10% Sauvignon blanc', value: '90% Malbec - 10% Sauvignon blanc' },
               { title: 'Cabernet Sauvignon', value: 'Cabernet Sauvignon' },
               { title: 'Chardonnay', value: 'Chardonnay' },
               { title: 'Malbec', value: 'Malbec' },
               { title: 'Malbec Rosé', value: 'Malbec Rosé' },
               { title: 'Merlot', value: 'Merlot' },
               { title: 'Pedro Giménez', value: 'Pedro Giménez' },
               { title: 'Pinot Gris', value: 'Pinot Gris' },
               { title: 'Pinot Noir', value: 'Pinot Noir' },
               { title: 'Rosado', value: 'Rosado' },
               { title: 'Sauvignon Blanc', value: 'Sauvignon Blanc' },
               { title: 'Syrah', value: 'Syrah' },
               { title: 'Tempranillo', value: 'Tempranillo' },
               { title: 'Torrontés', value: 'Torrontés' },
               { title: 'Viognier', value: 'Viognier' },
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
               { title: 'Crianza', value: 'Crianza' },
               { title: 'Joven', value: 'Joven' },
               { title: 'Reserva', value: 'Reserva' },
               { title: 'Gran Reserva', value: 'Gran Reserva' },
            ],
         },
      }),
      defineField({
         name: 'type',
         title: 'Type (Liqueur and Whiskey only)',
         type: 'string',
         options: {
            list: [
               { title: 'Escocés', value: 'Escocés' },
               { title: 'Irlandés', value: 'Irlandés' },
               { title: 'Naranja - Chocolate con menta - Chocolate Negro - Chocolate Blanco - Café - Dulce de Leche', value: 'Naranja - Chocolate con menta - Chocolate Negro - Chocolate Blanco - Café - Dulce de Leche' }
            ]
         }
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
