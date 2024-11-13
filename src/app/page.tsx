"use client";
import Link from "next/link";
import Header from "./componentes/Header";

export default function Home() {
  return (
    <>
      <Header username="Victor Carvalho" />
      <div className="md:h-screen w- flex flex-col justify-center items-center w-full bg-gray-100">
        <div className="md:max-w-2xl max-w-[80%] text-center space-y-6">
          {/* Título e Introdução */}
          <h1 className="text-4xl font-bold text-gray-800">
            Bem-vindo ao Delícias da Cozinha
          </h1>
          <p className="text-gray-700">
            O <span className="font-semibold">Delícias da Cozinha</span> é um restaurante que traz a tradição italiana
            em cada prato. Especializado em massas artesanais, oferecemos uma
            experiência gastronômica autêntica e acolhedora. Venha provar nossas
            receitas exclusivas e mergulhe nos sabores únicos que apenas o Delícias da Cozinha pode proporcionar.
          </p>

          {/* Botões de Funcionalidades */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Link href="/reservas">
              <button className="px-4 py-2 bg-[#bd2f25] text-white rounded hover:bg-yellow-600">
                Reservar Mesa
              </button>
            </Link>
            <Link href="/menu">
              <button className="px-4 py-2 bg-[#bd2f25] text-white rounded hover:bg-yellow-600">
                Ver Menu
              </button>
            </Link>
            <Link href="/cadastrar">
          <button className="px-4 py-2 bg-[#bd2f25] text-white rounded hover:bg-yellow-600 ">
            Criar Conta
          </button>
        </Link>
          </div>
          
          {/* Destaque sobre o restaurante */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-12">
            <h2 className="text-2xl font-bold text-gray-800">
              Nossa História
            </h2>
            <p className="text-gray-600 mt-4">
              Desde 2001, o <span className="font-semibold">Delícias da Cozinha</span> é o destino preferido para
              os amantes da culinária italiana. Inspirados nas vilas italianas,
              oferecemos massas frescas preparadas diariamente com ingredientes
              selecionados e técnicas artesanais, trazendo um pedacinho da
              Itália para você.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

