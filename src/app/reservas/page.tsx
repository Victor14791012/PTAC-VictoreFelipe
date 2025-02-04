"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Reservas = () => {
  const [mesas, setMesas] = useState([]);
  const [data, setData] = useState("");
  const router = useRouter();

  const fetchMesas = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`API_URL/reservas?token=${token}&data=${data}`);
    const data = await response.json();
    setMesas(data.mesas);
  };

  const handleReserva = async (mesaId: number) => {
    const token = localStorage.getItem("token");
    const response = await fetch("API_URL/reservas/novo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ token, mesa: mesaId, data }),
    });

    const result = await response.json();
    alert(result.mensagem);
  };

  useEffect(() => {
    if (data) fetchMesas();
  }, [data]);

  return (
    <div className="w-full max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold text-center">Reservas</h2>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <div className="mt-4">
        {mesas.map((mesa) => (
          <div key={mesa.id} className="flex justify-between items-center p-2 border mb-4">
            <span>{mesa.codigo} - {mesa.n_lugares} lugares</span>
            <button
              onClick={() => handleReserva(mesa.id)}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Reservar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservas;