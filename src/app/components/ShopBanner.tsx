'use client'

import Image from "next/image"
import wineImage from "../../../public/winesImage.png";

export default async function ShopBanner() {
   return (
      <div className="flex flex-col items-center justify-center w-full h-full max-h-[470px]">
         <Image
            src={wineImage}
            alt="shop-image"
            className="w-full h-full object-cover"
            width={1440}
            height={475}
         />
      </div>
   )
}