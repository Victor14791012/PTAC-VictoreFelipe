'use client'
// import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import User from "../interfaces/usuario";

import PerfilUsuario  from "../interfaces/perfilUsuario";


const PaginaPerfil = () =>{
    const usuario = {
        id: 1,
        nome: "Victor",
        email: "a@gmail",
        password: "123",
        tipo: "adm",
    }

    return (
        <div>
          <h1>Página Perfil</h1>
          <PerfilUsuario usuario={usuario} /> 
        </div>
      );
}

export default PaginaPerfil

