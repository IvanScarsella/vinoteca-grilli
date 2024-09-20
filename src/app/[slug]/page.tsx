// "use client"

// import { useEffect, useState } from "react"
import { Product, useGlobalContext } from "../../../context/store"
import Image from "next/image"
import Card from "../components/Card"
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "@sanity/client";
import { productPathsQuery, productQuery, productsQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/fetch"
import AddToCartButton from "../components/AddToCartButton";
import BuyButton from "../components/BuyButton";

const builder = imageUrlBuilder(client);

export default async function ProductById({ params }: { params: any }) {

   const product = await sanityFetch<SanityDocument>({ query: productQuery, params })

   const relatedProducts = await sanityFetch<SanityDocument>({ query: productsQuery, params })

   return (
      <section className={`sm:mt-[70px] bg-white1 pb-20 max-sm:pb-7  flex flex-col max-lg:items-center lg:4`}>
         {product.slug.current ? (
            <>
               <p className="text-[#555454] text-2xl max-sm:text-sm sm:text-xl font-normal pt-[34px] min-[360px]:pt-[65px] lg:text-start  lg:ml-9 xl:ml-12">Tienda {'/ ' + product.category} {product.subCategory ? '/ ' + product.subCategory : null}</p>
               <h2 className="text-4xl max-sm:text-xl sm:text-3xl lg:hidden mt-4">{product?.name}</h2>
               <div className="flex flex-row mt-[68px] max-sm:mt-[11px] sm:mt-8 xl:gap-20 max-sm:gap-2 max-lg:gap-8 lg:gap-10 px-[50px] max-sm:px-1.5 max-xl:px-10">
                  <div className="rounded-[10px] h-[600px] max-sm:h-[275px] max-lg:h-[450px] w-[336px] lg:w-[436px] max-sm:w-1/2 min-w-40 overflow-hidden my-auto">
                     {product?.image ?
                        <Image src={builder.image(product.image).width(323).height(500).url()} alt='product-image' width={323} height={500} className="container h-full w-full rounded-[10px] hover:scale-110 transition-all ease-in-out" />
                        : null}
                  </div>
                  <div className="flex flex-col max-h-full justify-around pt-[13px] min-w-40 max-sm:w-1/2">
                     <h2 className="text-4xl max-sm:text-xl max-lg:hidden">{product?.name}</h2>
                     <p className="text-5xl max-sm:text-4xl sm:text-[40px] font-medium">{product?.stock === false ? 'Sin Stock' : '$ ' + product.price} <span className="text-xl">*</span></p>
                     <p className="text-2xl max-sm:text-sm sm:text-xl" hidden={!product?.year}>Año: {product?.year}</p>
                     <p className="text-2xl max-sm:text-sm sm:text-xl" hidden={!product?.milliliters}>{product?.milliliters} ml</p>
                     <p className="text-2xl max-sm:text-sm sm:text-xl" hidden={!product?.cellar}>Bodega: {product?.cellar}</p>
                     <p className="text-2xl max-sm:text-sm sm:text-xl" hidden={!product?.region}>Región: {product?.region}</p>
                     <p className="text-2xl max-sm:text-sm sm:text-xl " hidden={!product?.varietal}>Varietal: {product?.varietal ? product.varietal.join(' - ') : null}</p>
                     <p className="text-2xl max-sm:text-sm sm:text-xl" hidden={!product?.fermentationTime}>Tiempo de fermentación: {product?.fermentationTime}</p>
                     {product?.type ? (
                        <p className="text-2xl max-sm:text-sm sm:text-xl">Tipo: {product?.type}</p>
                     ) : null}
                     <p className="text-2xl max-sm:text-sm sm:text-xl" hidden={!product?.organic}>{product?.organic === true ? 'Orgánico' : null}</p>
                     <p className="text-2xl max-sm:text-sm sm:text-xl" hidden={!product?.oak}>{product?.oak === true ? 'Roble' : null}</p>
                     <div className="flex flex-row max-lg:flex-col gap-6 max-sm:gap-2 2xl:min-w-[724px] xl:min-w-[600px] lg:min-w-[450px] md:min-w-[300px] sm:min-w-32">
                        <AddToCartButton product={product} />
                        <BuyButton />
                     </div>
                  </div>
               </div>
               <p className="mt-4 text-base max-md:text-xs ml-12 max-xl:ml-10 max-sm:ml-0 sm:self-start self-center">* Los precios pueden estar sujetos a cambios</p>
               <p className="mt-[99px] max-sm:mt-5 sm:mt-8 text-[40px] max-sm:text-2xl lg:ml-9 xl:ml-12">Productos relacionados</p>
               <div className="flex flex-row gap-4 max-md:gap-2 justify-center max-[720px]:justify-start w-full max-[720px]:w-screen max-[720px]:-mx-4  max-w-full overflow-x-auto scroll-smooth overflow-clip px-4 self-center mt-5">
                  {relatedProducts.filter((product2: any) =>
                     product2.cellar === product.cellar ||
                     product2.subCategory === product.subCategory ||
                     product2.category === product.category
                  ).slice(0, 4).map((product: any, index: any) => (
                     <Card data={product} key={index} />
                  ))}
               </div>
            </>) : null}
      </section>
   )
}