import { useQuery } from "react-query"
import CardEstudiante from "../components/CardEstudiante"
import ComponentVacio from "../components/ComponentVacio"
import { listEstudiantes } from "../api/EstudianteApi"
import { Estudiante } from "../types"
import { useState } from "react"

const LisAllUsuarioPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const { data, isLoading } = useQuery<Estudiante[]>({
        queryKey: ['estudiantes'],
        queryFn: () => listEstudiantes(currentPage),
        keepPreviousData: true, // Mantiene los datos previos al cambiar de página

    })
    console.log(data);

    if (isLoading) return '...Loading'


    if (data?.length! <= 0) {
        return <ComponentVacio text="No hay Estudiantes disponible por el momento" />
    }


    return (
        <div className="w-screen">

            <div className="grid grid-cols-5 gap-10 mt-10">
                {data?.map(estudiante => <CardEstudiante key={estudiante.id_usuario} estudiante={estudiante} />)}
            </div>
            <div className="flex justify-center my-10">
                <button onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))} disabled={currentPage === 1}>
                    <img src="/OouiPreviousLtr.svg" className="w-10" />
                </button>
                <button onClick={() => setCurrentPage((old) => (old + 1))}>
                    <img src="/OouiPreviousRtl.svg" className="w-10" />
                </button>
            </div>
        </div >
    )
}

export default LisAllUsuarioPage