interface Mesa {
    id: number;               
    codigo: string;
    n_lugares: number; 
}

const MesaHtml: React.FC <{inf: Mesa}> = ({inf}) => {
    return(
        <div>
                <h1>Id: {inf.id}</h1>
                <p>Código: {inf.codigo}</p>
                <p>N° Lugares: {inf.n_lugares}</p>
        </div>
    )
}

export default MesaHtml ;