"use client"

import { useEffect, useState } from "react"
import { Product, useGlobalContext } from "../../../context/store"
import Image from "next/image"
import Card from "../components/Card"

export default function Product(id: any) {

   const [product, setProduct] = useState<Product>()

   const { products, selectedButton } = useGlobalContext()

   useEffect(() => {
      setProduct(products.find((product) => product.id == id.params.id))
   }, [])

   return (
      <div className={`mt-[70px] bg-white1 px-[50px] pb-20 ${selectedButton === 'Envíos' ? 'blur-[2px]' : ''}`}>
         <p className="text-[#555454] text-2xl font-normal pt-[34px]">Tienda / Vinos / Tinto / Alamos</p>
         <div className="flex flex-row mt-[68px] gap-20">
            <div className="rounded-[10px] h-[600px] w-[436px] overflow-hidden">
               {product?.image ?
                  <Image src={product?.image} alt='product-image' className="container h-full w-full rounded-[10px] hover:scale-110 transition-all ease-in-out" />
                  : null}
            </div>
            <div className="flex flex-col gap-8 justify-between pt-[13px]">
               <h2 className="text-4xl">{product?.name}</h2>
               <p className="text-5xl font-medium">${product?.price}</p>
               <p className="text-2xl">{product?.stock ? 'Stock disponible' : 'No disponible'}</p>
               {product?.stock ?
                  <div className="flex gap-2 items-center justify-around px-2 bg-white1 border border-black1 text-2xl w-[172px] rounded-lg">
                     <p className="">Cantidad</p>
                     <select name="" id="" className="bg-white1">
                        <option value="" className="px-20">1</option>
                        <option value="" className="px-20">2</option>
                        <option value="" className="px-20">3</option>
                     </select>
                  </div>
                  : null}
               <p className="text-2xl font-medium">Descripción</p>
               <p className="text-2xl font-medium max-w-[500px]">{product?.description}</p>
               <div className="flex flex-row gap-6">
                  <button className="bg-[#B94B2D] rounded-lg text-2xl text-white1 py-[7px] px-[68px] w-[350px] hover:scale-[1.1]">Agregar al carrito</button>
                  <button className="bg-[#842E3D] rounded-lg text-2xl text-white1 py-[7px] px-[68px] w-[350px] hover:scale-[1.1]">Encargar</button>
               </div>
            </div>
         </div>
         <p className="mt-[99px] text-[40px]">Productos relacionados</p>
         <div className="flex flex-row gap-4 max-md:gap-2 justify-center max-[720px]:justify-start w-full max-[720px]:w-screen max-[720px]:-mx-4  max-w-full overflow-x-auto scroll-smooth overflow-clip px-4 self-center mt-5">
            {products.slice(0, 4).map((product) => (
               <Card data={product} />
            ))}
         </div>
      </div>
   )
}