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

   const [searchText, setSearchText] = useState(''); // Estado para el texto de búsqueda

   useEffect(() => {
      // Filtrar los productos según los filtros seleccionados y el texto de búsqueda
      let updatedProducts = products.filter((product) => {
         if (selectedCategory && product.category !== selectedCategory) return false;
         if (selectedSubCategory && product.subCategory !== selectedSubCategory) return false;
         if (selectedRegion && !product.region) return false;
         if (selectedRegion && !product.region.includes(selectedRegion)) return false;
         if (selectedVarietal && !product.varietal.toLocaleString().includes(selectedVarietal)) return false;
         if (searchText && !product.name.toLowerCase().includes(searchText.toLowerCase())) return false; // Filtrar por nombre
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
      setCurrentPage(1); // Reiniciar a la primera página al aplicar filtros o búsqueda
   }, [products, selectedCategory, selectedSubCategory, selectedRegion, selectedVarietal, orderBy, searchText]); // Añadir searchText a la dependencia

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
      <div className="bg-white1 py-4 max-xl:pt-4 flex flex-col items-center w-full">
         <div className="relative mb-4 w-1/2 max-sm:w-full flex justify-center">
            <input
               type="text"
               placeholder="Buscar..."
               value={searchText}
               onChange={(e) => setSearchText(e.target.value)}
               className="p-2 w-1/2 max-md:w-2/3 max-w-md border rounded-md pr-10" // Agregar padding-right para la cruz
            />

            {/* Botón para borrar el input */}
            {searchText && (
               <button
                  onClick={() => setSearchText('')} // Al hacer clic, borra el texto
                  className="absolute right-40 max-2xl:right-36 max-xl:right-32 max-[1150px]:right-28 max-lg:right-24 max-[900px]:right-20 max-md:right-10 max-sm:right-16 max-[470px]:right-9 top-0 mt-2 text-gray-500 hover:text-gray-700"
               >
                  &#10005; {/* Este es el símbolo "X" */}
               </button>
            )}
         </div>

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
                     setSearchText('')
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
