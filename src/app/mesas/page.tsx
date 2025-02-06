"use client";

import React, { useEffect, useState } from "react";
import Header from "../componentes/Header";
import Mesa from "../interfaces/Mesa";
import Autenticar from "../utils/withAuth";
import AutenticarAdm from "../utils/withAdminAuth";

const PaginaMesa = () => {
  const [mesas, setMesas] = useState<Mesa[]>([]);

  // Buscar as mesas
  useEffect(() => {
    const fetchMesas = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/mesa/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          setMesas(jsonResponse.mesas);
        } else {
          console.error("Erro ao buscar mesas:", await response.text());
        }
      } catch (error) {
        console.error("Erro ao buscar mesas:", error);
      }
    };

    fetchMesas();
  }, []);

  // Função para abrir o modal e preencher os dados da mesa


  return (
    <>
      <Header />
      <div className="mt-8 bg-gradient-to-r w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <img src="/mapa.png" alt="mapa" className="w-full lg:w-1/2" />
        </div>
        <div className="p-8 rounded-lg max-w-6xl w-full">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
            Mesas Cadastradas
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {mesas.map((mesa) => (
              <div
                key={mesa.id}
                className="p-6 rounded-lg shadow-xl bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Mesa {mesa.id}
                  </h2>
                  <div className="text-gray-600 space-y-2 mb-4">
                    <p>
                      <span className="font-medium text-blue-600">Código da Mesa:</span> {mesa.codigo}
                    </p>
                    <p>
                      <span className="font-medium text-blue-600">Número de Lugares:</span> {mesa.n_lugares}
                    </p>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>

          {mesas.length === 0 && (
            <p className="text-center text-gray-500">Nenhuma mesa disponível no momento.</p>
          )}
        </div>
      </div>

    
    </>
  );
};

export default Autenticar(PaginaMesa);
