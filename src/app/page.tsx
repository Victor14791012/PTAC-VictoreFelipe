"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white p-8 bg-opacity-70 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-extrabold mb-6">Bem-vindo ao Reservas Gourmet</h1>
        <p className="text-lg mb-8">Reserve sua mesa no restaurante favorito com facilidade e conforto.</p>
        <div className="space-y-4">
          <Link href="/login">
            <button className="w-full px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none transition duration-300">
              Fazer Login
            </button>
          </Link>
          <Link href="/cadastrar">
            <button className="w-full px-6 py-3 bg-green-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-green-700 focus:outline-none transition duration-300">
              Criar Conta
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
