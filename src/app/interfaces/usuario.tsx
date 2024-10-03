interface Usuario {
    id: number;               
    nome: string;
    email?: string;
    password: string;
    tipo: "cliente" | "adm";    
}



// #### Models ####

// - Usuario
//  id: int
//  nome: string
// email: string
//  password: string
//  tipo: string ("cliente"|"adm")


// const PerfialUsuario: React.FC <{usuario: Usuario}> = ({usuario}) => {
//     return(
//         <div>
//                 <h1>{usuario.nome}</h1>
//                 <p>{usuario.idade}</p>
//                 {usuario.email && <p>Email</p>}
//         </div>
//     )
// }

// export default PerfialUsuario ;

export default Usuario