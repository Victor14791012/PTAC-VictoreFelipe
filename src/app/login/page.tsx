"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../componentes/Input";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function verificarLogin(e: React.FormEvent) {
    e.preventDefault();
    if (email !== "a@gmail.com" || password !== "nota10") {
      setError("E-mail ou senha inválidos");
      return;
    }
    setError("");
    router.push("/logado");
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-6">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={verificarLogin} className="space-y-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <p className="text-red-500 text-sm">{error}</p>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Entrar
          </button>
        </form>
        <div className="text-center">
          <Link href="/cadastrar">
            <p className="text-blue-500 hover:underline">Criar Conta</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
