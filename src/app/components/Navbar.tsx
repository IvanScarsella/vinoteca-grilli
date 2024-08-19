"use client"

import { useState, useEffect } from "react"
import menu from "../../../public/menu.svg"
import menuBlack from "../../../public/menuBlack.png"
import bag from "../../../public/bag.svg"
import bagBlack from "../../../public/bagBlack.png"
import bagRed from "../../../public/bagRed.png"
import arrow from "../../../public/arrow.png"
import close from "../../../public/close.svg"
import Image from "next/image"
import { useGlobalContext } from "../../../context/store"
import { useRouter, usePathname } from "next/navigation"

export default function Navbar() {

   const router = useRouter()
   const pathname = usePathname()

   const [showMenu, setShowMenu] = useState(false)
   const [isVisible, setIsVisible] = useState(false);
   const [showNotification, setShowNotification] = useState(false)

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
      setSelectedButton,
      showCart,
      setShowCart,
      cart
   } = useGlobalContext()

   const toggleVisibility = () => {
      if (window.scrollY > 1083) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   };
   useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
   }, []);

   useEffect(() => {
      if (cart.length) {
         setShowNotification(true)
      } else {
         setShowNotification(false)
      }
   }, [cart])
   console.log(showNotification)
   return (
      <>
         <div className={`w-full h-[70px] max-md:h-[52px] bg-gradient-to-r from-[#7e7c7cba] via-[#969393ba] to-[#adaaaaba] backdrop-blur-sm justify-center items-center gap-8 inline-flex max-sm:hidden fixed z-10 ${selectedButton === 'Envíos' ? 'blur-[2px]' : ''}`} onMouseLeave={() => setShowMenu(false)}>
            <div className="self-stretch justify-center items-center gap-8 flex">
               {navbarButtons.map((button) => (
                  <div className={`${selectedButton === button.title ? 'bg-yellow1 border-x-4 border-[#f2f2f2] opacity-100' : 'opacity-75'} p-2.5 justify-center items-center gap-2.5 flex cursor-pointer`} key={button.title} onClick={() => { setSelectedButton(button.title); button.src && button.src !== pathname ? router.push(`${button.src}`) : null; button.title === 'Envíos' ? setShowDeliveryModal(!showDeliveryModal) : null }}>
                     <div className={`${selectedButton === button.title ? 'text-black1' : 'text-white'} text-[32px] max-md:text-2xl font-medium hover:scale-110 transition-all ease-in-out`}>{button.title}</div>
                  </div>
               ))}
            </div>
         </div>
         <div className="flex justify-between px-4 bg-opacity-0 fixed z-10 w-full sm:hidden mt-3">
            <Image src={pathname !== '/' || '/shop' ? menuBlack : menu} alt="menu" className={`${showMenu ? 'hidden' : null} size-10 cursor-pointer hover:scale-[1.2] transition-all ease-in-out`} onClick={() => setShowMenu((value) => !value)} />
            <div className={`${!showMenu ? 'hidden' : null} bg-white1 rounded-r-[10px] flex flex-col gap-2 pl-2.5 min-w-[157px] py-2.5 -mt-3 -ml-4`} onMouseLeave={() => setShowMenu(false)}>
               <Image src={close} alt="menu" className={`${!showMenu ? 'hidden' : null} size-10 cursor-pointer hover:scale-[1.2] transition-all ease-in-out`} onClick={() => setShowMenu((value) => !value)} />
               {navbarButtons.map((button) => (
                  <p className="text-sm font-medium cursor-pointer hover:scale-[1.2] hover:pl-4 transition-all ease-in-out" key={button.title} onClick={() => { setSelectedButton(button.title); button.src && button.src !== pathname ? router.push(`${button.src}`) : null; button.title === 'Envíos' ? setShowDeliveryModal(!showDeliveryModal) : null; setShowMenu(false) }} >{button.title}</p>
               ))}
            </div>
            <Image src={pathname !== '/' || '/shop' ? bagBlack : bag} alt="bag" className={`size-10 cursor-pointer hover:scale-[1.2] transition-all ease-in-out ${showCart ? 'hidden' : ''}`} onClick={() => setShowCart((value) => !value)} />
         </div>
         <div className={`${showCart ? 'hidden' : ''}`} onClick={() => setShowCart((value) => !value)}>
            <Image src={bagRed} alt='red bag' className="fixed lg:top-32 sm:top-20 right-[11px] z-10 max-sm:hidden max-lg:size-16 cursor-pointer hover:scale-[1.15] transition-all ease-in-out " />
            <div className={`bg-[#F84545] size-[25px] max-lg:size-5 max-sm:size-3.5 fixed lg:top-[195px] sm:top-[131px] max-sm:top-10 right-[11px] max-sm:right-4 z-10 rounded-full ${!showNotification ? 'hidden' : ''}`} ></div>
         </div>
         <div>
            {isVisible && (
               <Image src={arrow} alt='arrow' className={`fixed bottom-[219px] right-[15px] sm:hidden`} onClick={() => {
                  window.scrollTo({
                     top: 0,
                     behavior: 'smooth',
                  });
               }} />
            )}
         </div>
      </>
   )
}