"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "../componentes/Header";

const Reservas = () => {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [pessoas, setPessoas] = useState(1);
  const [mesa, setMesa] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui, você poderia enviar os dados do formulário para um backend ou banco de dados
    alert(`Reserva feita para ${nome} em ${data} às ${hora} para ${pessoas} pessoas na mesa ${mesa}.`);
  };

  return (
    <>
      <Header username="Victor Carvalho" />
      <div className="w-[80%] md:w-[30%] mx-auto m-12 bg-gray-100 p-8 rounded-lg shadow-lg ">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Reserva de Mesas</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-left text-gray-700 font-semibold">Nome:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="data" className="block text-left text-gray-700 font-semibold">Data:</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

        

          <div>
            <label htmlFor="pessoas" className="block text-left text-gray-700 font-semibold">Número de Pessoas:</label>
            <input
              type="number"
              id="pessoas"
              value={pessoas}
              onChange={(e) => setPessoas(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              min="1"
              required
            />
          </div>

          <div>
            <label htmlFor="mesa" className="block text-left text-gray-700 font-semibold">Número da Mesa:</label>
            <input
              type="number"
              id="mesa"
              value={mesa}
              onChange={(e) => setMesa(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              min="1"
              max="20" // Defina o número máximo de mesas conforme necessário
              required
            />
          </div>

          <button type="submit" className="w-full bg-yellow-900 text-white py-2 rounded hover:bg-yellow-600">
            Confirmar Reserva
          </button>
        </form>

      
      </div>
    </>
  );
};

export default Reservas;
