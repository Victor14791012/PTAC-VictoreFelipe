import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
      <body className=" w-full ">
        {children}
      </body>
    </html>
  );
}