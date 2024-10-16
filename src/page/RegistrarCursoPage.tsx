import { useForm } from 'react-hook-form'
import { Curso, Estudiante } from '../types';
import { useMutation, useQuery } from 'react-query'
import { crearCurso } from '../api/CursoApi';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { getMaestro } from '../api/UsuarioApi';

const RegistrarCurso = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<Curso>();


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

    const { data, isLoading, error } = useQuery<Estudiante[]>({
        queryKey: ['maestros'],
        queryFn: getMaestro
    });

    if (isLoading) <p>Cargando...</p>

    if (error) <p>Error...</p>

    console.log(data);


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
                    {...register('nombre_curso', { required: "El nombre es requerido" })}
                />
                {errors.nombre_curso && <p className='text-red-500 text-sm'>{errors.nombre_curso.message}</p>}


                <label htmlFor="nivel_categorias" className="mb-2">Nivel de Categoria</label>
                <select
                    id="nivel_categorias"
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('nivel_categorias', { required: "Nivel del curso es requerido" })}
                >
                    <option value="">--Seleccionar--</option>
                    <option value="Experto">Experto</option>
                    <option value="Básico">Basico</option>
                    <option value="Principiante">Principiante</option>
                </select>
                {errors.nivel_categorias && <p className='text-red-500 text-sm'>{errors.nivel_categorias.message}</p>}

                <label htmlFor="descripcion" className="mb-2">Desripción del curso</label>
                <input
                    type="text"
                    id='descripcion'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('descripcion_curso', { required: "La descripción del curso es requerido" })}
                />
                {errors.descripcion_curso && <p className='text-red-500 text-sm'>{errors.descripcion_curso.message}</p>}

                <label htmlFor="descripcion" className="mb-2">Maestro</label>
                <select
                    id="maestro"
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('maestro', { required: "Nivel del curso es requerido" })}
                >
                    <option value="">--Seleccionar--</option>
                    {data?.map(maestro => <option key={maestro.id_usuario} value={maestro.id_usuario}>{maestro.primer_nombre} {maestro.segundo_nombre} {maestro.primer_apellido}</option>)}
                </select>
                {errors.descripcion_curso && <p className='text-red-500 text-sm'>{errors.descripcion_curso.message}</p>}

                <label htmlFor="costo" className="mb-2">Costo Mensual del Curso</label>
                <input
                    type="number"
                    id='costo'
                    min="0"
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('costo_curso',
                        {
                            required: "El costo del curso es requerido",
                            min: { value: 0, message: "El valor del curso debe ser mayor de cero" }
                        })}
                />
                {errors.costo_curso && <p className='text-red-500 text-sm'>{errors.costo_curso.message}</p>}

                <input type="submit" value="Guardar" className="bg-blue-400 w-1/4 self-center h-12 rounded-md font-bold uppercase text-gray-50" />

            </form>
        </div>
    )
}

export default RegistrarCurso