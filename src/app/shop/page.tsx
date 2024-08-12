"use client"

import Image from "next/image";
import wineImage from "../../../public/winesImage.png"
import beersImage from "../../../public/beersImage.png"
import filter from "../../../public/filter.png"
import { useGlobalContext } from "../../../context/store";
import Card from "../components/Card";

export default function Shop() {

   const filters = [
      { name: 'Ordenar por' },
      { name: 'Marca' },
      { name: 'Varietal' },
      { name: 'Tipo de vino' },
   ]

   let {
      products
   } = useGlobalContext()

   return (
      <section className="bg-black1 flex flex-col items-center">
         <div className=" max-w-[1440px] h-[475px] ">
            <Image
               src={wineImage}
               alt="shop-image"
               className="w-full h-full object-cover"
               width={1440}
               height={475}
            />
         </div>
         <div className="bg-gradient-to-r from-yellow1 to-[#886146] w-full h-[60px] py-1.5 flex items-center px-[49px]">
            <Image src={filter} alt="filter-icon" className="size-[54px]" />
            <p className="text-2xl text-white1 ml-3">Filtrar por</p>
            <div className="flex gap-10 relative mx-auto ">
               {filters.map((filter) => (
                  <select className="w-[170px] h-10 rounded-[10px] px-2.5 py-2 ">
                     <option value="">
                        {filter.name}
                     </option>
                  </select>
               ))}
            </div>
         </div>
         <div className="bg-white1 pt-20 flex flex-row gap-4 max-md:gap-2 justify-center w-full max-[720px]:w-screen max-[720px]:-mx-4  max-w-full min-[1660px]:px-36 max-xl:px-20 max-[850px]:px-4 self-center flex-wrap pb-[78px] ">
            {products.map((product) => (
               <Card data={product} className="" />
            ))}
         </div>
      </section>
   )
}