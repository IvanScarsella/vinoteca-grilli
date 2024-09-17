'use client';

import { useGlobalContext } from "../../../context/store";
import { useRouter } from "next/navigation";

type ShowMoreButtonProps = {
   category: string;
};

export default function ShowMoreButton({ category }: ShowMoreButtonProps) {
   const router = useRouter();
   const { setSelectedCategory } = useGlobalContext(); // Solo necesitas este hook aquí

   const handleClick = () => {
      setSelectedCategory(category); // Actualiza la categoría seleccionada
      router.push('/shop'); // Navega a la página de shop
   };

   return (
      <p
         className="text-xl max-md:text-base min-w-[61px] max-md:max-w-12 max-md:min-w-[49px] max-md:w-full ml-[33px] max-md:ml-1.5 cursor-pointer"
         onClick={handleClick}
      >
         Más +
      </p>
   );
}
