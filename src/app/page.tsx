"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold">Bem-vindo ao Sistema</h1>
        <Link href="/login">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Fazer Login
          </button>
        </Link>
        <Link href="/cadastrar">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mt-4">
            Criar Conta
          </button>
        </Link>
      </div>
    </div>
  );
}
