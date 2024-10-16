import { useForm } from 'react-hook-form'
import { Estudiante } from '../types';
import { useMutation } from 'react-query'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { crearEstudiante } from '../api/EstudianteApi';
import CrearUsuarioComponent from '../components/CrearUsuarioComponent';

const EstudiantePage = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<Estudiante>();


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
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col space-y-4 w-5/6 mx-auto">
                <CrearUsuarioComponent errors={errors} register={register} rol='Estudiante' actions='Crear' />
            </form>
        </div>
    )
}

export default EstudiantePage