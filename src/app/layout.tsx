"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redireciona para a página de login
    }
  }, [router]);

  return (
    <html lang="pt-BR">
      <head>
        <title>Delícias da Cozinha</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}