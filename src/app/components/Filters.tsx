"use client"

import Image from "next/image"
import filter from "../../../public/filter.png"
import filterRed from "../../../public/filterRed.png"
import { useState, useEffect } from "react"

export default function Filters(products: any) {

   const [openFilter, setOpenFilter] = useState(false)
   const [category, setCategory] = useState<string[]>([])
   const [subCategory, setSubCategory] = useState<string[]>([])
   const [region, setRegion] = useState<string[]>([])
   const [varietal, setVarietal] = useState<string[]>([])
   const [orderBy, setOrderBy] = useState<string>('')
   const [selectedCategory, setSelectedCategory] = useState<string>('')
   const [selectedSubCategory, setSelectedSubCategory] = useState<string>('')
   const [selectedRegion, setSelectedRegion] = useState<string>('')
   const [selectedVarietal, setSelectedVarietal] = useState<string>('')

   useEffect(() => {
      const setFilters = () => {
         const categoryFilters: string[] = ['Categoría']
         const subCategoryFilters: string[] = ['Sub-categoría']
         const regionFilters: string[] = ['Región']
         const varietalFilters: string[] = ['Varietal']

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

            setCategory(categoryFilters)
            setSubCategory(subCategoryFilters)
            setRegion(regionFilters)
            setVarietal(varietalFilters)
         }
      }
      setFilters()
   }, [])

   const orders = ['A-Z', 'Z-A', 'Menor Precio', 'Mayor Precio']

   const filters = [
      { name: 'Orden', options: orders, onChange: (value: string) => setOrderBy(value) },
      { name: 'Categoría', options: category, onChange: (value: string) => setSelectedCategory(value) },
      { name: 'Sub-Categoría', options: subCategory, onChange: (value: string) => setSelectedSubCategory(value) },
      { name: 'Region', options: region, onChange: (value: string) => setSelectedRegion(value) },
      { name: 'Varietal', options: varietal, onChange: (value: string) => setSelectedVarietal(value) },
   ]

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
                  >
                     {filter.options.map((category, index2) => (
                        <option value={category} key={index2}>
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
                     <select className="w-[170px] h-10 rounded-r-[10px] px-4 py-2 text-base border border-black1 text-center" key={index} onChange={(e) => filter.onChange(e.target.value)}>
                        {filter.options.map((category, index2) => (
                           <option value={category} key={index2}>
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