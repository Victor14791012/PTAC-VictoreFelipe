import Link from "next/link";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = ({ username }) => {
  return (
    <header className="bg-yellow-400 p-4 flex items-center justify-between w-full md:px-32">
      <div className="flex items-center space-x-4">
      <Link href="/" className="text-white text-xl font-bold flex px-6 items-center ">
          <img src="/logo.png" alt="Minha Logo" className="w-20 lg:w-24" />
          <span className="p-0 m-0 w-32 text-center md:-ml-6 ">Delicias da Cozinha</span>
        </Link>

        <nav className="hidden md:flex  space-x-3">
          <Link  href="/reservas" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black">
            Reserva
          </Link>
          <Link href="/menu" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black">
            Menu
          </Link>
          <Link href="/cadastrar" className="text-white rounded-lg p-2 hover:bg-gray-200 hover:text-black">
            Cadastrar
          </Link>
        </nav>
      </div>


     
<button className="rounded-lg p-2 hover:bg-gray-200">
  
   <div className="flex items-center text-[18px] space-x-2 text-[#822831]">
        <i className="bi bi-person-circle text-2xl text-black"></i>
        <span className="hidden md:inline-block">{username}</span>
      </div></button>
     
    </header>
  );
};

export default Header;