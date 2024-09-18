"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../../../context/store";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

export default function Card(data: any) {

   const builder = imageUrlBuilder(client);

   const router = useRouter()

   const productData = data.data;

   const {
      addToCart
   } = useGlobalContext()

   return (
      <div className="h-[500px] w-[323px] max-[1500px]:w-72 max-[1500px]:h-[450px] max-[1356px]:w-56 max-[1104px]:w-40 max-lg:max-w-40 max-[1356px]:h-96 max-[1104px]:h-[280px] rounded-[10px] flex-shrink-0 overflow-hidden" >
         <Image src={builder.image(productData.image).width(323).height(500).url()} alt={productData?.name} width={323} height={500} className="size-full relative top-0 rounded-[10px] hover:scale-110 transition-all ease-in-out" onClick={() => router.push(`/${productData.slug.current}`)} />
         {/* <Image src={productData?.image} alt={productData?.name} className="size-full relative top-0 rounded-[10px] hover:scale-110 transition-all ease-in-out" onClick={() => router.push(`/${productData.id}`)} /> */}
         <div className="text-white1 relative bottom-[182px] max-md:bottom-[125px] left-0 h-[182px] w-full bg-[#302F2F80] py-[18px] max-md:py-2.5 px-2 max-md:px-1 flex flex-col gap-2.5 md:gap-1  xl:gap-2.5">
            <p className="text-2xl max-xl:text-xl max-lg:text-base max-md:text-sm max-h-16 -mt-2 line-clamp-2" onClick={() => router.push(`/${productData.id}`)}>{productData?.name}</p>
            <p className="text-[32px] max-xl:text-3xl max-lg:text-2xl max-md:text-xl font-medium  absolute top-[70px] max-md:top-12" onClick={() => router.push(`/${productData.id}`)}> {productData?.stock === false ? 'Sin Stock' : '$ ' + productData.price}</p>
            <button className="border border-white1 rounded-lg p-2.5 float-right text-xl max-lg:text-base max-md:text-sm transition-all ease-in-out absolute top-[120px] max-lg:top-[104px] max-md:top-[78px] w-[299px] max-[1439px]:w-[272px] max-xl:w-[208px] max-lg:w-[144px] max-md:w-[152px] disabled:cursor-not-allowed disabled:opacity-50 " onClick={() => addToCart(productData)} disabled={productData?.stock === false}>Agregar al carrito</button>
         </div>
      </div>
   )
}