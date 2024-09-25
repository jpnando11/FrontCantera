import { useQuery } from "react-query"
import { listEstudiante } from "../api/EstudianteApi"
import { Estudiante } from "../types"

const SecciónEstudiante = () => {
    const { data, isLoading } = useQuery<Estudiante[]>({
        queryKey: ['estudiantes'],
        queryFn: () => listEstudiante()
    })
    if (isLoading) return '...Loading'
    return (
        <div>SecciónEstudiante</div>
    )
}

export default SecciónEstudiante