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
   const [currentPage, setCurrentPage] = useState(1); // Página actual
   const productsPerPage = 15; // Productos por página

   // Calcular los productos de la página actual
   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

   useEffect(() => {
      // Filtrar los productos según los filtros seleccionados
      let updatedProducts = products.filter((product) => {
         if (selectedCategory && product.category !== selectedCategory) return false;
         if (selectedSubCategory && product.subCategory !== selectedSubCategory) return false;
         if (selectedRegion && !product.region) return false;
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
      setCurrentPage(1); // Reiniciar a la primera página al aplicar filtros
   }, [products, selectedCategory, selectedSubCategory, selectedRegion, selectedVarietal, orderBy]);

   const handleNextPage = () => {
      if (currentPage < totalPages) {
         setCurrentPage(currentPage + 1);
      }
   };

   const handlePreviousPage = () => {
      if (currentPage > 1) {
         setCurrentPage(currentPage - 1);
      }
   };

   return (
      <div className="bg-white1 pt-20 max-xl:pt-4 flex flex-col items-center w-full  pb-4">
         <div className="flex flex-row gap-4 flex-wrap justify-center">
            {currentProducts.map((product, index) => (
               <Card data={product} key={index} />
            ))}
         </div>
         {!filteredProducts.length && (
            <div className="flex flex-col justify-center gap-2 px-2">
               <p className="text-justify">
                  No hay productos que coincidan con los criterios de búsqueda, pruebe modificando los filtros.
               </p>
               <button
                  className="text-white1 text-xl bg-red-500 w-36 p-1 mx-auto rounded-xl hover:scale-110"
                  onClick={() => {
                     setSelectedCategory('');
                     setSelectedSubCategory('');
                     setSelectedVarietal('');
                     setSelectedRegion('');
                  }}
               >
                  Borrar Filtros
               </button>
            </div>
         )}

         {/* Paginación */}
         {filteredProducts.length > productsPerPage && (
            <div className="flex justify-center items-center gap-4 mt-8 px-2">
               <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 text-sm sm:text-base"
               >
                  Anterior
               </button>
               <span className="text-xs sm:text-sm">
                  Página {currentPage} de {totalPages}
               </span>
               <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50 text-sm sm:text-base"
               >
                  Siguiente
               </button>
            </div>
         )}
      </div>
   );
}
