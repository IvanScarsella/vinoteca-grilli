"use client"

import { useState, useEffect } from "react"
import menu from "../../../public/menu.svg"
import bag from "../../../public/bag.svg"
import Image from "next/image"
import { useGlobalContext } from "../../../context/store"

export default function Navbar() {

   const [selectedButton, setSelectedButton] = useState<string>('Inicio')

   const navbarButtons = [
      { title: 'Inicio' },
      { title: 'Tienda' },
      { title: 'Envíos' },
      { title: 'Contacto' },
   ]

   let {
      showDeliveryModal,
      setShowDeliveryModal,
   } = useGlobalContext()

   // useEffect(() => {
   if (selectedButton === 'Envíos') {
      // setShowDeliveryModal(true)
      showDeliveryModal = true
   }
   // }, [selectedButton])

   console.log(showDeliveryModal)
   console.log(setShowDeliveryModal)

   return (
      <>
         <div className="w-full h-[70px] bg-gradient-to-r from-[#7e7c7c] via-[#969393] to-[#adaaaa] backdrop-blur-sm justify-center items-center gap-8 inline-flex max-sm:hidden">
            <div className="self-stretch justify-center items-center gap-8 flex">
               {navbarButtons.map((button) => (
                  <div className={`${selectedButton === button.title ? 'bg-yellow1 border-x-4 border-[#f2f2f2]' : ''} p-2.5 justify-center items-center gap-2.5 flex cursor-pointer`} key={button.title} onClick={() => setSelectedButton(button.title)}>
                     <div className={`${selectedButton === button.title ? 'text-black1' : 'text-white'} text-[32px] font-medium`}>{button.title}</div>
                  </div>
               ))}
            </div>
         </div>
         <div className="flex justify-between px-4 bg-opacity-0 fixed w-full sm:hidden">
            <Image src={menu} alt="menu" className="size-10 cursor-pointer" />
            <Image src={bag} alt="bag" className="size-10 cursor-pointer" />
         </div>
      </>
   )
}