' use client'

import { createContext, useContext, useState, Dispatch, SetStateAction } from "react"

export const GlobalContext = createContext({
   showDeliveryModal: false,
   setShowDeliveryModal: (boolean: boolean) => { },
   // setShowDeliveryModal: {} as Dispatch<SetStateAction<boolean>>,
   selectedButton: '',
   setSelectedButton: (string: any) => { }
   // setSelectedButton: {} as Dispatch<SetStateAction<string>>
})

export const GlobalContextProvider = ({ children }: any) => {

   const [showDeliveryModal, setShowDeliveryModal] = useState(false)
   const [selectedButton, setSelectedButton] = useState('Inicio')
   console.log(showDeliveryModal)
   console.log(selectedButton)
   return (
      <GlobalContext.Provider value={{
         showDeliveryModal,
         setShowDeliveryModal: setShowDeliveryModal,
         selectedButton,
         setSelectedButton: setSelectedButton
      }}>
         {children}
      </GlobalContext.Provider>
   )
}

export const useGlobalContext = () => useContext(GlobalContext)