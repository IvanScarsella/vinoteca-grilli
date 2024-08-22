"use client"

import Image from "next/image"
import filter from "../../../public/filter.png"
import filterRed from "../../../public/filterRed.png"
import { useState } from "react"

export default function Filters() {

   const [openFilter, setOpenFilter] = useState(false)

   const filters = [
      { name: 'Ordenar por' },
      { name: 'Marca' },
      { name: 'Varietal' },
      { name: 'Tipo de vino' },
   ]

   return (
      <>
         <div className="bg-gradient-to-r from-yellow1 to-[#886146] w-full h-[60px] py-1.5 flex items-center px-[49px] max-[1100px]:hidden">
            <Image src={filter} alt="filter-icon" className="size-[54px]" />
            <p className="text-2xl text-white1 ml-3">Filtrar por</p>
            <div className="flex gap-10 relative mx-auto ">
               {filters.map((filter, index) => (
                  <select className="w-[170px] h-10 rounded-[10px] px-2.5 py-2 " key={index}>
                     <option value="" key={index}>
                        {filter.name}
                     </option>
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
                     <select className="w-[170px] h-10 rounded-r-[10px] px-4 py-2 text-base border border-black1 text-center" key={index}>
                        <option value="" >
                           {filter.name}
                        </option>
                     </select>
                  ))}
               </div>
            </div>
         </div>
      </>
   )
}