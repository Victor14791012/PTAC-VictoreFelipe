"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import HtmlReserva from "../interfaces/Reserva";

const PaginaReserva = () => {
  const reserva = {
    id: 1,
    usuario_id: 1,
    mesa_id: 1,
    data: new Date(),
    n_pessoas: 1,
    status: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Detalhes da Reserva</h1>
        <div className="space-y-4">
          <div className="text-gray-600">
            <p><span className="font-medium text-blue-600">ID da Reserva:</span> {reserva.id}</p>
            <p><span className="font-medium text-blue-600">Mesa:</span> {reserva.mesa_id}</p>
            <p><span className="font-medium text-blue-600">Data:</span> {reserva.data.toLocaleString()}</p>
            <p><span className="font-medium text-blue-600">Número de Pessoas:</span> {reserva.n_pessoas}</p>
            <p><span className="font-medium text-blue-600">Status:</span> {reserva.status ? "Confirmada" : "Cancelada"}</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <HtmlReserva inf={reserva} />
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="w-1/2 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Confirmar Reserva
          </button>
          <button className="w-1/2 px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
            Cancelar Reserva
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginaReserva;
