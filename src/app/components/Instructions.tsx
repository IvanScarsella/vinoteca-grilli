"use client"

import Image from "next/image"
import { useGlobalContext } from "../../../context/store"
import close from "../../../public/close.svg"
import bagRed from "../../../public/bagRed.png"
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
            <div className="text-center font-medium mt-10 max-md:mt-12 text-4xl max-md:text-2xl max-sm:text-lg"> Instrucciones de uso</div>
            <Image src={close} alt='close' className='size-[54px] max-md:size-10 cursor-pointer border border-white rounded-full absolute top-8 max-md:top-2 right-6 max-md:right-2 hover:scale-[1.2] transition-all ease-in-out' onClick={() => setShowInstructionsModal(false)} />
            <div className="mt-[30px] md:mt-12 flex flex-col">
               {/* {instructionsItems.map((item) => (
                  <div className="gap-10 inline-flex px-[18px]" key={item}>
                     <p className="text-[27px] max-md:text-xl font-medium">{item}</p>
                  </div>
               ))} */}
               <div className="gap-10 inline-flex px-[18px]" >
                  <p className="text-[27px] max-md:text-xl max-sm:text-base font-medium">1 - Entrá a la tienda</p>
               </div>
               <div className="gap-10 inline-flex px-[18px]">
                  <p className="text-[27px] max-md:text-xl max-sm:text-base font-medium">2 - Selecciona el/los productos que quieras llevar</p>
               </div>
               <div className="gap-10 inline-flex px-[18px]">
                  <p className="text-[27px] max-md:text-xl max-sm:text-base font-medium flex gap-2 items-center max-[450px]:max-w-[200px]">3 - Ingresá al carrito  y contactanos <span><Image src={bagRed} alt='bag' className="size-12 max-md:size-10 max-sm:min-w-10" /></span></p>
               </div>
            </div>
         </div>
      </div>
   )
}