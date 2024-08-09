import Image from "next/image";
import ImagesCarousel from "./components/ImagesCarousel";
import product1 from "../../public/product1.png"
import product2 from "../../public/product2.png"
import product3 from "../../public/product3.png"
import product4 from "../../public/product4.png"
import Card from "./components/Card";
import wineIcon from "../../public/wineIcon.png"
import beerIcon from "../../public/beerIcon.png"

export default function Home() {


  const products = [
    { name: 'Nombre del producto', price: '100.00', image: product1 },
    { name: 'Nombre del producto', price: '100.00', image: product2 },
    { name: 'Nombre del producto', price: '100.00', image: product3 },
    { name: 'Nombre del producto', price: '100.00', image: product4 },
  ]

  const sections = [
    { sectionName: 'Nuestros productos', sectionImage: undefined, products: products, },
    { sectionName: 'Vinos', sectionImage: wineIcon, products: products, },
    { sectionName: 'Cervezas', sectionImage: beerIcon, products: products, },
  ]

  return (
    <section className="bg-white1 pb-20">
      <ImagesCarousel />
      {sections.map((section) => (

        <div className="flex flex-col mb-3">
          <div className="flex flex-row items-center my-[26px] px-[50px] max-md:px-4">
            {section.sectionImage ? <Image src={section.sectionImage} alt={section.sectionName} className="size-[30px] mr-4 max-md:hidden" /> : null}
            <p className="text-4xl max-md:text-xl text-nowrap font-normal tracking-tight mr-[33px] max-md:mr-1.5">{section.sectionName}</p>
            <div className="w-full h-px bg-black1" />
            <p className="text-xl max-md:text-base min-w-[61px] max-md:max-w-12 max-md:min-w-[49px] max-md:w-full ml-[33px] max-md:ml-1.5">Más +</p>
          </div>
          <div className="flex flex-row gap-4 max-md:gap-2 justify-center max-[720px]:justify-start w-full max-[720px]:w-screen max-[720px]:-mx-4  max-w-full overflow-x-auto scroll-smooth overflow-clip px-4 self-center">
            {section.products.map((product) => (
              <Card data={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
