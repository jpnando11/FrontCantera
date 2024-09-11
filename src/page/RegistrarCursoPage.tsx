import { useForm } from 'react-hook-form'
import { Curso } from '../types';
import { useMutation } from 'react-query'
import { crearCurso } from '../api/CursoApi';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const RegistrarCurso = () => {
    const { handleSubmit, register } = useForm<Curso>();


    const { mutate } = useMutation(
        {
            mutationFn: crearCurso,
            onSuccess: (data: any) => {

                toast.success(data.mensagge);

            },
            onError: (error: Error) => {
                toast.error(error.message);
            }
        }
    )

    const onSubmit = (data: Curso) => mutate(data);

    return (
        <div className="w-screen py-4">
            <ToastContainer />
            <h1 className="font-bold text-4xl text-center text-gray-700">Crear un Curso</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 w-5/6 mx-auto">



                <label htmlFor="nombre_curso" className="mb-2">Nombre del Curso</label>
                <input
                    type="text"
                    id='nombre_curso'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('nombre_curso')}
                />


                <label htmlFor="nivel_categorias" className="mb-2">Nivel de Categoria</label>
                <input
                    type="text"
                    id='nivel_categorias'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('nivel_categorias')}


                />

                <label htmlFor="descripcion" className="mb-2">Desripción del curso</label>

                <input
                    type="text"
                    id='descripcion'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('descripcion_curso')}
                />

                <label htmlFor="costo" className="mb-2">Costo Mensual del Curso</label>
                <input
                    type="number"
                    id='costo'
                    min="0"
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('costo_curso')}
                />

                <input type="submit" value="Guardar" className="bg-blue-400 w-1/4 self-center h-12 rounded-md font-bold uppercase text-gray-50" />

            </form>
        </div>
    )
}

export default RegistrarCurso