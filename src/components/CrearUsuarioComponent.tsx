import { FieldErrors, UseFormRegister } from "react-hook-form"
import { Estudiante } from "../types"

interface d {
    register: UseFormRegister<Estudiante>,
    errors: FieldErrors<Estudiante>,
    rol: 'Estudiante' | 'Usuario' | 'Maestro',
    actions: 'Crear' | 'Modificar',
    estuadiante?: Estudiante
}
const CrearUsuarioComponent = ({ register, errors, rol, estuadiante, actions }: d) => {
    return (


        <>

            <label htmlFor="primer_nombre" className="mb-2">Primer Nombre</label>
            <input
                type="text"
                id='primer_nombre'
                className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                defaultValue={estuadiante?.primer_nombre}
                {...register('primer_nombre', { required: `El primer nombre del ${rol.toLocaleLowerCase()} es requerido` })}
            />
            {errors.primer_nombre && <p className='text-red-500 text-sm'>{errors.primer_nombre.message}</p>}
            <label htmlFor="segundo_nombre" className="mb-2">Segundo Nombre</label>
            <input
                type="text"
                id='segundo_nombre'
                className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                defaultValue={estuadiante?.segundo_nombre}
                {...register('segundo_nombre')}
            />

            <label htmlFor="primer_apellido" className="mb-2">Primer apellido</label>
            <input
                type="text"
                id='primer_apellido'
                className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                defaultValue={estuadiante?.primer_apellido}
                {...register('primer_apellido', { required: `El primer apellido del ${rol.toLocaleLowerCase()} es requerido` })}
            />
            {errors.primer_nombre && <p className='text-red-500 text-sm'>{errors.primer_nombre.message}</p>}

            <label htmlFor="segundo_apellido" className="mb-2">Segundo apellido</label>
            <input
                type="text"
                id='segundo_apellido'
                className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                defaultValue={estuadiante?.segundo_apellido}
                {...register('segundo_apellido')}
            />


            <label htmlFor="edad" className="mb-2">{`Edad del ${rol}`}</label>
            <input
                type="text"
                id='edad'
                className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                defaultValue={estuadiante?.edad}
                {...register('edad', { required: `Le edad del ${rol.toLocaleLowerCase()} es requerida`, min: { value: 5, message: "La edad minimi debe ser mayor o igual a 5 años" } })}
            />
            {errors.edad && <p className='text-red-500 text-sm'>{errors.edad.message}</p>}
            <label htmlFor="telefono" className="mb-2">Telefono del {rol}</label>

            <input
                type="tel"
                id='telefono'
                className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                defaultValue={estuadiante?.telefono}
                {...register('telefono', { required: `El telefono del ${rol} o del acudiente debe ser requerido` })}
            />
            {errors.telefono && <p className='text-red-500 text-sm'>{errors.telefono.message}</p>}

            <label htmlFor="tipo_identificacion" className="mb-2">Tipo de identificación</label>
            <select
                id='tipo_identificacion'
                className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                defaultValue={estuadiante?.tipo_identificacion}
                {...register('tipo_identificacion', { required: "El tipo de identificación es requerido" })}
            >
                <option value="">--Seleccionar--</option>
                <option value="CC">Cedula Ciudania</option>
                <option value="TI">tarjeta de Identidad</option>
            </select>
            {errors.tipo_identificacion && <p className='text-red-500 text-sm'>{errors.tipo_identificacion.message}</p>}

            <label htmlFor="identificacion" className="mb-2">Número de Identificación</label>
            <input
                type="text"
                id='identificacion'
                defaultValue={estuadiante?.identificacion}
                className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                {...register('identificacion', { required: "El número de itentificación es requerido" })}
            />
            {errors.identificacion && <p className='text-red-500 text-sm'>{errors.identificacion.message}</p>}

            <label htmlFor="correo" className="mb-2">Correo electronico del {rol}</label>
            <input
                type="email"
                id='correo'
                className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                defaultValue={estuadiante?.correo}
                {...register('correo', {
                    required: "El correo electronico es requerido", pattern: {
                        value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: 'El formato del email es inválido'
                    }
                })}
            />
            {errors.correo && <p className='text-red-500 text-sm'>{errors.correo.message}</p>}

            {
                actions == 'Crear' && <label htmlFor="contrasena" className="mb-2">Ingrese la contraseña del {rol}</label>
            }
            {
                actions == 'Crear' && <input
                    type="password"
                    id='contrasena'
                    className="bg-gray-100 border-2 rounded-md border-gray-200 p-2 outline-none"
                    {...register('contrasena', {
                        required: `La contraseña del ${rol.toLocaleLowerCase()} es requeridad`, minLength: { value: 5, message: "La longitud minima de la contraseña debe ser minima de 5  caracteres" }, pattern: {
                            value: /^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]+$/,
                            message: "La contraseña debe contener al menos un carácter especial"
                        }
                    })}
                />
            }


            {errors.contrasena && <p className='text-red-500 text-sm'>{errors.contrasena.message}</p>}
            <input
                type="hidden"
                id='rol'
                value={rol}
                {...register('rol')}
            />

            <input type="submit" value="Guardar" className="bg-blue-400 w-1/4 self-center h-12 rounded-md font-bold uppercase text-gray-50" />
        </>
    )
}

export default CrearUsuarioComponent