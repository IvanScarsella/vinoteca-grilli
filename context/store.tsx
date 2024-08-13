'use client'

import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from "react";
import product1 from "../public/product1.png"
import product2 from "../public/product2.png"
import product3 from "../public/product3.png"
import product4 from "../public/product4.png"
import { StaticImageData } from "next/image";

type GlobalContextType = {
   showInstructionsModal: boolean;
   setShowInstructionsModal: Dispatch<SetStateAction<boolean>>;
   showDeliveryModal: boolean;
   setShowDeliveryModal: Dispatch<SetStateAction<boolean>>;
   selectedButton: string;
   setSelectedButton: Dispatch<SetStateAction<string>>;
   products: Product[]
};

export const GlobalContext = createContext<GlobalContextType>({
   showInstructionsModal: false,
   setShowInstructionsModal: () => { },
   showDeliveryModal: false,
   setShowDeliveryModal: () => { },
   selectedButton: '',
   setSelectedButton: () => { },
   products: [] as Product[]
});

export type Product = {
   name: string,
   price: number,
   image: StaticImageData,
   description: string,
   stock: number,
   id: number
}

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
   const [showDeliveryModal, setShowDeliveryModal] = useState(false);
   const [showInstructionsModal, setShowInstructionsModal] = useState(false);
   const [selectedButton, setSelectedButton] = useState('Inicio');

   const products = [
      { name: 'Nombre del producto', price: 10000, image: product1, description: 'Lorem ipsum dolor sit amet consectetur. Lorem morbi dui lobortis vitae varius convallis id lobortis. Adipiscing eget tempor mauris ut morbi enim magna.', stock: 1, id: 1 },
      { name: 'Nombre del producto', price: 10000, image: product2, description: 'Lorem ipsum dolor sit amet consectetur. Lorem morbi dui lobortis vitae varius convallis id lobortis. Adipiscing eget tempor mauris ut morbi enim magna.', stock: 2, id: 2 },
      { name: 'Nombre del producto', price: 10000, image: product3, description: 'Lorem ipsum dolor sit amet consectetur. Lorem morbi dui lobortis vitae varius convallis id lobortis. Adipiscing eget tempor mauris ut morbi enim magna.', stock: 0, id: 3 },
      { name: 'Nombre del producto', price: 10000, image: product4, description: 'Lorem ipsum dolor sit amet consectetur. Lorem morbi dui lobortis vitae varius convallis id lobortis. Adipiscing eget tempor mauris ut morbi enim magna.', stock: 2, id: 4 },
      { name: 'Nombre del producto', price: 10000, image: product1, description: 'Lorem ipsum dolor sit amet consectetur. Lorem morbi dui lobortis vitae varius convallis id lobortis. Adipiscing eget tempor mauris ut morbi enim magna.', stock: 0, id: 5 },
      { name: 'Nombre del producto', price: 10000, image: product2, description: 'Lorem ipsum dolor sit amet consectetur. Lorem morbi dui lobortis vitae varius convallis id lobortis. Adipiscing eget tempor mauris ut morbi enim magna.', stock: 2, id: 6 },
      { name: 'Nombre del producto', price: 10000, image: product3, description: 'Lorem ipsum dolor sit amet consectetur. Lorem morbi dui lobortis vitae varius convallis id lobortis. Adipiscing eget tempor mauris ut morbi enim magna.', stock: 0, id: 7 },
      { name: 'Nombre del producto', price: 10000, image: product4, description: 'Lorem ipsum dolor sit amet consectetur. Lorem morbi dui lobortis vitae varius convallis id lobortis. Adipiscing eget tempor mauris ut morbi enim magna.', stock: 1, id: 8 },
   ]

   return (
      <GlobalContext.Provider value={{
         showInstructionsModal,
         setShowInstructionsModal,
         showDeliveryModal,
         setShowDeliveryModal,
         selectedButton,
         setSelectedButton,
         products
      }}>
         {children}
      </GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext);
