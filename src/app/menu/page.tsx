"use client";
import Link from "next/link";
import Header from "../componentes/Header";
import Autenticar from "../utils/withAuth"
import AutenticarAdm from "../utils/withAdminAuth"

const Menu = () => {
  return (
    <>
      <Header />
      <div className="w-[90%] md:w-3/4 mx-auto flex flex-col  p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Cardápio - Delícias da Cozinha
        </h1>

        {/* Seção de Massas */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Massas</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Spaghetti Carbonara", desc: "Massa artesanal com molho carbonara, bacon e parmesão.", price: "R$ 32,90", img: "https://i.panelinha.com.br/i1/228-q-2473-blog-ayu6706.webp" },
              { name: "Lasagna à Bolonhesa", desc: "Camadas de massa com molho bolonhesa, queijo e especiarias.", price: "R$ 37,50", img: "https://bakeandcakegourmet.com.br/uploads/site/receitas/lasanha-a-bolonhesa-tratada-1-hwvzvmr8.png" },
              { name: "Fettuccine Alfredo", desc: "Massa com molho Alfredo cremoso e queijo parmesão.", price: "R$ 29,90", img: "https://www.receiteria.com.br/wp-content/uploads/fettuccine-alfredo-rotated.jpeg" },
              { name: "Penne ao Pesto", desc: "Massa ao molho pesto, com manjericão e parmesão.", price: "R$ 27,90", img: "https://www.evino.com.br/blog/wp-content/uploads/2022/08/penne-ao-molho-pesto-scaled.jpg" },
              { name: "Ravioli de Ricota", desc: "Ravioli recheado com ricota e espinafre.", price: "R$ 34,90", img: "https://renata.com.br/images/receitas/207/renata-imagem-receitas-ravioli-de-ricota-share.jpg" },
              { name: "Gnocchi ao Sugo", desc: "Gnocchi de batata com molho sugo.", price: "R$ 28,90", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnBBgAY9numZ3Ts5ll2eNEEmvXKMlyE4TTT1WfZt21pnP8DSlAKgU3slnz58j2HMPwpvU_EekGhRnvecLdN2r2G9F3pUfa7XhqNNiowycwzCQ5zv_9qhhQs5io9iVntvg3YvNFUdilIFI/s1600/IMG_3787.JPG" }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
                <p className="font-semibold text-blue-700 mt-4 text-lg">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Entradas */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Entradas</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Bruschetta", desc: "Pão italiano com tomates frescos, manjericão e azeite.", price: "R$ 15,90", img: "https://colonialconservas.com.br/wp-content/uploads/2022/11/bruschetta-tomate-mozarela-bufala-scaled-e1667333655624-1536x1128.jpg" },
              { name: "Caprese", desc: "Salada de tomate, mussarela de búfala e manjericão.", price: "R$ 18,90", img: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F3b432b41ce04c96a08d77befa42b9881a587a436" },
              { name: "Arancini", desc: "Bolinhas de risoto fritas, recheadas com queijo.", price: "R$ 19,90", img: "https://www.allrecipes.com/thmb/Db47R1UZ4Cp3dNQ1flizV7KiZ8c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RM-57844-Arancini-ddmfs-2x1-6022-6ea5a1b1639c401bbce717f1f9d84dbf.jpg" }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
                <p className="font-semibold text-blue-700 mt-4 text-lg">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Sobremesas */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Sobremesas</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Tiramisu", desc: "Tradicional sobremesa italiana com café e mascarpone.", price: "R$ 18,90", img: "https://www.wellseasonedstudio.com/wp-content/uploads/2023/11/Italian-tiramisu-on-a-plate-with-cocoa-powder-and-chocolate-shavings-600x900.jpg" },
              { name: "Panna Cotta", desc: "Sobremesa cremosa com calda de frutas vermelhas.", price: "R$ 16,90", img: "https://receitatodahora.com.br/wp-content/uploads/2019/07/panacota.jpg" },
              { name: "Gelato", desc: "Sorvete italiano, sabores variados.", price: "R$ 12,90", img: "https://noticias.maringa.com/storage/noticias/uDvmv-sorvete-ou-gelato-entenda-a-diferenca-entre-as-sobremesas-refrescantes.webp" }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
                <p className="font-semibold text-blue-700 mt-4 text-lg">{item.price}</p>
              </div>
            ))}
          </div>
        </section>

      
      </div>
    </>
  );
};

export default Menu;
