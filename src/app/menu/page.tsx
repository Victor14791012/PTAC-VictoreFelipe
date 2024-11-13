"use client";
import Link from "next/link";
import Header from "../componentes/Header";

const Menu = () => {
  return (
    <>
     <Header username="Victor Carvalho" />
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Cardápio - Delícias da Cozinha
      </h1>
      
      {/* Seção de Massas */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Massas</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800">Spaghetti Carbonara</h3>
            <p className="text-gray-600 mt-2">Massa artesanal com molho carbonara, bacon e parmesão.</p>
            <p className="font-semibold mt-2">R$ 32,90</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800">Lasagna à Bolonhesa</h3>
            <p className="text-gray-600 mt-2">Camadas de massa com molho bolonhesa, queijo e especiarias.</p>
            <p className="font-semibold mt-2">R$ 37,50</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800">Fettuccine Alfredo</h3>
            <p className="text-gray-600 mt-2">Massa com molho Alfredo cremoso e queijo parmesão.</p>
            <p className="font-semibold mt-2">R$ 29,90</p>
          </div>
        </div>
      </section>

      {/* Seção de Entradas */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Entradas</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800">Bruschetta</h3>
            <p className="text-gray-600 mt-2">Pão italiano com tomates frescos, manjericão e azeite.</p>
            <p className="font-semibold mt-2">R$ 15,90</p>
          </div>
        </div>
      </section>

      {/* Seção de Sobremesas */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Sobremesas</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800">Tiramisu</h3>
            <p className="text-gray-600 mt-2">Tradicional sobremesa italiana com café e mascarpone.</p>
            <p className="font-semibold mt-2">R$ 18,90</p>
          </div>
        </div>
      </section>

      {/* Link para Voltar */}
      <div className="text-center mt-8">
        <Link href="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Voltar para a Home
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Menu;
