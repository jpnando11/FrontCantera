import { useQuery } from "react-query"
import { listEstudiantes } from "../api/EstudianteApi"
import { Estudiante } from "../types"
import ComponentVacio from "./ComponentVacio"
import CardEstudiante from "./CardEstudiante"
import { Link } from "react-router-dom"

const
    SeccionEstudiante = () => {
        const { data, isLoading } = useQuery<Estudiante[]>({
            queryKey: ['estudiantes'],
            queryFn: () => listEstudiantes()
        })
        if (isLoading) return '...Loading'


        if (data?.length! <= 0) {
            return <ComponentVacio text="No hay Estudiantes disponible por el momento" />
        }


        return (
            <div className="grid grid-cols-5 gap-10">
                {data?.map(estudiante => <CardEstudiante key={estudiante.id_usuario} estudiante={estudiante} />)}
                <div className="text-center flex items-center border bg-gray-100 shadow-md rounded-lg">
                    <Link className="text-blue-500 font-semibold" to={"/listEstudiantes"}>Ver Todos los estudiantes</Link>
                </div>
            </div>
        )
    }

export default SeccionEstudiante