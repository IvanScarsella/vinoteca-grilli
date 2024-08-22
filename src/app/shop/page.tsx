// "use client"

import Image from "next/image";
import wineImage from "../../../public/winesImage.png"
import beersImage from "../../../public/beersImage.png"
import { useGlobalContext } from "../../../context/store";
import Card from "../components/Card";
import { useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { productsQuery } from "@/sanity/lib/queries";
import Filters from "../components/Filters";

export default async function Shop() {





   // let {
   //    products, selectedButton
   // } = useGlobalContext()
   const products = await sanityFetch<SanityDocument[]>({ query: productsQuery })
   return (
      <section className={`bg-black1 flex flex-col items-center `}>
         {/* <section className={`bg-black1 flex flex-col items-center ${selectedButton === 'Envíos' ? 'blur-[2px]' : ''}`}> */}
         <div className="flex flex-col items-center justify-center w-full h-full max-h-[470px]">
            <Image
               src={wineImage}
               alt="shop-image"
               className="w-full h-full object-cover"
               width={1440}
               height={475}
            />
         </div>
         <Filters />
         <div className="bg-white1 pt-20 max-xl:pt-4 flex flex-row gap-4 max-md:gap-2 justify-center w-full max-[720px]:w-screen max-[720px]:-mx-4  max-w-full min-[1660px]:px-36 max-xl:px-20 max-[850px]:px-1 self-center flex-wrap pb-[78px] ">
            {products.map((product, index) => (
               <Card data={product} className="" key={index} />
            ))}
         </div>
      </section>
   )
}