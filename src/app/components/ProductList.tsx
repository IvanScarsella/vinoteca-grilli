"use client";

import { useGlobalContext } from "../../../context/store";
import Card from "../components/Card";
import { useState, useEffect } from "react";
import { SanityDocument } from "next-sanity";

type ProductListProps = {
   products: SanityDocument[];
};

export default function ProductList({ products }: ProductListProps) {
   const {
      selectedCategory,
      setSelectedCategory,
      selectedSubCategory,
      setSelectedSubCategory,
      selectedRegion,
      setSelectedRegion,
      selectedVarietal,
      setSelectedVarietal,
      orderBy,
      setOrderBy
   } = useGlobalContext(); // Acceder a los filtros desde el contexto global

   const [filteredProducts, setFilteredProducts] = useState(products);

   useEffect(() => {
      // Filtrar los productos según los filtros seleccionados
      let updatedProducts = products.filter((product) => {
         if (selectedCategory && product.category !== selectedCategory) return false;
         if (selectedSubCategory && product.subCategory !== selectedSubCategory) return false;
         if (selectedRegion && !product.region) return false
         if (selectedRegion && !product.region.includes(selectedRegion)) return false;
         if (selectedVarietal && !product.varietal.toLocaleString().includes(selectedVarietal)) return false;
         return true;
      });

      // Ordenar los productos según la opción seleccionada
      if (orderBy === "A-Z") {
         updatedProducts = updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (orderBy === "Z-A") {
         updatedProducts = updatedProducts.sort((a, b) => b.name.localeCompare(a.name));
      } else if (orderBy === "Menor Precio") {
         updatedProducts = updatedProducts.sort((a, b) => a.price - b.price);
      } else if (orderBy === "Mayor Precio") {
         updatedProducts = updatedProducts.sort((a, b) => b.price - a.price);
      }

      setFilteredProducts(updatedProducts);
   }, [products, selectedCategory, selectedSubCategory, selectedRegion, selectedVarietal, orderBy]);

   return (
      <div className="bg-white1 pt-20 max-xl:pt-4 flex flex-row gap-4 max-md:gap-2 justify-center w-full max-[720px]:w-screen max-[720px]:-mx-4 max-w-full min-[1660px]:px-36 max-xl:px-20 max-[850px]:px-1 self-center flex-wrap pb-[78px]">
         {filteredProducts.map((product, index) => (
            <Card data={product} key={index} />
         ))}
         {!filteredProducts.length ? <div className="flex flex-col justify-center gap-2 px-2">
            <p className="text-justify">No hay productos que coincidan con los criterios de búsqueda, pruebe modificando los filtros.</p>
            <button className="text-white1 text-xl bg-red-500 w-36 p-1 mx-auto rounded-xl hover:scale-110"
               onClick={() => { setSelectedCategory(''); setSelectedSubCategory(''); setSelectedVarietal(''); setSelectedRegion('') }}>Borrar Filtros</button>
         </div> : null}
      </div>
   );
}
