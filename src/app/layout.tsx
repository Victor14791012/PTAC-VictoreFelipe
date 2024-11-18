import type { Metadata } from "next";
import "./globals.css";
import Footer from "./componentes/Footer";

export const metadata: Metadata = {
  title: "Delicias da Cozinha",
  description: "O melhor restaurante do ms ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head> 
      <link rel="icon" href="/logo.png" type="image/png" /> 
      </head>
      <body className=" w-full bg-gray-100">
        {children}

<Footer />
      </body>
    </html>
  );
}