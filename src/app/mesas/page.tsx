"use client";

import React, { useEffect, useState } from "react";
import Header from "../componentes/Header";
import Mesa from "../interfaces/Mesa";
import Autenticar from "../utils/withAuth";
import AutenticarAdm from "../utils/withAdminAuth";

const PaginaMesa = () => {
  const [mesas, setMesas] = useState<Mesa[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [mesaEditando, setMesaEditando] = useState<Mesa | null>(null);
  const [codigo, setCodigo] = useState<string>("");
  const [nLugares, setNLugares] = useState<number>(0);

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
  const abrirModal = (mesa: Mesa) => {
    setMesaEditando(mesa);
    setCodigo(mesa.codigo);
    setNLugares(mesa.n_lugares);
    setModalOpen(true);
  };

  // Função para atualizar a mesa
  const atualizarMesa = async () => {
    if (mesaEditando) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/mesa/atualizar", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id: mesaEditando.id,
            codigo: codigo,
            n_lugares: nLugares,
          }),
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          alert(jsonResponse.mensagem);
          setModalOpen(false); // Fechar o modal após a atualização
          // Atualizar a lista de mesas
          setMesas(mesas.map((mesa) =>
            mesa.id === mesaEditando.id ? { ...mesa, codigo, n_lugares: nLugares } : mesa
          ));
        } else {
          console.error("Erro ao atualizar mesa:", await response.text());
        }
      } catch (error) {
        console.error("Erro ao atualizar mesa:", error);
      }
    }
  };

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
                  <button
                    className="p-3 h-14 py-1 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
                    onClick={() => abrirModal(mesa)}
                  >
                    Editar Mesa
                  </button>
                </div>
              </div>
            ))}
          </div>

          {mesas.length === 0 && (
            <p className="text-center text-gray-500">Nenhuma mesa disponível no momento.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && mesaEditando && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Editar Mesa {mesaEditando.id}</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Código</label>
              <input
                type="text"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Número de Lugares</label>
              <input
                type="number"
                value={nLugares}
                onChange={(e) => setNLugares(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={atualizarMesa}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Atualizar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Autenticar(PaginaMesa);
