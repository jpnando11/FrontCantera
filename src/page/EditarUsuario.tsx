import { useForm } from "react-hook-form";
import CrearUsuarioComponent from "../components/CrearUsuarioComponent"
import { Estudiante } from "../types";
import { useLocation } from "react-router-dom";
import { useMutation } from "react-query"
import { editarEstudiante } from "../api/EstudianteApi";
import { ToastContainer, toast } from "react-toastify"

const EditarUsuario = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Estudiante>();
    const location = useLocation();
    const { state } = location;

    const { mutate } = useMutation({
        mutationFn: editarEstudiante,
        onError: (error: Error) => {
            toast.error(error.message)
        },
        onSuccess: (data: any) => {
            console.log(data);

            toast.success(data.mensagge)

        }
    })

    const onSubmit = (data: Estudiante) => {
        data.id_usuario = state.id_usuario;
        mutate(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col space-y-4 w-5/6 mx-auto">
                <h1 className="font-bold text-4xl text-center text-gray-700 mt-4">Editar un estudiente</h1>
                <ToastContainer />
                <CrearUsuarioComponent errors={errors} register={register} rol="Estudiante" estuadiante={state} actions="Modificar" />
            </form>
        </>
    )
}

export default EditarUsuario