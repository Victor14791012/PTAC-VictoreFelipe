"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CadastroMesa = () => {
  const [codigo, setCodigo] = useState("");
  const [nLugares, setNLugares] = useState(1);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const response = await fetch("API_URL/adm/mesa/novo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mesa: { codigo, n_lugares: nLugares } }),
    });
    const data = await response.json();

    if (!data.erro) {
      alert("Mesa cadastrada com sucesso!");
      router.push("/adm/mesas"); // Redireciona para lista de mesas
    } else {
      alert(data.mensagem); // Exibe erro se houver
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-bold text-center">Cadastrar Mesa</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <input
          type="text"
          placeholder="Código da Mesa"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Número de Lugares"
          value={nLugares}
          onChange={(e) => setNLugares(Number(e.target.value))}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroMesa;