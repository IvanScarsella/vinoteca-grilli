"use client"

import { useEffect, useState } from "react"
import { Product, useGlobalContext } from "../../../context/store"
import Image from "next/image"
import Card from "../components/Card"

export default function ProductById(id: any) {

   const [productData, setProductData] = useState<Product>()

   const { products, selectedButton, addToCart, setShowInstructionsModal } = useGlobalContext()

   useEffect(() => {
      setProductData(products.find((product) => product.id == id.params.id))
   }, [id])

   return (
      <section className={`sm:mt-[70px] bg-white1 pb-20 max-sm:pb-7 ${selectedButton === 'Envíos' ? 'blur-[2px]' : ''} flex flex-col max-lg:items-center lg:4`}>
         <p className="text-[#555454] text-2xl max-sm:text-sm sm:text-xl font-normal pt-[34px] min-[360px]:pt-[65px] lg:text-start  lg:ml-9 xl:ml-12">Tienda / Vinos / Tinto / Alamos</p>
         <h2 className="text-4xl max-sm:text-xl sm:text-3xl lg:hidden mt-4">{productData?.name}</h2>
         <div className="flex flex-row mt-[68px] max-sm:mt-[11px] sm:mt-8 xl:gap-20 max-sm:gap-2 max-lg:gap-8 lg:gap-10 px-[50px] max-sm:px-1.5 max-xl:px-10">
            <div className="rounded-[10px] h-[600px] max-sm:h-[275px] max-lg:h-[450px] w-[336px] lg:w-[436px] max-sm:w-1/2 min-w-40 overflow-hidden">
               {productData?.image ?
                  <Image src={productData?.image} alt='productData-image' className="container h-full w-full rounded-[10px] hover:scale-110 transition-all ease-in-out" />
                  : null}
            </div>
            <div className="flex flex-col gap-8 max-sm:gap-4 justify-between pt-[13px] min-w-40 max-sm:w-1/2">
               <h2 className="text-4xl max-sm:text-xl max-lg:hidden">{productData?.name}</h2>
               <p className="text-5xl max-sm:text-4xl sm:text-[40px] font-medium">${productData?.price}</p>
               <p className="text-2xl max-sm:text-sm sm:text-xl">{productData?.stock ? 'Stock disponible' : 'No disponible'}</p>
               {productData?.stock ?
                  <div className="flex gap-2 items-center justify-around px-2 bg-white1 border border-black1 text-2xl max-sm:text-base w-[172px] max-sm:w-40 rounded-lg">
                     <p className="">Cantidad</p>
                     <select name="" id="" className="bg-white1">
                        <option value="" className="px-20">1</option>
                        <option value="" className="px-20">2</option>
                        <option value="" className="px-20">3</option>
                     </select>
                  </div>
                  : null}
               <p className="text-2xl font-medium max-lg:hidden">Descripción</p>
               <p className="text-2xl font-medium max-w-[500px] max-lg:hidden">{productData?.description}</p>
               <div className="flex flex-row max-lg:flex-col gap-6">
                  <button className="bg-[#B94B2D] rounded-lg text-2xl max-sm:text-[15px] sm:text-base text-white1 py-[7px] px-[px] max-sm:px-2.5 max-lg:w-full w-1/2 hover:scale-[1.1]" onClick={() => addToCart(productData!)}>Agregar al carrito</button>
                  <button className="bg-[#842E3D] rounded-lg text-2xl max-sm:text-[15px] sm:text-base text-white1 py-[7px] px-[px] max-sm:px-2.5 max-lg:w-full w-1/2 hover:scale-[1.1]" onClick={() => setShowInstructionsModal(true)}>Encargar</button>
               </div>
            </div>
         </div>
         <p className="text-base sm:text-2xl font-medium lg:hidden mt-3">Descripción</p>
         <p className="text-[13px] sm:text-xl font-medium max-w-[500px] lg:hidden mt-2 px-2">{productData?.description}</p>
         <p className="mt-[99px] max-sm:mt-5 sm:mt-8 text-[40px] max-sm:text-2xl lg:ml-9 xl:ml-12">Productos relacionados</p>
         <div className="flex flex-row gap-4 max-md:gap-2 justify-center max-[720px]:justify-start w-full max-[720px]:w-screen max-[720px]:-mx-4  max-w-full overflow-x-auto scroll-smooth overflow-clip px-4 self-center mt-5">
            {products.slice(0, 4).map((product, index) => (
               <Card data={product} key={index} />
            ))}
         </div>
      </section>
   )
}