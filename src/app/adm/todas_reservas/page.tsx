"use client";
import { useEffect, useState } from "react";
import AutenticarAdm from "../../utils/withAdminAuth";
import Header from "../../componentes/Header";

const ListarReservasAdm = () => {
  const [reservas, setReservas] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const [dataFiltro, setDataFiltro] = useState("");

  const fetchReservas = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8000/reservas/todas_as_reservas", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const resultado = await response.json();

      if (response.ok) {
        setReservas(resultado.reservas);
        setMensagem("");
      } else {
        setMensagem(resultado.mensagem || "Erro ao buscar as reservas.");
      }
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor.");
      console.error("Erro:", error);
    }
  };

  const fetchReservasPorData = async () => {
    if (!dataFiltro) return;
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:8000/reservas/listarReservasPorData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: dataFiltro }),
      });
      const resultado = await response.json();

      if (response.ok) {
        setReservas(resultado.reservas);
        setMensagem("");
      } else {
        setMensagem(resultado.mensagem || "Erro ao buscar as reservas.");
      }
    } catch (error) {
      setMensagem("Erro ao conectar com o servidor.");
      console.error("Erro:", error);
    }
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  return (
    <>
      <Header />
      <div className="mt-8 bg-gradient-to-r w-full flex flex-col items-center justify-center">
        <div className="w-[90%] md:w-[80%] mx-auto m-12 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Lista de Reservas</h1>
          {mensagem && <p className="text-center text-red-600 mb-4">{mensagem}</p>}
          <div className="flex justify-center mb-4 gap-4">
            <input
              type="date"
              className="border p-2 rounded"
              value={dataFiltro}
              onChange={(e) => setDataFiltro(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={fetchReservasPorData}
            >
              Filtrar por Data
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={fetchReservas}
            >
              Listar Todas
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2">ID</th>
                  <th className="border border-gray-300 p-2">Data</th>
                  <th className="border border-gray-300 p-2">Nº Pessoas</th>
                  <th className="border border-gray-300 p-2">Usuário</th>
                  <th className="border border-gray-300 p-2">Mesa</th>
                </tr>
              </thead>
              <tbody>
                {reservas.length > 0 ? (
                  reservas.map((reserva) => (
                    <tr key={reserva.id} className="text-center">
                      <td className="border border-gray-300 p-2">{reserva.id}</td>
                      <td className="border border-gray-300 p-2">{new Date(reserva.data).toLocaleDateString()}</td>
                      <td className="border border-gray-300 p-2">{reserva.n_pessoas}</td>
                      <td className="border border-gray-300 p-2">{reserva.usuario.nome || "-"}</td>
                      <td className="border border-gray-300 p-2">{reserva.mesa.codigo || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="border border-gray-300 p-2 text-center">Nenhuma reserva encontrada.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutenticarAdm(ListarReservasAdm);