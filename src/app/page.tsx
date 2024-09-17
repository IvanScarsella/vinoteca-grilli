// "use client"

import Image from "next/image";
import ImagesCarousel from "./components/ImagesCarousel";

import Card from "./components/Card";
import wineIcon from "../../public/wineIcon.png"
import beerIcon from "../../public/beerIcon.png"
import { useGlobalContext } from "../../context/store";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { productsQuery } from "@/sanity/lib/queries";
import ShowMoreButton from "./components/ShowMoreButton";

export default async function Home() {

  // let {
  //   products,
  //   showDeliveryModal,
  //   setShowDeliveryModal,
  //   selectedButton
  // } = useGlobalContext()

  const products = await sanityFetch<SanityDocument[]>({ query: productsQuery })

  const sections = [
    // { sectionName: 'Nuestros productos', sectionImage: undefined, products: products, },
    { sectionName: 'Vinos', category: 'Vino', sectionImage: wineIcon, products: products.filter((product: any) => product.category === 'Vino' && product.stock !== false), },
    { sectionName: 'Gin', category: 'Gin', sectionImage: wineIcon, products: products.filter((product: any) => product.category === 'Gin' && product.stock !== false), },
    { sectionName: 'Espumantes', category: 'Espumante', sectionImage: wineIcon, products: products.filter((product: any) => product.category === 'Espumante' && product.stock !== false), },
    { sectionName: 'Aperitivos', category: 'Aperitivo', sectionImage: wineIcon, products: products.filter((product: any) => product.category === 'Aperitivo' && product.stock !== false), },
    { sectionName: 'Bebidas Blancas', category: 'Bebida Blanca', sectionImage: wineIcon, products: products.filter((product: any) => product.category === 'Bebida Blanca' && product.stock !== false), },
    { sectionName: 'Whiskys', category: 'Whisky', sectionImage: wineIcon, products: products.filter((product: any) => product.category === 'Whisky' && product.stock !== false), },
    { sectionName: 'Regalería', category: 'Regalería', sectionImage: beerIcon, products: products.filter((product: any) => product.category === 'Regalería' && product.stock !== false), },
  ]

  return (
    <section className={`bg-white1 pb-20 `}>
      {/* <section className={`bg-white1 pb-20 ${selectedButton === 'Envíos' ? 'blur-[2px]' : ''}`}> */}
      <ImagesCarousel />
      {sections.map((section, index) => (

        <div className="flex flex-col mb-3" key={index}>
          <div className="flex flex-row items-center my-[26px] px-[50px] max-md:px-4">
            {section.sectionImage ? <Image src={section.sectionImage} alt={section.sectionName} className="size-[30px] mr-4 max-md:hidden" /> : null}
            <p className="text-4xl max-md:text-xl text-nowrap font-normal tracking-tight mr-[33px] max-md:mr-1.5">{section.sectionName}</p>
            <div className="w-full h-px bg-black1" />
            <ShowMoreButton category={section.category} />
          </div>
          <div className="flex flex-row gap-4 max-md:gap-2 justify-center max-[720px]:justify-start w-full max-[720px]:w-screen max-[720px]:-mx-4  max-w-full overflow-x-auto scroll-smooth overflow-clip px-4 self-center">
            {section.products.slice(0, 5).map((product, index) => (
              <Card data={product} key={index} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
