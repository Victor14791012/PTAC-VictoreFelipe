"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import Footer from "./componentes/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const sessionCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("session_token="));
  
    if (!sessionCookie) {
      localStorage.clear(); 
      router.push("/login"); 
    }
  }, []);
  

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token"); 
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <title>Delicias da Cozinha</title>
        <meta name="description" content="O melhor restaurante do MS" />
      </head>
      <body className="w-full bg-gray-100">
        {children}
        <Footer />
      </body>
    </html>
  );
}
