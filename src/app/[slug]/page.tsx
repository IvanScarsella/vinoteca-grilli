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

// export async function generateStaticParams() {
//    const products = await client.fetch(productPathsQuery);
//    return products
// }

export default async function ProductById({ params }: { params: any }) {

   const product = await sanityFetch<SanityDocument>({ query: productQuery, params })

   const relatedProducts = await sanityFetch<SanityDocument>({ query: productsQuery, params })
   // const [productData, setProductData] = useState<Product>()

   // const { products, selectedButton, addToCart, setShowInstructionsModal } = useGlobalContext()

   // useEffect(() => {
   //    setProductData(products.find((product) => product.id == id.params.id))
   // }, [id])
   product ? console.log(product) : null
   return (
      <section className={`sm:mt-[70px] bg-white1 pb-20 max-sm:pb-7  flex flex-col max-lg:items-center lg:4`}>
         {/* <section className={`sm:mt-[70px] bg-white1 pb-20 max-sm:pb-7 ${selectedButton === 'Envíos' ? 'blur-[2px]' : ''} flex flex-col max-lg:items-center lg:4`}> */}
         {product.slug.current ? (
            <>
               <p className="text-[#555454] text-2xl max-sm:text-sm sm:text-xl font-normal pt-[34px] min-[360px]:pt-[65px] lg:text-start  lg:ml-9 xl:ml-12">Tienda / Vinos / Tinto / Alamos</p>
               <h2 className="text-4xl max-sm:text-xl sm:text-3xl lg:hidden mt-4">{product?.name}</h2>
               <div className="flex flex-row mt-[68px] max-sm:mt-[11px] sm:mt-8 xl:gap-20 max-sm:gap-2 max-lg:gap-8 lg:gap-10 px-[50px] max-sm:px-1.5 max-xl:px-10">
                  <div className="rounded-[10px] h-[600px] max-sm:h-[275px] max-lg:h-[450px] w-[336px] lg:w-[436px] max-sm:w-1/2 min-w-40 overflow-hidden my-auto">
                     {product?.image ?
                        <Image src={builder.image(product.image).width(323).height(500).url()} alt='product-image' width={323} height={500} className="container h-full w-full rounded-[10px] hover:scale-110 transition-all ease-in-out" />
                        : null}
                  </div>
                  <div className="flex flex-col max-h-full justify-between pt-[13px] min-w-40 max-sm:w-1/2">
                     <h2 className="text-4xl max-sm:text-xl max-lg:hidden">{product?.name}</h2>
                     <p className="text-5xl max-sm:text-4xl sm:text-[40px] font-medium">{product?.stock === false ? 'Sin Stock' : '$ ' + product.price}</p>
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
                     {/* {product?.stock ?
                        <div className="flex gap-2 items-center justify-around px-2 bg-white1 border border-black1 text-2xl max-sm:text-base w-[172px] max-sm:w-40 rounded-lg">
                           <p className="">Cantidad</p>
                           <select name="" id="" className="bg-white1">
                              <option value="" className="px-20">1</option>
                              <option value="" className="px-20">2</option>
                              <option value="" className="px-20">3</option>
                           </select>
                        </div>
                        : null} */}
                     <div className="flex flex-row max-lg:flex-col gap-6 max-sm:gap-2 2xl:min-w-[724px] xl:min-w-[600px] lg:min-w-[450px] md:min-w-[300px] sm:min-w-48">
                        <AddToCartButton product={product} />
                        <BuyButton />
                     </div>
                  </div>
               </div>
               <p className="mt-[99px] max-sm:mt-5 sm:mt-8 text-[40px] max-sm:text-2xl lg:ml-9 xl:ml-12">Productos relacionados</p>
               <div className="flex flex-row gap-4 max-md:gap-2 justify-center max-[720px]:justify-start w-full max-[720px]:w-screen max-[720px]:-mx-4  max-w-full overflow-x-auto scroll-smooth overflow-clip px-4 self-center mt-5">
                  {relatedProducts.slice(0, 4).map((product: any, index: any) => (
                     <Card data={product} key={index} />
                  ))}
               </div>
            </>) : null}
      </section>
   )
}