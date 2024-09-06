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
               { title: '50% Medrano - 50% Luján de Cuyo', value: '50% Medrano - 50% Luján de Cuyo' },
               { title: '75% Medrano - 25% Tupungato, Mendoza', value: '75% Medrano - 25% Tupungato, Mendoza' },
               { title: 'Agrelo, Mendoza', value: 'Agrelo, Mendoza' },
               { title: 'Beazley, San Luis', value: 'Beazley, San Luis' },
               { title: 'Godoy Cruz, Mendoza', value: 'Godoy Cruz, Mendoza' },
               { title: 'Junín, Mendoza', value: 'Junín, Mendoza' },
               { title: 'Los Chacayes, Tunuyán, Mendonza', value: 'Los Chacayes, Tunuyán, Mendonza' },
               { title: 'Luján de Cuyo, Mendoza', value: 'Luján de Cuyo, Mendoza' },
               { title: 'Luján de Cuyo - San Carlos, Mendoza', value: 'Luján de Cuyo - San Carlos, Mendoza' },
               { title: 'Luján de Cuyo - Valle de Uco - Medrano, Mendoza', value: 'Luján de Cuyo - Valle de Uco - Medrano, Mendoza' },
               { title: 'Maipú, Mendoza', value: 'Maipú, Mendoza' },
               { title: 'Mendoza', value: 'Mendoza' },
               { title: 'Monterrico, Jujuy', value: 'Monterrico, Jujuy' },
               { title: 'San Carlos, Mendoza', value: 'San Carlos, Mendoza' },
               { title: 'San Martín, Mendoza', value: 'San Martín, Mendoza' },
               { title: 'San Martín - Santa Rosa,  Medoza', value: 'San Martín - Santa Rosa,  Medoza' },
               { title: 'Tunuyán, Mendoza', value: 'Tunuyán, Mendoza' },
               { title: 'Tupungato, Mendoza', value: 'Tupungato, Mendoza' },
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
               { title: '40% Malbec  - 20% Petit Verdot  - 20% Bonarda - 10% Cabernet Franc - 10% Merlot ', value: '40% Malbec  - 20% Petit Verdot  - 20% Bonarda - 10% Cabernet Franc - 10% Merlot ' },
               { title: '30% Malbec- 10% Merlot - 40% Cabernet Sauvignon - 20% Cabernet Franc.', value: '30% Malbec- 10% Merlot - 40% Cabernet Sauvignon - 20% Cabernet Franc.' },
               { title: '45% Chardonnay - 30% Sauv. Blanc - 25% Viognier', value: '45% Chardonnay - 30% Sauv. Blanc - 25% Viognier' },
               { title: '55% Malbec - 20% Syrah - 15% Bonarda - 5% Cabernet - 5% Petit Verdot', value: '55% Malbec - 20% Syrah - 15% Bonarda - 5% Cabernet - 5% Petit Verdot' },
               { title: '60% Malbec - 20% Syrah - 20% Cabernet Franc', value: '60% Malbec - 20% Syrah - 20% Cabernet Franc' },
               { title: '85%  Ancellotta - 15% Malbec', value: '85%  Ancellotta - 15% Malbec' },
               { title: '90% Malbec - 10% Sauvignon blanc', value: '90% Malbec - 10% Sauvignon blanc' },
               { title: '90% Merlot - 10% Bouchet', value: '90% Merlot - 10% Bouchet' },
               { title: '96% Malbec - 2% Petit Verdot - 2% Cabernet Franc', value: '96% Malbec - 2% Petit Verdot - 2% Cabernet Franc' },
               { title: 'Blanc de Malbecs - 100% Malbec', value: 'Blanc de Malbecs - 100% Malbec' },
               { title: 'Blanco Dulce', value: 'Blanco Dulce' },
               { title: 'Bonarda', value: 'Bonarda' },
               { title: 'Cabernet Franc', value: 'Cabernet Franc' },
               { title: 'Cabernet Sauvignon', value: 'Cabernet Sauvignon' },
               { title: 'Chardonnay', value: 'Chardonnay' },
               { title: 'Dulce Natural', value: 'Dulce Natural' },
               { title: 'Malbec', value: 'Malbec' },
               { title: 'Malbec Rosé', value: 'Malbec Rosé' },
               { title: 'Merlot', value: 'Merlot' },
               { title: 'Passito', value: 'Passito' },
               { title: 'Pedro Giménez', value: 'Pedro Giménez' },
               { title: 'Petit Verdot', value: 'Petit Verdot' },
               { title: 'Pinot Grigio', value: 'Pinot Grigio' },
               { title: 'Pinot Gris', value: 'Pinot Gris' },
               { title: 'Pinot Noir', value: 'Pinot Noir' },
               { title: 'Rosado', value: 'Rosado' },
               { title: 'Sauvignon Blanc', value: 'Sauvignon Blanc' },
               { title: 'Semillón', value: 'Semillón' },
               { title: 'Syrah', value: 'Syrah' },
               { title: 'Tempranillo', value: 'Tempranillo' },
               { title: 'Trebbiano', value: 'Trebbiano' },
               { title: 'Torrontés', value: 'Torrontés' },
               { title: 'Torrontés Dulce', value: 'Torrontés Dulce' },
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
