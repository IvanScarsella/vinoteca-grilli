"use client"

import { useGlobalContext } from "../../../context/store"


export default function BuyButton() {

   const { setShowInstructionsModal } = useGlobalContext()

   return (
      <button className="bg-[#842E3D] rounded-lg text-2xl max-sm:text-[15px] sm:text-base text-white1 py-[7px] px-[px] max-sm:px-2.5 max-lg:w-full w-1/2 hover:scale-[1.1]" onClick={() => setShowInstructionsModal(true)}>Encargar</button>)
}