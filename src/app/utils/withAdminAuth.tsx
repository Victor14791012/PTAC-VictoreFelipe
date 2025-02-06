"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const withAdminAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("token");
      const tipo = localStorage.getItem("tipo");

      if (!token) {
        alert("Faça login para acessar essa página.");
        router.push("/login");
        return;
      }

      try {
        
        // Verifica se o tipo é 'adm'
        if (tipo !== "adm") {
          alert("Acesso restrito para administradores.");
          router.push("/"); // Redireciona para a home se não for adm
          return;
        }

    

        setLoading(false); 
      } catch (error) {
        console.error("Token inválido:", error);
        router.push("/login");
      }
    }, [router]);

    if (loading) {
      return <p>Carregando...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAuth;
