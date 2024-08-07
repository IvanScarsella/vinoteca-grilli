'use client'

import { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from "react";

type GlobalContextType = {
   showInstructionsModal: boolean;
   setShowInstructionsModal: Dispatch<SetStateAction<boolean>>;
   showDeliveryModal: boolean;
   setShowDeliveryModal: Dispatch<SetStateAction<boolean>>;
   selectedButton: string;
   setSelectedButton: Dispatch<SetStateAction<string>>;
};

export const GlobalContext = createContext<GlobalContextType>({
   showInstructionsModal: false,
   setShowInstructionsModal: () => { },
   showDeliveryModal: false,
   setShowDeliveryModal: () => { },
   selectedButton: '',
   setSelectedButton: () => { }
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
   const [showDeliveryModal, setShowDeliveryModal] = useState(false);
   const [showInstructionsModal, setShowInstructionsModal] = useState(false);
   const [selectedButton, setSelectedButton] = useState('Inicio');

   return (
      <GlobalContext.Provider value={{
         showInstructionsModal,
         setShowInstructionsModal,
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
