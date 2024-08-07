import Image from "next/image";
import ImagesCarousel from "./components/ImagesCarousel";
import product1 from "../../public/product1.png"
import product2 from "../../public/product2.png"
import product3 from "../../public/product3.png"
import product4 from "../../public/product4.png"
import Card from "./components/Card";

export default function Home() {

  const products = [
    { name: 'Nombre del producto', price: '100.00', image: product1 },
    { name: 'Nombre del producto', price: '100.00', image: product2 },
    { name: 'Nombre del producto', price: '100.00', image: product3 },
    { name: 'Nombre del producto', price: '100.00', image: product4 },
  ]
  return (
    <section className="bg-white1">
      <ImagesCarousel />
      <div className="flex flex-col px-[50px] max-md:px-4">
        <div className="flex flex-row items-center my-[26px]">
          <p className="text-4xl max-md:text-xl min-w-[353px] max-md:min-w-[187px] max-md:w- tracking-tight mr-[33px] max-md:mr-1.5">Nuestros productos</p>
          <div className="w-full h-px bg-black1" />
          <p className="text-xl max-md:text-base min-w-[61px] max-md:max-w-12 max-md:min-w-[49px] max-md:w-full ml-[33px] max-md:ml-1.5">Más +</p>
        </div>
        <div className="flex flex-row gap-4">
          {products.map((product) => (
            <Card data={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
