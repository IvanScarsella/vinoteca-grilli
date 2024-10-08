'use client';

import { useGlobalContext } from "../../../context/store";
import { useRouter } from "next/navigation";

type ShowMoreButtonProps = {
   category: string;
};

export default function ShowMoreButton({ category }: ShowMoreButtonProps) {
   const router = useRouter();
   const { setSelectedCategory, setSelectedButton } = useGlobalContext();

   const handleClick = () => {
      setSelectedCategory(category);
      setSelectedButton('Tienda')
      router.push('/shop');
   };

   return (
      <p
         className="text-xl max-md:text-base min-w-[61px] max-md:max-w-12 max-md:min-w-[49px] max-md:w-full ml-4 max-md:ml-1.5 cursor-pointer"
         onClick={handleClick}
      >
         Más +
      </p>
   );
}
