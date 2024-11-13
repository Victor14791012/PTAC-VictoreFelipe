"use client";
import React from "react";
import MesaHtml from "../interfaces/Mesa";

const PaginaMesa = () => {
  const mesa = {
    id: 1,
    codigo: "um",
    n_lugares: 18,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Detalhes da Mesa</h1>
        <div className="space-y-4">
          <div className="text-gray-600">
            <p><span className="font-medium text-blue-600">Código da Mesa:</span> {mesa.codigo}</p>
            <p><span className="font-medium text-blue-600">Número de Lugares:</span> {mesa.n_lugares}</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <MesaHtml inf={mesa} />
        </div>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="w-1/2 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Reservar Mesa
          </button>
          <button className="w-1/2 px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
            Ver Reservas
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginaMesa;
