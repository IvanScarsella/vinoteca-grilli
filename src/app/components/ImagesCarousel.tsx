"use client"

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
// import image1 from '../../../public/carousel1.png'
// import image2 from '../../../public/carousel2.png'
// import image3 from '../../../public/carousel3.png'
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

export default function ImagesCarousel() {
   const settings = {
      infiniteLoop: true,
      autoPlay: true,
      showThumbs: false,
      interval: 2000,
      transitionTime: 1000,
      showArrows: false,
      showStatus: false,
      showIndicators: true,
      stopOnHover: false,
   }

   const images = [
      winesImage,
      giftsImage,
      appetizersImage,
      whiteDrinksImage,
      sparklingsImage,
      ginsImage,
      whiskiesImage,
      liqueursImage,
      accesoriesImage,
      drinksWithoutAlcoholImage,
      botanicalsImage,
   ]


   return (
      <Carousel {...settings} className='flex flex-col items-center justify-center w-full h-full'>
         {images.map((image, index) => (
            <div key={index} className='flex justify-center items-center w-full'>
               <Image src={image.src} alt='image' className='w-full max-w-[1280px] h-auto max-h-[475px]' width={1440}
                  height={475} />
            </div>
         ))}
      </Carousel>
   )
}
