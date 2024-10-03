'use client'
// import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import User from "../interfaces/usuario";

import PerfilUsuario  from "../interfaces/perfilUsuario";


const PaginaPerfil = () =>{
    const usuario = {
        nome : 'asdf',
        idade : '10',
        email : 'a@gmail.com'
    }

    return (
        <div>
          <h1>Página Perfil</h1>
          <PerfilUsuario usuario={usuario} />
        </div>
      );
}

export default PaginaPerfil

