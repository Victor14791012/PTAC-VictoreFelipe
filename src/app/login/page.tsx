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

  async function verificarLogin(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.mensagem);
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.nome);
        router.push("/");
      }
    } catch (error) {
      setError("Erro ao tentar fazer login. Tente novamente.");
    }
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400"
          />
          <p className="text-red-500 text-sm">{error}</p>
          <button
            type="submit"
            className="w-full py-2 bg-yellow-900 text-white text-lg font-medium rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Entrar
          </button>
        </form>
        <div className="text-center">
          <Link href="/cadastrar">
            <p className="text-yellow-600 hover:underline">Criar Conta</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
