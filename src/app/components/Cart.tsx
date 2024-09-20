"use client"

import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/store";
import { Product } from "../../../context/store";
import close from '../../../public/close.svg'
import deleteProduct from '../../../public/delete.png'
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

type CartProduct = Product & { quantity: number };

export default function Cart() {

   const builder = imageUrlBuilder(client);

   const [products, setProducts] = useState<CartProduct[]>([]);
   const [totalPrice, setTotalPrice] = useState<number>(0)

   let {
      cart,
      showCart,
      setShowCart,
      removeFromCart,
      setShowInstructionsModal
   } = useGlobalContext();

   useEffect(() => {
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
         total += cart[i].price
      }
      setTotalPrice(total)
   }, [cart])

   useEffect(() => {
      const productMap = new Map();
      cart.forEach((item) => {
         if (productMap.has(item.slug.current)) {
            const existingProduct = productMap.get(item.slug.current);
            existingProduct.quantity += 1;
            productMap.set(item.slug.current, existingProduct);
         } else {
            productMap.set(item.slug.current, { ...item, quantity: 1 });
         }
      });

      setProducts(Array.from(productMap.values()));
   }, [cart]);

   const generateWhatsAppMessage = () => {
      if (products.length === 0) return "No hay productos en el carrito.";

      const productList = products.map(product => {
         return `${product.name} (Cantidad: ${product.quantity})`;
      }).join(", ");

      return `Hola, me gustaría encargar estos productos: ${productList}`;
   };

   return (
      <div className={`fixed top-[70px] max-md:top-0 right-0 bg-white1 w-[740px] max-lg:w-[600px] max-md:w-[360px] px-[29px] max-md:px-4 flex flex-col z-10 sm:border border-black1 rounded-[10px] transform transition-transform duration-500 ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="flex justify-between items-center mt-10 max-md:mt-6">
            <p className="text-[40px] max-lg:text-3xl max-md:text-2xl font-medium ml-2.5 max-md:ml-0">Carrito</p>
            <Image src={close} alt='close' className='hover:scale-[1.2] transition-all ease-in-out cursor-pointer max-lg:size-12 max-md:size-9' onClick={() => setShowCart((value) => !value)} />
         </div>
         <div className="flex flex-col items-center gap-6 max-lg:gap-4 mt-10 max-lg:mt-7 max-md:mt-5 overflow-y-auto scroll-smooth overflow-clip max-h-[600px] max-md:max-h-[450px]">
            {products?.map((product: any, index) => {
               const imageUrl = product.image ? builder.image(product.image).width(323).height(500).url() : null;
               const slug = product.slug.current

               return (
                  <div key={index} className="flex rounded-[10px] border border-black1 w-[550px] max-lg:w-[500px] max-md:w-[312px]">
                     {imageUrl ? (
                        <Image src={imageUrl} width={323} height={500} alt={product.name} className="h-[306px] max-lg:h-64 max-md:h-56 w-[206px] max-lg:w-44 max-md:w-36 rounded-l-[10px]" />
                     ) : (
                        <div className="h-[306px] max-lg:h-64 max-md:h-56 w-[206px] max-lg:w-44 max-md:w-36 rounded-l-[10px] bg-gray-200 flex items-center justify-center">
                           <p>No image available</p>
                        </div>
                     )}
                     <div className="ml-[49px] max-lg:ml-8 max-md:ml-2 flex flex-col gap-2.5 max-lg:gap-2 py-[16.5px] max-lg:py-3">
                        <p className=" text-[24px] max-lg:text-[18px] max-md:text-base text-wrap max-md:w-40 font-medium">{product.name}</p>
                        <p className="text-[36px] max-lg:text-3xl max-md:text-2xl font-medium">$ {product.price}</p>
                        <p className="text-[24px] max-lg:text-[18px] max-md:text-base font-normal">Cantidad: {product.quantity}</p>
                        <div className="flex items-center gap-4 max-md:gap-1 mt-[56px] max-lg:mt-[78px] max-md:mt-8 ml-[110px] max-md:ml-10 cursor-pointer" onClick={slug ? () => removeFromCart(product.slug.current) : () => console.log(product.slug.current)}>
                           <p className="text-[24px] max-lg:text-[18px] max-md:text-base font-normal">Eliminar</p>
                           <Image src={deleteProduct} alt='delete' className="max-lg:size-10" />
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
         {!products.length ? (
            <p className="mx-auto text-justify text-xl max-md:text-sm">Su carrito aún está vacío. Seleccione el/los productos que desee comprar.</p>
         ) :
            <p className="mx-auto mt-4 max-md:mt-6 text-justify text-xl max-md:text-sm">Total: <span className="text-[#842E3D]">${totalPrice}</span></p>
         }
         {!products.length ? (
            <button className="mt-4 max-md:mt-6 hover:scale-[1.15] transition-all ease-in-out bg-[#842E3D] text-white1 rounded-lg h-[60px] max-lg:h-12 max-md:h-10 w-[480px] max-lg:w-80 max-md:w-60 self-center text-4xl max-lg:text-3xl max-md:text-2xl font-medium mb-[40px]" onClick={() => {
               setShowCart(false);
               setShowInstructionsModal(true)
            }}>Encargar</button>
         ) : (
            <a
               href={`https://api.whatsapp.com/send/?phone=5492213995216&text=${encodeURIComponent(generateWhatsAppMessage())}`}
               target="_blank"
               rel="noopener noreferrer"
               className="mx-auto"
            >
               <button className="mt-4 max-md:mt-6 hover:scale-[1.15] transition-all ease-in-out bg-[#842E3D] text-white1 rounded-lg h-[60px] max-lg:h-12 max-md:h-10 w-[480px] max-lg:w-80 max-md:w-60 self-center text-4xl max-lg:text-3xl max-md:text-2xl font-medium mb-[40px]">Encargar</button>
            </a>
         )}
      </div>
   );
}
