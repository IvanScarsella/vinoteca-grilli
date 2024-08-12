import Image from "next/image";

export default function Card(data: any) {

   const productData = data.data;

   return (
      <div className="h-[500px] w-[323px] max-[1439px]:w-72 max-[1439px]:h-[450px] max-xl:w-56 max-lg:w-40 max-lg:max-w-40 max-xl:h-96 max-lg:h-[280px] rounded-[10px] flex-shrink-0 overflow-hidden">
         <Image src={productData?.image} alt={productData?.name} className="size-full relative top-0 rounded-[10px]" />
         <div className="text-white1 relative bottom-[182px] max-md:bottom-[125px] left-0 h-[182px] w-full bg-[#302F2F80] py-[18px] max-md:py-2.5 px-2 max-md:px-1 flex flex-col gap-2.5 md:gap-1  xl:gap-2.5">
            <p className="text-2xl max-xl:text-xl max-lg:text-base max-md:text-sm">{productData?.name}</p>
            <p className="text-[32px] max-xl:text-3xl max-lg:text-2xl max-md:text-xl font-medium ">$ {productData?.price}</p>
            <button className="border border-white1 rounded-lg p-2.5 float-right text-xl max-lg:text-base max-md:text-sm  hover:scale-[1.1] transition-all">Agregar al carrito</button>
         </div>
      </div>
   )
}