"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../componentes/Input";
import Header from "../componentes/Header";
import Link from "next/link";

export default function cadastrarMesa() {
    //definindo os estados para armazenar os dados
  const [codigo, setCodigo] = useState(""); 
  const [nLugares, setNLugares] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  


  async function novaMesa(e: React.FormEvent) {
    e.preventDefault(); // Prevenir o comportamento padrão do formulário

    // Verificar se todos os campos estão preenchidos
    if (!codigo || !nLugares) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Enviar a requisição POST para cadastrar a mesa
      const response = await fetch("http://localhost:8000/mesa/novo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({codigo : codigo , n_lugares : nLugares}),
      });

      const data = await response.json();

       if (data.error) {
        setError(data.mensagem);
      } else {
        alert("Mesa cadastrada com sucesso!");
        router.push("/mesas");
      }
    } catch (error) {
      setError("Erro ao tentar cadastrar Mesa. Tente novamente.");
    }
  }

  return (
    <>
      <Header />
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Cadastrar Mesa
        </h2>
        <form onSubmit={novaMesa} className="space-y-4">
          <Input
            type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            placeholder="Código da Mesa"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
          />
          <Input
            type="number"
            value={nLugares}
            onChange={(e) => setNLugares(e.target.value)}
            placeholder="Número de Lugares"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
          />
          <p className="text-red-500 text-sm">{error}</p>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-900 text-white text-lg font-medium rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
