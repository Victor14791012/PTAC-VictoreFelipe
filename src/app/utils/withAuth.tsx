"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Faça login ou se cadastre.");
        router.push("/login"); 
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
