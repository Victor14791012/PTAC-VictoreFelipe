"use client";
import React, { useEffect, useState } from "react";
import Header from "../componentes/Header";
import Link from "next/link";
import Usuario from "../interfaces/usuario";
import Autenticar from "../utils/withAuth"

const PaginaPerfil = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const token = localStorage.getItem("token"); // Pegando o token
        const response = await fetch("http://localhost:8000/perfil/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // enviando token no header
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsuario(data);
        } else {
          console.error("Erro ao buscar perfil:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      }
    };

    fetchPerfil();
  }, []);

  return (
    <>
      <Header />
      <div className="w-[90%] md:w-1/2 mx-auto p-8 rounded-lg mt-8 min-h-[55vh] flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Perfil do Usuário</h1>
          {usuario ? (
            <div className="space-y-6">
              <div className="text-start gap-5">
                <h2 className="text-xl font-semibold text-gray-700 ">Informações do Perfil</h2>
                <p className="text-gray-600">
                  Nome: <span className="font-medium text-blue-600">{usuario.nome}</span>
                </p>
                <p className="text-gray-600">
                  Email: <span className="font-medium text-blue-600">{usuario.email}</span>
                </p>
                <p className="text-gray-600">
                  Tipo: <span className="font-medium text-blue-600">{usuario.tipo}</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <button className="w-full px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                  Editar Perfil
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-600">Erro ao carregar as informações do perfil...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Autenticar(PaginaPerfil);
