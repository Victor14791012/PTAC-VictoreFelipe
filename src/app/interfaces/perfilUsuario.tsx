import Usuario from './usuario'

const PerfialUsuario: React.FC <{usuario: Usuario}> = ({usuario}) => {
    return(
        <div>
                <h1>{usuario.nome}</h1>
                <p>{usuario.idade}</p>
                {usuario.email && <p>Email</p>}
        </div>
    )
}

export default PerfialUsuario ;