"use client"

import { useGlobalContext } from "../../../context/store"


export default function AddToCartButton(product: any) {
   const { addToCart } = useGlobalContext()
   return (
      <button className="bg-[#B94B2D] rounded-lg text-2xl max-sm:text-[15px] sm:text-base text-white1 py-[7px] px-[px] max-sm:px-2.5 max-lg:w-full w-1/2 hover:scale-[1.1] disabled:cursor-not-allowed disabled:opacity-50" onClick={() => addToCart(product.product)} disabled={!product.stock}>Agregar al carrito</button>
   )
}