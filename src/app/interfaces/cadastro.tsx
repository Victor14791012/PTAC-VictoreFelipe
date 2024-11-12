import Usuario from './usuario'

const PerfialUsuario: React.FC <{usuario: Usuario}> = ({usuario}) => {
    return(
        <div>
                <p>{usuario.id}</p>
                <h1>{usuario.nome}</h1>
                <p>{usuario.tipo}</p>
                <p>{usuario.password}</p>
               
                { usuario.email? <p>{usuario.email}</p>  : <p>Sem email disponível</p>} 
        </div>
    )
}

export default PerfialUsuario ;