'use client'

import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode, useEffect } from "react";
import product1 from "../public/product1.png"
import product2 from "../public/product2.png"
import product3 from "../public/product3.png"
import product4 from "../public/product4.png"
import { StaticImageData } from "next/image";

type GlobalContextType = {
   showInstructionsModal: boolean;
   setShowInstructionsModal: Dispatch<SetStateAction<boolean>>;
   showCart: boolean;
   setShowCart: Dispatch<SetStateAction<boolean>>;
   showDeliveryModal: boolean;
   setShowDeliveryModal: Dispatch<SetStateAction<boolean>>;
   selectedButton: string;
   setSelectedButton: Dispatch<SetStateAction<string>>;
   cart: Product[];
   addToCart: (product: Product) => void;
   removeFromCart: (id: string) => void;
   clearCart: () => void;

   selectedCategory: string;
   setSelectedCategory: Dispatch<SetStateAction<string>>;
   selectedSubCategory: string;
   setSelectedSubCategory: Dispatch<SetStateAction<string>>;
   selectedRegion: string;
   setSelectedRegion: Dispatch<SetStateAction<string>>;
   selectedVarietal: string;
   setSelectedVarietal: Dispatch<SetStateAction<string>>;
   orderBy: string;
   setOrderBy: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContextType>({
   showInstructionsModal: false,
   setShowInstructionsModal: () => { },
   showCart: false,
   setShowCart: () => { },
   showDeliveryModal: false,
   setShowDeliveryModal: () => { },
   selectedButton: '',
   setSelectedButton: () => { },
   cart: [],
   addToCart: () => { },
   removeFromCart: () => { },
   clearCart: () => { },

   selectedCategory: '',
   setSelectedCategory: () => { },
   selectedSubCategory: '',
   setSelectedSubCategory: () => { },
   selectedRegion: '',
   setSelectedRegion: () => { },
   selectedVarietal: '',
   setSelectedVarietal: () => { },
   orderBy: '',
   setOrderBy: () => { },
});

export type Product = {
   name: string,
   price: number,
   image: StaticImageData,
   description: string,
   stock: number,
   id: number,
   slug: Slug
}

export type Slug = {
   current: string;
   _type: string
};

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
   const [showCart, setShowCart] = useState(false);
   const [showDeliveryModal, setShowDeliveryModal] = useState(false);
   const [showInstructionsModal, setShowInstructionsModal] = useState(false);
   const [selectedButton, setSelectedButton] = useState('Inicio');
   const [cart, setCart] = useState<Product[]>(() => {
      // Inicializar el carrito con el valor del localStorage si existe
      const storedCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
      return storedCart ? JSON.parse(storedCart) : [];
   });

   const [selectedCategory, setSelectedCategory] = useState('');
   const [selectedSubCategory, setSelectedSubCategory] = useState('');
   const [selectedRegion, setSelectedRegion] = useState('');
   const [selectedVarietal, setSelectedVarietal] = useState('');
   const [orderBy, setOrderBy] = useState('');

   const addToCart = (product: Product) => {
      setCart(prevCart => {
         const newCart = [...prevCart, product];
         localStorage.setItem('cart', JSON.stringify(newCart));
         return newCart;
      });
   };

   const removeFromCart = (slug: string) => {
      setCart(prevCart => {
         const newCart = prevCart.filter(product => product.slug.current !== slug);
         localStorage.setItem('cart', JSON.stringify(newCart));
         return newCart;
      });
      // localStorage.clear();
   };

   const clearCart = () => {
      setCart([]);
      localStorage.removeItem('cart');
   };

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
   }, [cart]);

   useEffect(() => {
      setSelectedSubCategory('')
   }, [selectedCategory])

   return (
      <GlobalContext.Provider value={{
         showInstructionsModal,
         setShowInstructionsModal,
         showCart,
         setShowCart,
         showDeliveryModal,
         setShowDeliveryModal,
         selectedButton,
         setSelectedButton,
         cart,
         addToCart,
         removeFromCart,
         clearCart,

         selectedCategory,
         setSelectedCategory,
         selectedSubCategory,
         setSelectedSubCategory,
         selectedRegion,
         setSelectedRegion,
         selectedVarietal,
         setSelectedVarietal,
         orderBy,
         setOrderBy,
      }}>
         {children}
      </GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext);
