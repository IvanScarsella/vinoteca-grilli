' use client'

import { createContext, useContext, useState, Dispatch, SetStateAction } from "react"

export const GlobalContext = createContext({
   showDeliveryModal: false,
   // setShowDeliveryModal:
   setShowDeliveryModal: {} as Dispatch<SetStateAction<boolean>>
})

export const GlobalContextProvider = ({ children }: any) => {

   const [showDeliveryModal, setShowDeliveryModal] = useState(false)

   return (
      <GlobalContext.Provider value={{
         showDeliveryModal,
         setShowDeliveryModal,
      }}>
         {children}
      </GlobalContext.Provider>
   )
}

export const useGlobalContext = () => useContext(GlobalContext)