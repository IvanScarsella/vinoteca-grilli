"use client"

import Image from "next/image"
import { useGlobalContext } from "../../../context/store"
import close from "../../../public/close.svg"
import logo2 from "../../../public/logo2.png"

export default function Instructions() {

   let {
      showInstructionsModal,
      setShowInstructionsModal,
   } = useGlobalContext()

   const instructionsItems = [
      '1 - Entrá a la tienda',
      '2 - Selecciona el/los productos que quieras llevar',
      '3 - Ingresá al carrito y contactanos',
   ]

   return (
      <div className={`w-[716px] max-md:w-3/4 h-[639px] max-h-[415px] max-md:h-96  bg-yellow2 rounded-[10px] flex-col justify-start items-start inline-flex fixed m-auto top-0 left-0 right-0 bottom-0 z-10 ${!showInstructionsModal ? 'hidden' : ''}`}>
         <div className="max-md:w-full relative">
            <div className="text-center mt-10 max-md:mt-12 text-4xl max-md:text-2xl font-normal"> Instrucciones de uso</div>
            <Image src={close} alt='close' className='size-[54px] max-md:size-10 cursor-pointer border border-white rounded-full absolute top-8 max-md:top-2 right-6 max-md:right-2 hover:scale-[1.2] transition-all ease-in-out' onClick={() => setShowInstructionsModal(false)} />
            <div className="mt-[30px] flex flex-col">
               {instructionsItems.map((item) => (
                  <div className="gap-10 inline-flex px-[18px]" key={item}>
                     <div className="text-[27px] max-md:text-xl font-medium">{item}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}