"use client";

import { useState } from "react";
import Card from "./Card";
import ShowMoreButton from "./ShowMoreButton";
import Image from "next/image";
import arrow from '../../../public/arrow.png'
import wineIcon from "../../../public/wineIcon.png"

type SectionWithPaginationProps = {
   sectionName: string;
   products: any[];
   sectionImage?: any;
   category: string;
};

export default function ProductsSection({
   sectionName,
   products,
   category,
}: SectionWithPaginationProps) {
   const [currentPage, setCurrentPage] = useState(0);
   const productsPerPage = 4;

   const totalPages = Math.ceil(products.length / productsPerPage);

   const handleNextPage = () => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
   };

   const handlePrevPage = () => {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
   };

   const startIndex = currentPage * productsPerPage;
   const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

   return (
      <div className="flex flex-col mb-3">
         <div className="flex flex-row items-center my-[26px] px-[50px] max-md:px-4">
            <Image src={wineIcon} alt={sectionName} className="size-[30px] mr-4 max-md:hidden" />
            <p className="text-4xl max-md:text-xl font-normal tracking-tight mr-[33px]">{sectionName}</p>
            <div className="w-full h-px bg-black1" />
            <ShowMoreButton category={category} />
         </div>

         <div className="flex flex-row gap-4 max-[832px]:gap-2 justify-center w-full max-w-full overflow-x-auto scroll-smooth overflow-clip px-4 self-center max-[720px]:w-screen max-[690px]:justify-start max-[720px]:-mx-4 max-[720px]:px-0">
            <button
               onClick={handlePrevPage}
               disabled={currentPage === 0}
               className=" disabled:opacity-50 max-md:hidden max-lg:-mx-1"
            >
               <Image src={arrow} alt="arrow" className="size-10 max-lg:size-8 -rotate-90" />
            </button>
            {paginatedProducts.map((product, index) => (
               <Card data={product} key={index} />
            ))}
            <button
               onClick={handleNextPage}
               disabled={currentPage === totalPages - 1}
               className=" disabled:opacity-50 max-md:hidden max-lg:-mx-1"
            >
               <Image src={arrow} alt="arrow" className="size-10 max-lg:size-8 rotate-90" />
            </button>
         </div>
      </div>
   );
}
