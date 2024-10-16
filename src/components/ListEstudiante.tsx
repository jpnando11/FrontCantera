import { useQuery } from 'react-query'
import { listEstudiantes } from '../api/EstudianteApi'
import { Estudiante } from '../types'
import RegistroEstudiante from './RegistroEstudiante'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

interface c {
    curso:any,
}

const ListEstudiante = ({curso}:c) => {

    const [registro, setRegistro] = useState(false)

    useEffect(() => {
        if (registro) {
            toast.success("Estudiante Inscrito exitosamente")
            setRegistro(false)
        }
    }, [registro])

    const { data, isLoading } = useQuery<Estudiante[]>({
        queryKey: ['estudiantes'],
        queryFn: () => listEstudiantes()
    })
    if (isLoading) return '...Loading'


    if (data?.length != undefined && data.length <= 0) {
        return <p className='mt-10 text-center text-2xl text-gray-600 font-bold'>No hay estudiantes</p>
    }

    return (
        <>
            <ToastContainer />
            <p className='mt-10 text-center text-2xl text-gray-800 uppercase font-semibold'>Incribir Estudiante</p>
            < table className="bg-white w-10/12 m-auto mt-10 border border-gray-300 mb-10" >
                <thead>
                    <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Nombre</th>
                        <th className="py-3 px-6 text-left">Edad</th>
                        <th className="py-3 px-6 text-left">Correo</th>
                        <th className="py-3 px-6 text-left">Acciones</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                    {data?.map(estudiante => <RegistroEstudiante key={estudiante.id_usuario} estudiante={estudiante} setRegistro={setRegistro} curso={curso}/>)}

                </tbody>
            </table >
        </>
    )
}

export default ListEstudiante