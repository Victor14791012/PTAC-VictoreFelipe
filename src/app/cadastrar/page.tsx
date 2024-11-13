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
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-semibold text-center">Criar Conta</h2>
        <form onSubmit={handleCadastro} className="space-y-4">
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome Completo"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
