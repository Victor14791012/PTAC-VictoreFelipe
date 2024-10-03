'use client'
// import styles from "../page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

import MesaHtml  from "../interfaces/Mesa";


const PaginaMesa= () =>{
    const mesa = {
    id : 1,
    codigo : "um",
    n_lugares : 18,
    
    };

   
    // - Mesa
// -- id: int
// -- codigo: string
// -- n_lugares: int
 

    return (
        <div>
          <h1>Página Mesa</h1>
          <MesaHtml inf={mesa} /> 
        </div>
      );
}

export default PaginaMesa

