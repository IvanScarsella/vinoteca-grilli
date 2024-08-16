"use client"

import Image from "next/image";
import wineImage from "../../../public/winesImage.png"
import beersImage from "../../../public/beersImage.png"
import filter from "../../../public/filter.png"
import filterRed from "../../../public/filterRed.png"
import { useGlobalContext } from "../../../context/store";
import Card from "../components/Card";
import { useState } from "react";

export default function Shop() {

   const [openFilter, setOpenFilter] = useState(false)

   const filters = [
      { name: 'Ordenar por' },
      { name: 'Marca' },
      { name: 'Varietal' },
      { name: 'Tipo de vino' },
   ]

   let {
      products, selectedButton
   } = useGlobalContext()

   return (
      <section className={`bg-black1 flex flex-col items-center ${selectedButton === 'Envíos' ? 'blur-[2px]' : ''}`}>
         <div className=" max-w-[1440px] h-[475px] ">
            <Image
               src={wineImage}
               alt="shop-image"
               className="w-full h-full object-cover"
               width={1440}
               height={475}
            />
         </div>
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
            <Image src={filterRed} alt='filter-icon-red' className="size-10 min-[450px]:size-12 sm:size-14 md:size-16 hover:scale-[1.2] transition-all ease-in-out cursor-pointer" onClick={() =>
               setOpenFilter((value) => !value)} />
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
         <div className="bg-white1 pt-20 max-xl:pt-4 flex flex-row gap-4 max-md:gap-2 justify-center w-full max-[720px]:w-screen max-[720px]:-mx-4  max-w-full min-[1660px]:px-36 max-xl:px-20 max-[850px]:px-1 self-center flex-wrap pb-[78px] ">
            {products.map((product, index) => (
               <Card data={product} className="" key={index} />
            ))}
         </div>
      </section>
   )
}