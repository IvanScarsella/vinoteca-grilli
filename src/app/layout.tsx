import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper"; // Importar el componente del cliente

const inter = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Vinoteca Grilli",
  description: "Vinoteca online en donde encontrarás las mejores bebidas de la ciudad: vinos, cervezas, aperitivos y mucho más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-black1 flex flex-col items-center bg-white1 w-screen`}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
