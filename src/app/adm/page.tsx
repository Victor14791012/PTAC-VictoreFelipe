"use client";

import Header from "./../componentes/Header";
import AutenticarAdm from "./../utils/withAdminAuth";

const PaginaAdm = () => {

  return (
    <>
      <Header />
      <div className="mt-8 bg-gradient-to-r w-full flex flex-col items-center justify-center">
        
        <div className="p-8 rounded-lg max-w-6xl w-full">
          <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
             Você é um ADM
          </h1>

          

         
        </div>
      </div>

    
    </>
  );
};

export default AutenticarAdm(PaginaAdm);
