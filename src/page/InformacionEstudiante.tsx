import { Link, useNavigate, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { Estudiante } from "../types";
import { listEstudiante } from "../api/EstudianteApi";
// import { Estudiante } from "../types";


const InformacionEstudiante = () => {

    const { id_estudiante } = useParams();
    const navigate = useNavigate();

    const { data, isLoading } = useQuery<Estudiante>({
        queryKey: ['estudiante', id_estudiante],
        queryFn: () => listEstudiante(id_estudiante)
    })

    if (isLoading) <p>Cargando</p>



    return (
        <>
            <div className="flex flex-col space-y-4 w-5/6 mx-auto mt-3">
                <h1 className="font-bold text-4xl text-center text-gray-700">Información del estudiente</h1>
                <div className="flex justify-center mt-10">
                    <img src="/user.svg" className="w-1/4" />
                </div>
                <table className="">
                    <tbody>
                        <tr className="border-b">
                            <td className="font-bold text-gray-700 pb-5">
                                Nombre:
                            </td>
                            <td>
                                {`${data?.primer_nombre} ${data?.segundo_nombre}`}
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold text-gray-700 pb-5">
                                Apellidos:
                            </td>
                            <td>
                                {`${data?.primer_apellido} ${data?.segundo_apellido}`}
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold text-gray-700 pb-5">
                                Edad:
                            </td>
                            <td>
                                {`${data?.edad} `}
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold text-gray-700 pb-5">
                                Correo:
                            </td>
                            <td>
                                {`${data?.correo} `}
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold text-gray-700 pb-5">
                                Telefono:
                            </td>
                            <td>
                                {`${data?.telefono} `}
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold text-gray-700 pb-5">
                                Tipo Identificación:
                            </td>
                            <td>
                                {`${data?.tipo_identificacion} `}
                            </td>
                        </tr>
                        <tr className="border-b">
                            <td className="font-bold text-gray-700 pb-5">
                                Identificación:
                            </td>
                            <td>
                                {`${data?.identificacion} `}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="bg-blue-400 w-1/4 self-center h-12 rounded-md font-bold uppercase text-gray-50 flex justify-center items-center" onClick={() => navigate('/editarEstudiante', { state: data })}>Editar Estudiante</button>
            </div >
        </>
    )
}

export default InformacionEstudiante