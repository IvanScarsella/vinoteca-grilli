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
import ProductsSection from "./components/ProductsSection";

export default async function Home() {

  const products = await sanityFetch<SanityDocument[]>({ query: productsQuery })

  const sections = [
    { sectionName: 'Vinos', category: 'Vino', products: products.filter((product: any) => product.category === 'Vino' && product.stock !== false), },
    { sectionName: 'Gines', category: 'Gin', products: products.filter((product: any) => product.category === 'Gin' && product.stock !== false), },
    { sectionName: 'Espumantes', category: 'Espumante', products: products.filter((product: any) => product.category === 'Espumante' && product.stock !== false), },
    { sectionName: 'Aperitivos', category: 'Aperitivo', products: products.filter((product: any) => product.category === 'Aperitivo' && product.stock !== false), },
    { sectionName: 'Bebidas Blancas', category: 'Bebida Blanca', products: products.filter((product: any) => product.category === 'Bebida Blanca' && product.stock !== false), },
    { sectionName: 'Whiskies', category: 'Whisky', products: products.filter((product: any) => product.category === 'Whisky' && product.stock !== false), },
    { sectionName: 'Regalería', category: 'Regalería', products: products.filter((product: any) => product.category === 'Regalería' && product.stock !== false), },
  ]

  return (
    <section className={`bg-white1 pb-20 `}>
      <ImagesCarousel />
      {sections.map((section, index) => (

        <ProductsSection
          key={index}
          sectionName={section.sectionName}
          category={section.category}
          products={section.products}
        />
      ))}
    </section>
  );
}
