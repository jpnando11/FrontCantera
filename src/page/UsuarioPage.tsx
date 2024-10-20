import { useForm } from "react-hook-form"
import { Estudiante } from "../types";
import CrearUsuarioComponent from "../components/CrearUsuarioComponent";
import { useMutation } from "react-query";
import { crearEstudiante } from "../api/EstudianteApi";
import { toast, ToastContainer } from "react-toastify";

const UsuarioPage = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<Estudiante>();

    const { mutate } = useMutation({
        mutationFn: crearEstudiante,
        onSuccess: (data: any) => {
            toast.success(data.mensagge);

        },
        onError: (error: Error) => {
            toast.error(error.message);
        }
    })

    const onSubmit = (data: Estudiante) => mutate(data);

    return (
        <div className="w-screen py-4">
            <ToastContainer />
            <h1 className="font-bold text-4xl text-center text-gray-700">Registrar un Usuario</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col space-y-4 w-5/6 mx-auto">
                <CrearUsuarioComponent errors={errors} register={register} rol="Usuario" actions="Crear" />
            </form>
        </div>
    )
}

export default UsuarioPage