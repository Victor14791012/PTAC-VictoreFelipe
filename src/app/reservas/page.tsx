"use client";
import { useEffect, useState } from "react";
import Header from "../componentes/Header";
import Reserva from "../interfaces/Reserva";
import Autenticar from "../utils/withAuth";

const MinhasReservas = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [todasReservas, setTodasReservas] = useState<Reserva[]>([]);
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reservaSelecionada, setReservaSelecionada] = useState<Reserva | null>(null);
  const [nPessoas, setNPessoas] = useState<number>(0);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/reservas/minhas_reservas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const jsonResponse = await response.json();
          setReservas(jsonResponse.reservas);
          setTodasReservas(jsonResponse.reservas);
        } else {
          console.error("Erro ao buscar reservas:", await response.text());
        }
      } catch (error) {
        console.error("Erro ao buscar reservas:", error);
      }
    };

    fetchReservas();
  }, []);

  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split("T")[0];
    const formattedTime = date.toISOString().split("T")[1].slice(0, 5);
    return `${formattedDate} às ${formattedTime}`;
  };

  

  const cancelarReserva = async (reservaId: number) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8000/reservas/minhas_reservas", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ reservaId }),
      });

      if (response.ok) {
        alert("Reserva cancelada com sucesso!");
        setReservas((prevReservas) =>
          prevReservas.map((reserva) =>
            reserva.id === reservaId ? { ...reserva, status: false } : reserva
          )
        );
      } else {
        console.error("Erro ao cancelar reserva:", await response.text());
        const dataHoraAtual = new Date();
        const mensagem = `Falha ao cancelar a reserva. Data e Hora: ${dataHoraAtual.toLocaleString()}`;
        alert(mensagem);

      }
    } catch (error) {
      console.error("Erro ao cancelar reserva:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  const abrirModal = (reserva: Reserva) => {
    setReservaSelecionada(reserva);
    setNPessoas(reserva.n_pessoas);
    setError("");
    setIsModalOpen(true);
  };

  const atualizarReserva = async () => {
    if (reservaSelecionada) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:8000/reservas/atualizar", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            n_pessoas: nPessoas,
            reservaId: reservaSelecionada.id,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert("Reserva atualizada com sucesso!");
          setReservas((prevReservas) =>
            prevReservas.map((reserva) =>
              reserva.id === reservaSelecionada.id ? { ...reserva, n_pessoas: nPessoas } : reserva
            )
          );
          setIsModalOpen(false);
        } else {
          console.error("Erro ao atualizar reserva:", await response.text());
          setError(data.mensagem);
        }
      } catch (error) {
        console.error("Erro ao atualizar reserva:", error);
        setError("Erro ao conectar com o servidor.");
      }
    }
  };

  const buscarReservasPorData = () => {
    if (!dataSelecionada) {
      setReservas(todasReservas);
      return;
    }
    const reservasFiltradas = todasReservas.filter(reserva => reserva.data.includes(dataSelecionada));
    setReservas(reservasFiltradas);
    if (reservasFiltradas.length === 0) {
      setError("Nenhuma reserva encontrada para essa data.");
    } else {
      setError("");
    }
  };

  return (
    <>
      <Header />
      <div className="mt-8 bg-gradient-to-r w-full flex items-center justify-center">
        <div className="p-8 rounded-lg max-w-6xl w-full">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">Minhas Reservas</h1>
          <div className="flex justify-center items-center mb-6">
            <input
              type="date"
              value={dataSelecionada}
              onChange={(e) => setDataSelecionada(e.target.value)}
              className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={buscarReservasPorData}
              className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-800"
            >
              Filtrar
            </button>
            <button
              onClick={() => {
                setReservas(todasReservas);
                setDataSelecionada("");
                setError("");
              }}
              className="ml-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-800"
            >
              Mostrar Todas
            </button>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {reservas.map((reserva) => (
              <div key={reserva.id} className="p-6 rounded-lg shadow-xl bg-white hover:bg-gray-50  transition-all duration-300 transform hover:scale-105">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reserva {reserva.id}</h2>
                <p className="text-gray-600">Mesa Código: {reserva.mesa.codigo}</p>
                <p className="text-gray-600">Data: {formatDate(reserva.data)}</p>
                <p className="text-gray-600">Número de Pessoas: {reserva.n_pessoas}</p>
                <p className="text-gray-600">status: <span className={reserva.status ? "text-green-600" : "text-red-600"}>
                        {reserva.status ? "Confirmada" : "Cancelada"}
                </span></p>
                {reserva.status && (
                    <div className="flex w-full justify-center space-x-4 mt-6">
                      <button
                        className="p-3 h-14 py-1 bg-red-600 text-white font-medium rounded-lg shadow-lg hover:bg-red-700 transition duration-300"
                        onClick={() => cancelarReserva(reserva.id)}
                      >
                        Cancelar Reserva
                      </button>
                      <button
                        className="p-3 h-14 py-1 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-800 transition duration-300"
                        onClick={() => abrirModal(reserva)}
                      >
                        Editar Reserva
                      </button>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && reservaSelecionada && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4 text-center">Editar Reserva {reservaSelecionada.id}</h2>
            <label className="block mb-2 text-gray-700">Número de Pessoas:</label>
            <input
              type="number"
              value={nPessoas}
              onChange={(e) => setNPessoas(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1"
            />
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-600"
              >
                Cancelar
              </button>
              <button
                onClick={atualizarReserva}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800"
              >
                Salvar
              </button>
              
            </div>
            <p className="text-red-500 text-sm text-center">{error}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Autenticar(MinhasReservas);
