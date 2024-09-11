import { useForm } from 'react-hook-form'
import { Estudiante } from '../types';
import { useMutation } from 'react-query'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { crearEstudiante } from '../api/EstudianteApi';

const EstudiantePage = () => {
    const { handleSubmit, register } = useForm<Estudiante>();


    const { mutate } = useMutation(
        {
            mutationFn: crearEstudiante,
            onSuccess: (data: any) => {

                toast.success(data.mensagge);

            },
            onError: (error: Error) => {
                toast.error(error.message);
            }
        }
    )

    const onSubmit = (data: Estudiante) => mutate(data);

    return (
        <div className="w-screen py-4">
            <ToastContainer />
            <h1 className="font-bold text-4xl text-center text-gray-700">Registrar un estudiente</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-5/6 mx-auto">



                <label htmlFor="primer_nombre" className="mb-2">Primer Nombre</label>
                <input
                    type="text"
                    id='primer_nombre'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('primer_nombre')}
                />

                <label htmlFor="segundo_nombre" className="mb-2">Segundo Nombre</label>
                <input
                    type="text"
                    id='segundo_nombre'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('segundo_nombre')}
                />

                <label htmlFor="primer_apellido" className="mb-2">Primer apellido</label>
                <input
                    type="text"
                    id='primer_apellido'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('primer_apellido')}
                />

                <label htmlFor="segundo_apellido" className="mb-2">Segundo apellido</label>
                <input
                    type="text"
                    id='segundo_apellido'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('segundo_apellido')}
                />


                <label htmlFor="edad" className="mb-2">Edad del estudiente</label>
                <input
                    type="text"
                    id='edad'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('edad')}


                />

                <label htmlFor="telefono" className="mb-2">Telefono del estudiante</label>

                <input
                    type="tel"
                    id='telefono'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('telefono')}
                />

                <label htmlFor="tipo_identificacion" className="mb-2">Tipo de identificación</label>

                <input
                    type="tel"
                    id='tipo_identificacion'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('tipo_identificacion')}
                />

                <label htmlFor="identificacion" className="mb-2">Número de Identificación</label>

                <input
                    type="text"
                    id='identificacion'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('identificacion')}
                />

                <label htmlFor="correo" className="mb-2">Correo electronico del estudiante</label>
                <input
                    type="email"
                    id='correo'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('correo')}
                />

                <label htmlFor="contrasena" className="mb-2">Ingrese la contraseña del estudiante</label>
                <input
                    type="password"
                    id='contrasena'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('contrasena')}
                />

                <label htmlFor="rol" className="mb-2">Rol del Usuario</label>

                <input
                    type="text"
                    id='rol'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('rol')}
                />

                <input type="submit" value="Guardar" className="bg-blue-400 w-1/4 self-center h-12 rounded-md font-bold uppercase text-gray-50" />

            </form>
        </div>
    )
}

export default EstudiantePage