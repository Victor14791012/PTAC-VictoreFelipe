'use client'
// import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

import HtmlReserva  from "../interfaces/Reserva";


const PaginaReserva= () =>{
    const reserva = {
    id : 1,
    usuario_id : 1,
    mesa_id : 1,
    data : new Date(),
    n_pessoas : 1,
    status : true
    };

    // interface Reserva {
    //     id: number;               
    //     usuario_id: number;
    //     mesa_id: number;
    //     data: Date;
    //     n_pessoas: number;
    //     status: boolean;
    // }
    

    return (
        <div>
          <h1>Página Reserva</h1>
          <HtmlReserva inf={reserva} /> 
        </div>
      );
}

export default PaginaReserva

