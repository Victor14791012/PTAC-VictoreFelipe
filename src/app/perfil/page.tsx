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
    <div>
      <h1>Página Perfil</h1>
      <PerfilUsuario usuario={usuario} />
    </div>
  );
};

export default PaginaPerfil;