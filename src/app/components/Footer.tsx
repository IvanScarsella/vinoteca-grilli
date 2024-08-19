"use client"

import Image from "next/image"
import logo from '../../../public/logo.png'
import instagramLogo from '../../../public/instagramLogo.png'
import whatsappLogo from '../../../public/whatsappLogo.png'
import Link from "next/link"
import { useGlobalContext } from "../../../context/store"
import { useRouter, usePathname } from "next/navigation"

export default function Footer() {

   const router = useRouter()
   const pathname = usePathname()

   let {
      showInstructionsModal,
      setShowInstructionsModal,
      selectedButton,
      setSelectedButton
   } = useGlobalContext()

   const footerButtons = [
      { title: 'Inicio', src: '/', },
      { title: 'Tienda', src: '/shop', },
      { title: 'Envío' },
      { title: 'Contacto' }
   ]

   const socialMedia = [
      { name: 'Instagram', src: instagramLogo, href: 'https://www.instagram.com/grillivinoteca/' },
      { name: 'WhatsApp', src: whatsappLogo, href: 'https://api.whatsapp.com/send/?phone=5492213995216' }
   ]

   const footerItems = [
      'Martes a Sábados: 10:00 - 20:00hs.',
      'Domingos y Lunes: Cerrado',
      '60 e/ 136 y 137 nº 2061 - Los Hornos, La Plata'
   ]

   return (
      <footer className={`h-96 w-full bg-gradient-to-b from-yellow1 to-[#987135] px-[50px] py-6 flex justify-between max-md:flex-col max-md:p-1 max-md:py-2 max-md:gap-4 max-md:h-auto ${selectedButton === 'Envíos' ? 'blur-[2px]' : ''}`}>
         <div className="w-1/3 h-full flex flex-col justify-center gap-6 max-md:flex-row max-md:w-full max-md:px-5">
            {footerButtons.map((button) => (
               <p className="font-medium text-[32px] max-md:text-xl max-[450px]:text-base cursor-pointer" key={button.title} onClick={() => { setSelectedButton(button.title); button.src && button.src !== pathname ? router.push(`${button.src}`) : null }}>{button.title}</p>
            )
            )}
         </div>
         <div className="w-1/3 flex flex-col justify-around items-center lg:pr-40 min-[900px]:pr-24 md:pr-16 max-md:w-full max-md:min-h-[191px] max-md:gap-4">
            <Image src={logo} alt='logo' className="size-[146px] min-w-[146px] max-sm:size-24 max-md:min-w-0" />
            <p className="text-[15px] font-normal -mt-6 text-center">Vinoteca online</p>
            <button className="text-xl p-2 rounded-lg border border-black1 max-md:text-sm max-md:border-[0.5px] hover:scale-[1.2] transition-all ease-in-out" onClick={() => setShowInstructionsModal(true)}>Instrucciones de uso</button>
         </div>
         <div className="w-1/3 flex flex-col gap-8 justify-center items-center max-md:w-full">
            <div className="flex gap-9 justify-center">
               {socialMedia.map((media) => (
                  <Link href={media.href} target='_blank' key={media.name}>
                     <Image src={media.src} alt={media.name} className="size-12 cursor-pointer max-md:size-10 hover:scale-[1.2] transition-all ease-in-out" />
                  </Link>
               ))}
            </div>
            <ul className="list-disc ">
               {footerItems.map((item) => (
                  <li className="text-[15px] max-md:tracking-tight font-normal" key={item}>{item}</li>
               ))}
            </ul>
         </div>
      </footer>
   )
}