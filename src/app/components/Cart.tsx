"use client"

import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/store";
import { Product } from "../../../context/store";
import close from '../../../public/close.svg'
import deleteProduct from '../../../public/delete.png'
import Image from "next/image";

type CartProduct = Product & { quantity: number };

export default function Cart() {
   const [products, setProducts] = useState<CartProduct[]>([]);

   let {
      cart,
      showCart,
      setShowCart
   } = useGlobalContext();

   useEffect(() => {
      const productMap = new Map();

      cart.forEach((item) => {
         if (productMap.has(item.id)) {
            const existingProduct = productMap.get(item.id);
            existingProduct.quantity += 1;
            productMap.set(item.id, existingProduct);
         } else {
            productMap.set(item.id, { ...item, quantity: 1 });
         }
      });

      setProducts(Array.from(productMap.values()));
   }, [cart]);

   return (
      <div className={`${!showCart ? 'hidden' : ''} fixed top-[70px] right-0 bg-white1 w-[740px] px-[29px] flex flex-col z-10`}>
         <div className="flex justify-between items-center mt-10">
            <p className="text-[40px] font-medium ml-2.5">Carrito</p>
            <Image src={close} alt='close' className='hover:scale-[1.2] transition-all ease-in-out cursor-pointer' onClick={() => setShowCart((value) => !value)} />
         </div>
         <div className="flex flex-col items-center gap-6 mt-10  overflow-y-auto scroll-smooth overflow-clip max-h-[600px]">
            {products?.map((product: any, index) => (
               <div key={index} className="flex rounded-[10px] border border-black1 w-[550px]">
                  <Image src={product.image} alt={product.name} className="h-[306px] w-[206px] rounded-l-[10px]" />
                  <div className="ml-[49px] flex flex-col gap-2.5 py-[16.5px]">
                     <p className="text-[18px] font-medium">{product.name}</p>
                     <p className="text-[36px] font-medium">$ {product.price}</p>
                     <p className="text-[24px] font-normal">Cantidad: {product.quantity}</p>
                     <div className="flex items-center gap-4 mt-[66px] ml-[110px] cursor-pointer">
                        <p className="text-[24px] font-normal">Eliminar</p>
                        <Image src={deleteProduct} alt='delete' className="" />
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <button className="mt-12 hover:scale-[1.15] transition-all ease-in-out bg-[#842E3D] text-white1 rounded-lg h-[60px] w-[480px] self-center text-4xl font-medium mb-[130px]">Encargar</button>
      </div>
   );
}
