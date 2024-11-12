import React from "react";
import Usuario from "./Usuario";

const PerfilUsuario: React.FC<{ usuario: Usuario }> = ({ usuario }) => {
  return (
    <div>
      <p>ID: {usuario.id}</p>
      <h1>{usuario.nome}</h1>
      <p>Tipo: {usuario.tipo}</p>
      <p>Senha: {usuario.password}</p>
      {usuario.email ? <p>Email: {usuario.email}</p> : <p>Sem email disponível</p>}
    </div>
  );
};

export default PerfilUsuario;
