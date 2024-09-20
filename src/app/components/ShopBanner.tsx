'use client'

import Image from "next/image"
import accesoriesImage from "../../../public/accesoriesImage.jpeg"
import appetizersImage from "../../../public/appetizersImage.jpeg"
import botanicalsImage from "../../../public/botanicalsImage.jpeg"
import drinksWithoutAlcoholImage from "../../../public/drinksWithoutAlcoholImage.jpeg"
import giftsImage from "../../../public/giftsImage.jpeg"
import ginsImage from "../../../public/ginsImage.jpeg"
import liqueursImage from "../../../public/liqueursImage.jpeg"
import sparklingsImage from "../../../public/sparklingsImage.jpeg"
import whiskiesImage from "../../../public/whiskiesImage.jpeg"
import whiteDrinksImage from "../../../public/whiteDrinksImage.jpeg"
import winesImage from "../../../public/winesImage.png";
import { useGlobalContext } from "../../../context/store"
import grilliImage from "../../../public/grilliImage.jpg"
import { useEffect, useState } from "react"

export default function ShopBanner() {
   const { selectedCategory } = useGlobalContext()

   const images = [accesoriesImage, appetizersImage, botanicalsImage, drinksWithoutAlcoholImage, giftsImage, ginsImage, liqueursImage, sparklingsImage, whiskiesImage, whiteDrinksImage, winesImage]

   const [randomImage, setRandomImage] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setRandomImage(Math.floor(Math.random() * images.length))
      }, 3000)

      return () => clearInterval(interval)
   }, [images.length])

   return (
      <div className="flex flex-col items-center justify-center w-full h-full max-h-[622px] max-w-[1280px]">
         <Image
            src={
               selectedCategory === 'Accesorio' ? accesoriesImage :
                  selectedCategory === 'Aperitivo' ? appetizersImage :
                     selectedCategory === 'Bebida Blanca' ? whiteDrinksImage :
                        selectedCategory === 'Bebidas sin Alcohol' ? drinksWithoutAlcoholImage :
                           selectedCategory === 'Botánicos' ? botanicalsImage :
                              selectedCategory === 'Espumante' ? sparklingsImage :
                                 selectedCategory === 'Gin' ? ginsImage :
                                    selectedCategory === 'Licor' ? liqueursImage :
                                       selectedCategory === 'Regalería' ? giftsImage :
                                          selectedCategory === 'Vino' ? winesImage :
                                             selectedCategory === 'Whisky' ? whiskiesImage
                                                : images[randomImage]
            }
            alt="shop-image"
            className="w-full h-full object-cover"
            width={1440}
            height={475}
         />
      </div>
   )
}