"use client"

import Image from "next/image"
import { useGlobalContext } from "../../../context/store"
import close from "../../../public/close.svg"
import logo2 from "../../../public/logo2.png"

export default function Delivery() {

   let {
      showDeliveryModal,
      setShowDeliveryModal,
      selectedButton,
      setSelectedButton
   } = useGlobalContext()

   const deliveryItems = [
      { distance: '1 Km', price: '$1000' },
      { distance: '2 Km', price: '$2000' },
      { distance: '3 Km', price: '$3000' },
   ]

   return (
      <div className={`w-[716px] max-md:w-3/4 h-[639px] max-md:h-96  bg-yellow1 rounded-[10px] flex-col justify-start items-start inline-flex fixed m-auto top-0 left-0 right-0 bottom-0 z-10 ${selectedButton !== 'Envíos' ? 'hidden' : ''}`}>
         <div className="w-[676px] max-md:w-full relative">
            <div className="text-center mt-6 text-[64px] max-md:text-4xl font-normal">Tarifas</div>
            <Image src={close} alt='close' className='size-[54px] max-md:size-10 cursor-pointer border border-white rounded-full absolute top-5 right-6 hover:scale-[1.2]' onClick={() => setSelectedButton('')} />
            <div className="mt-[30px] flex flex-col">
               {deliveryItems.map((item) => (
                  <div className="px-4 items-center justify-center gap-10 inline-flex">
                     <div className="text-center text-[40px] max-md:text-3xl font-medium">{item.distance}</div>
                     <div className="text-center text-[40px] max-md:text-3xl font-medium">{item.price}</div>
                  </div>
               ))}
            </div>
         </div>
         <Image src={logo2} alt='logo' className="h-[235px] w-[500px] max-md:w-60 max-md:h-[120px] mx-auto mb-[29px] max-md:mt-6" />
      </div>
   )
}