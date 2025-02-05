"use client";
import React, { useEffect, useState } from "react";
import Header from "../componentes/Header";
import Usuario from "../interfaces/usuario";
import Autenticar from "../utils/withAuth";

const PaginaPerfil = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/perfil/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsuario(data);
          setFormData({ nome: data.nome, email: data.email, password: "" });
        } else {
          console.error("Erro ao buscar perfil:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      }
    };

    fetchPerfil();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8000/perfil/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUsuario(updatedUser);
        setIsModalOpen(false);
        alert("Perfil atualizado com sucesso!");
      } else {
        console.error("Erro ao atualizar perfil:", response.statusText);
        alert("Falha ao atualizar o perfil.");
      }
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <>
      <Header />
      <div className="w-[90%] md:w-1/2 mx-auto p-8 rounded-lg mt-8 min-h-[55vh] flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Perfil do Usuário</h1>
          {usuario ? (
            <div className="space-y-6">
              <div className="text-start gap-5">
                <h2 className="text-xl font-semibold text-gray-700">Informações do Perfil</h2>
                <p className="text-gray-600">
                  Nome: <span className="font-medium text-blue-600">{usuario.nome}</span>
                </p>
                <p className="text-gray-600">
                  Email: <span className="font-medium text-blue-600">{usuario.email}</span>
                </p>
                <p className="text-gray-600">
                  Tipo: <span className="font-medium text-blue-600">{usuario.tipo}</span>
                </p>
              </div>
              <button
                onClick={handleEditClick}
                className="w-full px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Editar Perfil
              </button>
            </div>
          ) : (
            <p className="text-center text-gray-600">Erro ao carregar as informações do perfil...</p>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Editar Perfil</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Nome:</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Senha:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition duration-200"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Autenticar(PaginaPerfil);
