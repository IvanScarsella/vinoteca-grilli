import Image from "next/image";
import wineImage from "../../../public/winesImage.png";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { productsQuery } from "@/sanity/lib/queries";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList"; // Nuevo componente de cliente para manejar la lógica interactiva

export default async function Shop() {
   const products = await sanityFetch<SanityDocument[]>({ query: productsQuery });

   return (
      <section className="bg-black1 flex flex-col items-center">
         <div className="flex flex-col items-center justify-center w-full h-full max-h-[470px]">
            <Image
               src={wineImage}
               alt="shop-image"
               className="w-full h-full object-cover"
               width={1440}
               height={475}
            />
         </div>
         {/* Filtros y lista de productos dentro del Client Component */}
         <Filters products={products} />
         <ProductList products={products} />
      </section>
   );
}
