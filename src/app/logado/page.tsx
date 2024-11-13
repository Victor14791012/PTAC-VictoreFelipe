"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Logado() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Você está Logado!</h1>
        <h3 className="text-xl text-gray-600 mb-6">Bem-vindo de volta!</h3>
        <Link href="/">
          <p className="text-blue-600 hover:underline text-lg font-medium">
            Clique aqui para voltar à página inicial
          </p>
        </Link>
      </div>
    </div>
  );
}
