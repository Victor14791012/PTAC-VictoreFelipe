interface Reserva {
    id: number;               
    usuario_id: number;
    mesa_id: number;
    data: Date;
    n_pessoas: number;
    status: boolean;
}


const HtmlReserva: React.FC <{inf: Reserva}> = ({inf}) => {
    return(
        <div>
            <h1> User id: {inf.usuario_id}</h1>
            <p> id: {inf.id}</p>            
            <p>id mesa: {inf.mesa_id}</p>
            <p> N° Pessoas: {inf.n_pessoas}</p>
            <p> Data: {inf.data.toLocaleDateString()}</p>
        </div>
    )
}

export default HtmlReserva ;

// - Reserva
// -- id: int
// -- usuario_id: int
// -- mesa_id: int
// -- data: date
// -- n_pessoas: int
// -- status: boolean
