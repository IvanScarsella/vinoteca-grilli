import Image from "next/image";

import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { productsQuery } from "@/sanity/lib/queries";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import ShopBanner from "../components/ShopBanner";

export default async function Shop() {
   const products = await sanityFetch<SanityDocument[]>({ query: productsQuery });

   const sortedProducts = products.sort((a, b) => {
      if (a.stock === undefined && !b.stock) return -1;
      if (!a.stock && b.stock === undefined) return 1;
      return 0;
   });

   return (
      <section className="bg-white1 flex flex-col items-center">
         <ShopBanner />
         <Filters products={sortedProducts} />
         <ProductList products={sortedProducts} />
      </section>
   );
}
