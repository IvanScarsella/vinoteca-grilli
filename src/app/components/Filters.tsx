"use client"

import Image from "next/image"
import filter from "../../../public/filter.png"
import filterRed from "../../../public/filterRed.png"
import { useState, useEffect } from "react"
import { useGlobalContext } from "../../../context/store"

export default function Filters(products: any) {

   const [openFilter, setOpenFilter] = useState(false)
   const [category, setCategory] = useState<string[]>([])
   const [subCategory, setSubCategory] = useState<string[]>([])
   const [region, setRegion] = useState<string[]>([])
   const [varietal, setVarietal] = useState<string[]>([])

   const {
      selectedCategory,
      setSelectedCategory,
      selectedSubCategory,
      setSelectedSubCategory,
      selectedRegion,
      setSelectedRegion,
      selectedVarietal,
      setSelectedVarietal,
      orderBy,
      setOrderBy,
   } = useGlobalContext();

   useEffect(() => {
      const setFilters = () => {
         const categoryFilters: string[] = []
         const subCategoryFilters: string[] = []
         const regionFilters: string[] = []
         const varietalFilters: string[] = []

         for (let i = 0; i < products.products.length; i++) {
            if (!categoryFilters.includes(products.products[i].category)) {
               categoryFilters.push(products.products[i].category)
            }

            if (!subCategoryFilters.includes(products.products[i].subCategory) && products.products[i].subCategory !== undefined) {
               subCategoryFilters.push(products.products[i].subCategory)

            }

            if (products.products[i].region !== undefined && !regionFilters.includes(products.products[i].region.split(' ')[products.products[i].region.split(' ').length - 1])) {
               if (products.products[i].region.split(' ')[products.products[i].region.split(' ').length - 1] === 'Luis' && !regionFilters.includes('San Luis')) { regionFilters.push('San Luis') }
               else {
                  regionFilters.push(products.products[i].region.split(' ')[products.products[i].region.split(' ').length - 1])
               }
            }

            if (products.products[i].varietal !== undefined && !products.products[i].varietal[0].includes('%') && !varietalFilters.includes(products.products[i].varietal[0])) {
               varietalFilters.push(products.products[i].varietal[0])
            }

            // setCategory(categoryFilters)
            setCategory(['Categoría', ...categoryFilters.sort()])
            setSubCategory(['Sub-categoría', ...subCategoryFilters.sort()])
            setRegion((['Región', ...regionFilters.sort()]))
            setVarietal((['Varietal', ...varietalFilters.sort()]))
         }
      }
      setFilters()
   }, [])

   const orders = ['A-Z', 'Z-A', 'Menor Precio', 'Mayor Precio']

   const filters = [
      { name: "Orden", options: ['A-Z', 'Z-A', 'Menor Precio', 'Mayor Precio'], onChange: setOrderBy },
      { name: "Categoría", options: category, onChange: setSelectedCategory },
      { name: "Sub-Categoría", options: subCategory, onChange: setSelectedSubCategory },
      { name: "Región", options: region, onChange: setSelectedRegion },
      { name: "Varietal", options: varietal, onChange: setSelectedVarietal },
   ];

   return (
      <>
         <div className="bg-gradient-to-r from-yellow1 to-[#886146] w-full h-[60px] py-1.5 flex items-center px-[49px] max-[1330px]:px-2 max-[1100px]:hidden">
            <Image src={filter} alt="filter-icon" className="size-[54px]" />
            <p className="text-2xl text-white1 ml-3">Filtrar</p>
            <div className="flex gap-10 max-xl:gap-6 relative mx-auto ">
               {filters.map((filter, index) => (
                  <select
                     className="w-[170px] max-xl:w-40 h-10 rounded-[10px] px-2.5 py-2"
                     key={index}
                     onChange={(e) => filter.onChange(e.target.value)}
                     hidden={
                        filter.name === 'Región' && selectedCategory !== 'Vino' ||
                        filter.name === 'Varietal' && selectedCategory !== 'Vino' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Accesorio' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Bebidas sin Alcohol' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Botánicos' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Gin' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Licor' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Regalería' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Whisky' ||
                        filter.name === 'Sub-Categoría' &&
                        !selectedCategory
                     }
                  >
                     {filter.options.map((category, index2) => (
                        <option value={category === 'Categoría' || category === 'Sub-categoría' || category === 'Región' || category === 'Varietal' ? '' : category} key={index2}
                           hidden={
                              category === 'Blanc de Blancs' && selectedCategory !== 'Espumante' ||
                              category === 'Dulce' && selectedCategory !== 'Espumante' ||
                              category === 'Blanc de Blancs' && selectedCategory !== 'Espumante' ||
                              category === 'Dulce Natural' && selectedCategory !== 'Espumante' ||
                              category === 'Extra Brut' && selectedCategory !== 'Espumante' ||
                              category === 'Rosé' && selectedCategory !== 'Espumante' ||
                              category === 'Vino Blanco' && selectedCategory !== 'Vino' ||
                              category === 'Vino Rosado' && selectedCategory !== 'Vino' ||
                              category === 'Vino Tinto' && selectedCategory !== 'Vino' ||
                              category === 'Negroni' && selectedCategory !== 'Aperitivo' ||
                              category === 'Vermouth' && selectedCategory !== 'Aperitivo' ||
                              category === 'Savage' && selectedCategory !== 'Bebida Blanca' ||
                              category === 'Ron' && selectedCategory !== 'Bebida Blanca' ||
                              category === 'Tequila' && selectedCategory !== 'Bebida Blanca' ||
                              category === 'Vodka' && selectedCategory !== 'Bebida Blanca' ||
                              category === 'Cuyo' ||
                              category === 'Luis'
                           }>
                           {category}
                        </option>
                     ))}
                  </select>
               ))}
            </div>
         </div>
         <div className="min-[1100px]:hidden bg-white1 pl-3 sm:pl-4 pt-1 sm:pt-2 w-full">
            <Image src={filterRed} alt='filter-icon-red' className="size-10 min-[450px]:size-12 sm:size-14 md:size-16 hover:scale-[1.2] transition-all ease-in-out cursor-pointer"
               onClick={() => setOpenFilter((value) => !value)}
            />
            <div className={` flex flex-col mt-2`}>
               <div className={`${!openFilter ? 'hidden' : null} flex flex-col mt-2`}>
                  {filters.map((filter, index) => (
                     <select className="w-[170px] h-10 rounded-r-[10px] px-4 py-2 text-base border border-black1 text-center" key={index} onChange={(e) => filter.onChange(e.target.value)} hidden={
                        filter.name === 'Región' && selectedCategory !== 'Vino' ||
                        filter.name === 'Varietal' && selectedCategory !== 'Vino' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Accesorio' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Bebidas sin Alcohol' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Botánicos' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Gin' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Licor' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Regalería' ||
                        filter.name === 'Sub-Categoría' && selectedCategory === 'Whisky' ||
                        filter.name === 'Sub-Categoría' &&
                        !selectedCategory
                     }>
                        {filter.options.map((category, index2) => (
                           <option value={category} key={index2}
                              hidden={
                                 category === 'Blanc de Blancs' && selectedCategory !== 'Espumante' ||
                                 category === 'Dulce' && selectedCategory !== 'Espumante' ||
                                 category === 'Blanc de Blancs' && selectedCategory !== 'Espumante' ||
                                 category === 'Dulce Natural' && selectedCategory !== 'Espumante' ||
                                 category === 'Extra Brut' && selectedCategory !== 'Espumante' ||
                                 category === 'Rosé' && selectedCategory !== 'Espumante' ||
                                 category === 'Vino Blanco' && selectedCategory !== 'Vino' ||
                                 category === 'Vino Rosado' && selectedCategory !== 'Vino' ||
                                 category === 'Vino Tinto' && selectedCategory !== 'Vino' ||
                                 category === 'Negroni' && selectedCategory !== 'Aperitivo' ||
                                 category === 'Vermouth' && selectedCategory !== 'Aperitivo' ||
                                 category === 'Savage' && selectedCategory !== 'Bebida Blanca' ||
                                 category === 'Ron' && selectedCategory !== 'Bebida Blanca' ||
                                 category === 'Tequila' && selectedCategory !== 'Bebida Blanca' ||
                                 category === 'Vodka' && selectedCategory !== 'Bebida Blanca' ||
                                 category === 'Cuyo' ||
                                 category === 'Luis'
                              }>
                              {category}
                           </option>
                        ))}
                     </select>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}