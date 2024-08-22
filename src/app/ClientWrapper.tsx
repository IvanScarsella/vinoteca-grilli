"use client";

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { GlobalContextProvider } from "../../context/store";
import Instructions from "./components/Instructions";
import Delivery from "./components/Delivery";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
   const [isStudio, setIsStudio] = useState(false);

   useEffect(() => {
      if (typeof window !== "undefined") {
         setIsStudio(window.location.pathname.startsWith("/studio"));
      }
   }, []);

   return (
      <GlobalContextProvider>
         {!isStudio && <Navbar />}
         <div className={isStudio ? "w-full" : ""}>{children}</div>
         {!isStudio && <Cart />}
         {!isStudio && <Footer />}
         <Delivery />
         <Instructions />
      </GlobalContextProvider>
   );
}
