"use client"

import Image from "next/image"
import logo from '../../../public/logo.png'
import instagramLogo from '../../../public/instagramLogo.png'
import whatsappLogo from '../../../public/whatsappLogo.png'

export default function Footer() {

   const footerButtons = [
      { title: 'Inicio', function: '', },
      { title: 'Tienda', function: '', },
      { title: 'Envío', function: '', },
      { title: 'Contacto', function: '', }
   ]

   const socialMedia = [
      { name: 'Instagram', src: instagramLogo },
      { name: 'WhatsApp', src: whatsappLogo }
   ]

   const footerItems = [
      'Martes a Sábados: 10:00 - 20:00hs.',
      'Domingos y Lunes: Cerrado',
      '60 e/ 136 y 137 nº 2061 - Los Hornos, La Plata'
   ]

   return (
      <footer className="h-96 w-full bg-gradient-to-b from-yellow1 to-[#987135] px-[50px] py-6 flex justify-between">
         <div className="w-1/3 h-full flex flex-col justify-between">
            {footerButtons.map((button) => (
               <p className="font-medium text-[32px]" key={button.title}>{button.title}</p>
            )
            )}
         </div>
         <div className="w-1/3 flex flex-col justify-around items-center pr-40">
            <Image src={logo} alt='logo' className="h-[146px] w-[146px]" />
            <p className="text-[15px] font-normal -mt-6">Vinoteca online</p>
            <button className="text-xl p-2 rounded-lg border border-black1">Instrucciones de uso</button>
         </div>
         <div className="w-1/3 flex flex-col gap-8 justify-center items-center">
            <div className="flex gap-9 justify-center">
               {socialMedia.map((media) => (
                  <Image src={media.src} alt={media.name} className="h-12 w-12 cursor-pointer" />
               ))}
            </div>
            <ul className="list-disc">
               {footerItems.map((item) => (
                  <li className="text-[15px] font-normal">{item}</li>
               ))}
            </ul>
         </div>
      </footer>
   )
}