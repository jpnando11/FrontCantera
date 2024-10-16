import { Link } from "react-router-dom"
import { Estudiante } from "../types"

interface a {
    estudiante: Estudiante
}

const CardEstudiante = ({ estudiante }: a) => {
    return (

        <div className="text-center border rounded-lg bg-gray-100 shadow-md">
            <img src="/user.svg" />
            <div className="bg-gray-50 py-3">
                <p>{estudiante.primer_nombre} {estudiante.segundo_nombre}</p>
                <Link className="text-blue-500 font-semibold" to={`/estudiante/${estudiante.id_usuario}`}>Ver Información</Link>
            </div>
        </div>
    )
}

export default CardEstudiante