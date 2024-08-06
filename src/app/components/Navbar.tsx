"use client"

import { useState, useEffect } from "react"
import menu from "../../../public/menu.svg"
import bag from "../../../public/bag.svg"
import Image from "next/image"
import { useGlobalContext } from "../../../context/store"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {

   const router = useRouter()
   const pathname = usePathname()

   const navbarButtons = [
      { title: 'Inicio', src: '/' },
      { title: 'Tienda', src: '/shop' },
      { title: 'Envíos', },
      { title: 'Contacto', },
   ]

   let {
      showDeliveryModal,
      setShowDeliveryModal,
      selectedButton,
      setSelectedButton
   } = useGlobalContext()

   return (
      <>
         <div className={`w-full h-[70px] bg-gradient-to-r from-[#7e7c7c] via-[#969393] to-[#adaaaa] backdrop-blur-sm justify-center items-center gap-8 inline-flex max-sm:hidden ${selectedButton === 'Envíos' ? 'blur-[2px]' : ''}`}>
            <div className="self-stretch justify-center items-center gap-8 flex">
               {navbarButtons.map((button) => (
                  <div className={`${selectedButton === button.title ? 'bg-yellow1 border-x-4 border-[#f2f2f2] ' : ''} p-2.5 justify-center items-center gap-2.5 flex cursor-pointer`} key={button.title} onClick={() => { setSelectedButton(button.title); button.src && button.src !== pathname ? router.push(`${button.src}`) : null; button.title === 'Envíos' ? setShowDeliveryModal(!showDeliveryModal) : null }}>
                     <div className={`${selectedButton === button.title ? 'text-black1' : 'text-white'} text-[32px] font-medium hover:scale-110`}>{button.title}</div>
                  </div>
               ))}
            </div>
         </div>
         <div className="flex justify-between px-4 bg-opacity-0 fixed w-full sm:hidden">
            <Image src={menu} alt="menu" className="size-10 cursor-pointer hover:scale-[1.2]" />
            <Image src={bag} alt="bag" className="size-10 cursor-pointer hover:scale-[1.2]" />
         </div>
      </>
   )
}