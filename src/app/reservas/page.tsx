"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "../componentes/Header";
import Autenticar from "../utils/withAuth"
import AutenticarAdm from "../utils/withAdminAuth"

const Reservas = () => {
  const [data, setData] = useState("");
  const [pessoas, setPessoas] = useState(1);
  const [mesaId, setMesaId] = useState(1); 
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8000/reservas/novo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Adicionando o token de autenticação
        },
        body: JSON.stringify({
          data: data,
          n_pessoas: pessoas,
          mesaId: mesaId,
        }),
      });

      const resultado = await response.json();

      if (response.ok) {
        setMensagem("Reserva feita com sucesso!");
      } else {
        setMensagem(resultado.mensagem || "Erro ao realizar a reserva.");
      }
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor.");
      console.error("Erro:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="w-[80%] md:w-[30%] mx-auto m-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Reserva de Mesas
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
          
          </div>

          <div>
            <label
              htmlFor="data"
              className="block text-left text-gray-700 font-semibold"
            >
              Data:
            </label>
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
            <label
              htmlFor="pessoas"
              className="block text-left text-gray-700 font-semibold"
            >
              Número de Pessoas(id):
            </label>
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
            <label
              htmlFor="mesa"
              className="block text-left text-gray-700 font-semibold"
            >
              Número da Mesa:
            </label>
            <input
              type="number"
              id="mesa"
              value={mesaId}
              onChange={(e) => setMesaId(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              min="1"
              max="20"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-900 text-white py-2 rounded hover:bg-yellow-600"
          >
            Confirmar Reserva
          </button>
        </form>

        {mensagem && (
          <p
            className={`mt-4 text-center ${
              mensagem.includes("sucesso")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {mensagem}
          </p>
        )}
      </div>
    </>
  );
};

export default AutenticarAdm(Reservas);
