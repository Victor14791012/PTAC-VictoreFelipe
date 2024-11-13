"use client";
import React from "react";
import PerfilUsuario from "../interfaces/PerfilUsuario";

const PaginaPerfil = () => {
  const usuario = {
    id: 1,
    nome: "Victor",
    email: "a@gmail.com",
    password: "123",
    tipo: "adm",
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Perfil do Usuário</h1>
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700">Informações do Perfil</h2>
            <p className="text-gray-600">Nome: <span className="font-medium text-blue-600">{usuario.nome}</span></p>
            <p className="text-gray-600">Email: <span className="font-medium text-blue-600">{usuario.email}</span></p>
            <p className="text-gray-600">Tipo: <span className="font-medium text-blue-600">{usuario.tipo}</span></p>
          </div>
          <div className="flex justify-between items-center">
            <button className="w-1/2 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Editar Perfil
            </button>
            <button className="w-1/2 px-6 py-3 bg-red-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
              Sair
            </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <PerfilUsuario usuario={usuario} />
        </div>
      </div>
    </div>
  );
};

export default PaginaPerfil;
