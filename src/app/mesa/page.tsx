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
    <div>
      <h1>Página Mesa</h1>
      <MesaHtml inf={mesa} />
    </div>
  );
};

export default PaginaMesa;