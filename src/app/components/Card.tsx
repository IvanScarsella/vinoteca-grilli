import Image from "next/image";

export default function Card(data: any) {

   console.log(data.data)
   const productData = data.data;
   return (
      <div className="h-[500px] w-[323px] rounded-[10px]">
         <Image src={productData?.image} alt={productData?.name} className="size-full relative top-0 rounded-[10px]" />
         <div className="text-white1 relative bottom-[182px] left-0 h-[182px] w-full bg-[#302F2F80] py-[18px] px-2">
            <p className="text-2xl">{productData?.name}</p>
            <p className="text-[32px] font-medium">$ {productData?.price}</p>
            <button className="border border-white1 rounded-lg p-2.5 float-right text-xl">Agregar al carrito</button>
         </div>
      </div>
   )
}