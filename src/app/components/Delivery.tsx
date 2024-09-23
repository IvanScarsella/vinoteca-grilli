"use client"

import Image from "next/image"
import { useGlobalContext } from "../../../context/store"
import close from "../../../public/close.svg"
import delivery from "../../../public/delivery.png"
import logo2 from "../../../public/logo2.png"

export default function Delivery() {

   let {
      selectedButton,
      setSelectedButton
   } = useGlobalContext()

   const deliveryItems = [
      { distance: '1 Km', price: '$1000' },
      { distance: '2 Km', price: '$2000' },
      { distance: '3 Km', price: '$3000' },
   ]

   return (
      <div className={`w-[716px] max-md:w-11/12 max-md:px-1 h-[639px] max-sm:h-1/2 max-md:h-[470px]  bg-yellow1 rounded-[10px] flex-col justify-start items-start inline-flex fixed m-auto top-0 left-0 right-0 bottom-0 z-10 ${selectedButton !== 'Envíos' ? 'hidden' : ''}`}>
         <div className="w-[676px] max-md:w-full relative">
            <div className="text-center mt-6 text-[64px] max-md:text-4xl max-sm:text-2xl font-normal">Tarifas</div>
            <Image src={close} alt='close' className='size-[54px] max-md:size-10 cursor-pointer border border-white rounded-full absolute top-5 max-md:right-6 right-0 max-sm:top-2 max-sm:-mr-4 hover:scale-[1.2] transition-all ease-in-out' onClick={() => setSelectedButton('')} />
         </div>
         <Image src={delivery} alt='delivery' className="w-11/12 max-md:w-[540px] max-[565px]:w-full max-md:h-[378px] max-[565px]:h-auto mx-auto mt-4" />
         {/* <Image src={logo2} alt='logo' className="h-[235px] w-[500px] max-md:w-60 max-md:h-[120px] max-sm:h-20 max-sm:w-40 mx-auto mb-[29px] max-md:mt-6" /> */}
      </div>
   )
}