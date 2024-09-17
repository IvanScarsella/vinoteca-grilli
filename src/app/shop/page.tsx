import Image from "next/image";

import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { productsQuery } from "@/sanity/lib/queries";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList"; // Nuevo componente de cliente para manejar la lógica interactiva
import ShopBanner from "../components/shopBanner";

export default async function Shop() {
   const products = await sanityFetch<SanityDocument[]>({ query: productsQuery });

   return (
      <section className="bg-black1 flex flex-col items-center">
         <ShopBanner />
         {/* Filtros y lista de productos dentro del Client Component */}
         <Filters products={products} />
         <ProductList products={products} />
      </section>
   );
}
