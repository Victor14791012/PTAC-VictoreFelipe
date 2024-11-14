"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import HtmlReserva from "../interfaces/Reserva";
import Header from "../componentes/Header"; // Importando o Header para manter o padrão

// Dados simulados de várias reservas do usuário
const reservas = [
  {
    id: 1,
    usuario_id: 1,
    mesa_id: 1,
    data: new Date(),
    n_pessoas: 2,
    status: true,
  },
  {
    id: 2,
    usuario_id: 1,
    mesa_id: 2,
    data: new Date(),
    n_pessoas: 4,
    status: false,
  },
  {
    id: 3,
    usuario_id: 1,
    mesa_id: 3,
    data: new Date(),
    n_pessoas: 6,
    status: true,
  },
  {
    id: 4,
    usuario_id: 1,
    mesa_id: 3,
    data: new Date(),
    n_pessoas: 6,
    status: true,
  },
];

const PaginaReserva = () => {
  return (
    <>
      <Header username="Victor Carvalho" />
      <div className="mt-8 bg-gradient-to-r w-full flex items-center justify-center">
        <div className="p-8 rounded-lg max-w-6xl w-full">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Minhas Reservas</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {reservas.map((reserva) => (
              <div
                key={reserva.id}
                className="p-6 rounded-lg shadow-xl bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reserva {reserva.id}</h2>
                  <div className="text-gray-600 space-y-2 mb-4">
                    <p><span className="font-medium text-blue-600">Mesa:</span> {reserva.mesa_id}</p>
                    <p><span className="font-medium text-blue-600">Data:</span> {reserva.data.toLocaleDateString()} às {reserva.data.toLocaleTimeString()}</p>
                    <p><span className="font-medium text-blue-600">Número de Pessoas:</span> {reserva.n_pessoas}</p>
                    <p>
                      <span className="font-medium text-blue-600">Status:</span> 
                      <span className={reserva.status ? "text-green-600" : "text-red-600"}>
                        {reserva.status ? "Confirmada" : "Cancelada"}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 mt-6">
                    <button className="px-3 py-1 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                      Confirmar Reserva
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white font-medium rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
                      Cancelar Reserva
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginaReserva;
