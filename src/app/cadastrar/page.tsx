"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../componentes/Input";

export default function Cadastrar() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleCadastro(e: React.FormEvent) {
    e.preventDefault();
    // Simulando cadastro com redirecionamento
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Criar Conta</h2>
        <form onSubmit={handleCadastro} className="space-y-4">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome Completo"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition duration-300"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
