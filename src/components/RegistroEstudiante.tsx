import { useMutation } from 'react-query'
import { crearIncripcion } from '../api/IncripcricionesApi'
import { Estudiante } from '../types'

interface c {
    estudiante: Estudiante,
    setRegistro: (a: boolean) => void,
    curso:any
}

const RegistroEstudiante = ({ estudiante, setRegistro, curso }: c) => {
    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, edad, correo } = estudiante

    const { mutate } = useMutation({
        mutationFn: crearIncripcion,
        onSuccess: (data) => {
            console.log(data.mensagge)
            setRegistro(true)
        },
        onError: (err: Error) => {
            console.log(err.message)
        }
    })

    return (
        <>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">{`${primer_nombre} ${segundo_nombre} ${primer_apellido} ${segundo_apellido}`}</td>
                <td className="py-3 px-6 text-left">{edad}</td>
                <td className="py-3 px-6 text-left">{correo}</td>
                <td className="py-3 px-6 text-left">
                    <button className=" text-gray-800 font-semibold uppercase py-1 px-3 rounded" onClick={() => { mutate({ cursoId: curso, usuarioId: estudiante.id_usuario }) }}>Incribir</button>
                </td>
            </tr>
        </>
    )
}

export default RegistroEstudiante