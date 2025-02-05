"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header: React.FC = () => {
  const [username, setUsername] = useState("Visitante");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      const nameParts = storedUsername.trim().split(" ");
      if (nameParts.length > 1) {
        const firstName = nameParts[0];
        const lastName = nameParts[nameParts.length - 1];
        setUsername(`${firstName} ${lastName}`);
      } else {
        setUsername(storedUsername);
      }
    }
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
          <span className="p-0 m-0 w-32 text-center md:-ml-2">Mamma Minha</span>
        </Link>

        <nav className="hidden md:flex space-x-3">
          <Link href="/reservas" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            M. Reservas
          </Link>
          <Link href="/reserva" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            Reservar
          </Link>
          <Link href="/menu" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            Menu
          </Link>
          <Link href="/cadastrar" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            Cadastrar
          </Link>
          <Link href="/login" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            Login
          </Link>
          <Link href="/mesas" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black transition duration-300">
            Mesas
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
