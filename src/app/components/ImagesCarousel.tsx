"use client"

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import image1 from '../../../public/carousel1.png'
import image2 from '../../../public/carousel2.png'
import image3 from '../../../public/carousel3.png'

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
      { src: image1, alt: 'image1' },
      { src: image2, alt: 'image2' },
      { src: image3, alt: 'image3' },
   ]

   return (
      <Carousel {...settings} className='flex flex-col items-center justify-center w-full h-full'>
         {images.map((image, index) => (
            <div key={index} className='flex justify-center items-center w-full'>
               <Image src={image.src} alt={image.alt} className='w-full h-auto' />
            </div>
         ))}
      </Carousel>
   )
}
