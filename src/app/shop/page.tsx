import Image from "next/image";

import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { productsQuery } from "@/sanity/lib/queries";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList"; // Nuevo componente de cliente para manejar la lógica interactiva
import ShopBanner from "../components/ShopBanner";

export default async function Shop() {
   const products = await sanityFetch<SanityDocument[]>({ query: productsQuery });

   const sortedProducts = products.sort((a, b) => {
      if (a.stock === undefined && !b.stock) return -1;
      if (!a.stock && b.stock === undefined) return 1;
      return 0;
   });

   return (
      <section className="bg-black1 flex flex-col items-center">
         <ShopBanner />
         {/* Filtros y lista de productos dentro del Client Component */}
         <Filters products={sortedProducts} />
         <ProductList products={sortedProducts} />
      </section>
   );
}
