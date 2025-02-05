"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HtmlReserva from "../interfaces/Reserva";
import Header from "../componentes/Header"; 
import Reserva from "../interfaces/Reserva";
import Autenticar from "../utils/withAuth"
import AutenticarAdm from "../utils/withAdminAuth"



const MinhasReservas = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const token = localStorage.getItem('token'); // Pegue o token do localStorage
  
        const response = await fetch('http://localhost:8000/reservas/minhas_reservas', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        });
  
        if (response.ok) {
          const jsonResponse = await response.json();
          setReservas(jsonResponse.reservas); // A resposta está dentro de 'reservas'
        } else {
          console.error('Erro ao buscar reservas:', await response.text());
        }
      } catch (error) {
        console.error('Erro ao buscar reservas:', error);
      }
    };
  
    fetchReservas();
  }, []);
  

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split('T')[0]; // Obtém a data no formato YYYY-MM-DD
    const formattedTime = date.toISOString().split('T')[1].slice(0, 5); // Obtém o horário no formato HH:MM
    return `${formattedDate} ás ${formattedTime}`; 
  };
  
  

  return (
    <>
      <Header />
      <div className="mt-8 bg-gradient-to-r w-full flex items-center justify-center">
        <div className="p-8 rounded-lg max-w-6xl w-full">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Minhas Reservas</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {reservas.map((reserva) => (
              <div
                key={reserva.id}
                className="p-6 rounded-lg shadow-xl bg-white hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reserva {reserva.id}</h2>
                  <div className="text-gray-600 space-y-2 mb-4">
                    <p><span className="font-medium text-blue-600">Mesa Código:</span> {reserva.mesa.codigo}</p>
                    <p><span className="font-medium text-blue-600">Data:</span> {formatDate(reserva.data)}</p>
                    <p><span className="font-medium text-blue-600">Número de Pessoas:</span> {reserva.n_pessoas}</p>
                    <p>
                      <span className="font-medium text-blue-600">Status:</span> 
                      <span className={reserva.status ? "text-green-600" : "text-red-600"}>
                        {reserva.status ? "Confirmada" : "Cancelada"}
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 mt-6">
                    <button className="px-3 py-1 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
                      Confirmar Reserva
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white font-medium rounded-lg shadow-lg hover:bg-red-700 transition duration-300">
                      Cancelar Reserva
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Autenticar(MinhasReservas);
