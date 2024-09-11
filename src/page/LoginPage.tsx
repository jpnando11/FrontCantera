import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { login } from '../api/UsuarioApi';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { mutate } = useMutation({
        mutationFn: login,
        onError: (err: Error) => {
            toast.error(err.message);

        },
        onSuccess: () => {
            navigate("/")

        }
    })
    const submit = (data: any) => mutate(data);

    return (
        <>
            <ToastContainer />
            <div className="h-screen flex justify-center items-center flex-col bg-green-50">
                <div className="w-1/3 h-min mt-10 bg-custom-gradient flex justify-center flex-col rounded-lg">
                    <h1 className="text-4xl font-bold text-center py-4">CANTERA SPORT</h1>
                    <img src="/logo.svg" className=" w-1/4 h-36 self-center bg-green-100 rounded-lg" alt="" />
                    <form onSubmit={handleSubmit(submit)} className="flex flex-col p-5">
                        <label htmlFor="correo" className="pb-3 text-xl">Correo electronico</label>
                        <input type="email" className="h-10 text-xl rounded-md" id='correo' {...register('correo')} />
                        <label htmlFor="contrasena" className="pb-3 text-xl pt-3">Contraseña</label>
                        <input type="password" className="h-10 text-xl rounded-md" id='contrasena' {...register('contrasena')} />
                        <input type="submit" value="ACCEDER" className="bg-green-400 w-1/3 self-end mt-4 h-10 rounded-md font-semibold" />
                    </form>
                </div>
                <p>¿Has olvidado tu contraseña?</p>
            </div>
        </>
    )
}

export default LoginPage