import Image from "next/image";
import wineImage from "../../../public/winesImage.png"
import beersImage from "../../../public/beersImage.png"
import filter from "../../../public/filter.png"

export default function Shop() {

   const filters = [
      { name: 'Ordenar por' },
      { name: 'Marca' },
      { name: 'Varietal' },
      { name: 'Tipo de vino' },
   ]

   return (
      <section className="bg-black1 w-screen flex flex-col items-center">
         <div className="w-screen max-w-[1440px] h-[475px] ">
            <Image
               src={wineImage}
               alt="shop-image"
               className="w-full h-full object-cover"
               width={1440}
               height={475}
            />
         </div>
         <div className="bg-gradient-to-r from-yellow1 to-[#886146] w-full h-[60px] py-1.5 flex items-center px-[49px]">
            <Image src={filter} alt="filter-icon" className="size-[54px]" />
            <p className="text-2xl text-white1 ml-3">Filtrar por</p>
            <div className="flex gap-10 relative mx-auto ">
               {filters.map((filter) => (

                  <select className="w-[170px] h-10 rounded-[10px] px-2.5 py-2 ">
                     <option value="">
                        {filter.name}
                     </option>
                  </select>
               ))}
            </div>
         </div>
      </section>
   )
}