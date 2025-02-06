"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header: React.FC = () => {
  const [username, setUsername] = useState("Visitante");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          const nomeCompleto = data.nome;
  
          if (nomeCompleto) {
            const nameParts = nomeCompleto.trim().split(" ");
            const firstName = nameParts[0];
            const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "";
            setUsername(`${firstName} ${lastName}`.trim());
          }
        } else {
          console.error("Erro ao buscar perfil:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      }
    };
  
    fetchPerfil();
  }, []);
  

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("tipo");
    document.cookie = "session_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/login";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="bg-yellow-400 p-4 flex items-center justify-between w-full md:px-32 relative">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-white text-xl font-bold flex px-6 items-center">
          <img src="/logo.png" alt="Minha Logo" className="w-20 lg:w-24" />
          <span className="p-0 m-0 w-32 text-center md:-ml-6">Delícias da Cozinha</span>
        </Link>

        <nav className="hidden md:flex space-x-3">
          <Link href="/reservas" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            M. Reservas
          </Link>
          <Link href="/reservas_por_data" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            M. Reservas por Data
          </Link>
          <Link href="/reserva" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            Reservar
          </Link>
          <Link href="/mesas_novo" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            Cadastrar Mesas
          </Link>
          <Link href="/mesas" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            Mesas
          </Link>
          <Link href="/menu" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            Menu
          </Link>
          
          
        </nav>
      </div>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="rounded-lg p-2 hover:bg-gray-200 transition duration-300 flex items-center space-x-2 text-[#822831]"
        >
          <i className="bi bi-person-circle text-2xl text-black"></i>
          <span className="hidden md:inline-block">{username}</span>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
            <Link
              href="/perfil"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-200"
              onClick={() => setIsDropdownOpen(false)}
            >
              Perfil
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition duration-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
