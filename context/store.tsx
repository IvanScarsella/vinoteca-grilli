'use client'

import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

type GlobalContextType = {
   showDeliveryModal: boolean;
   setShowDeliveryModal: Dispatch<SetStateAction<boolean>>;
   selectedButton: string;
   setSelectedButton: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContextType>({
   showDeliveryModal: false,
   setShowDeliveryModal: () => { },
   selectedButton: '',
   setSelectedButton: () => { }
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
   const [showDeliveryModal, setShowDeliveryModal] = useState(false);
   const [selectedButton, setSelectedButton] = useState('Inicio');

   return (
      <GlobalContext.Provider value={{
         showDeliveryModal,
         setShowDeliveryModal,
         selectedButton,
         setSelectedButton
      }}>
         {children}
      </GlobalContext.Provider>
   );
};

export const useGlobalContext = () => useContext(GlobalContext);
