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
   price: string,
   image: StaticImageData
}

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
   const [showDeliveryModal, setShowDeliveryModal] = useState(false);
   const [showInstructionsModal, setShowInstructionsModal] = useState(false);
   const [selectedButton, setSelectedButton] = useState('Inicio');

   const products = [
      { name: 'Nombre del producto', price: '100.00', image: product1 },
      { name: 'Nombre del producto', price: '100.00', image: product2 },
      { name: 'Nombre del producto', price: '100.00', image: product3 },
      { name: 'Nombre del producto', price: '100.00', image: product4 },
      { name: 'Nombre del producto', price: '100.00', image: product1 },
      { name: 'Nombre del producto', price: '100.00', image: product2 },
      { name: 'Nombre del producto', price: '100.00', image: product3 },
      { name: 'Nombre del producto', price: '100.00', image: product4 },
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
