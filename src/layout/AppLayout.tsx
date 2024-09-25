import { Navigate, NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useQueryClient } from "react-query";


const AppLayout = () => {
    const { error, isLoading } = useAuth();

    if (isLoading) { return <p>Cargando</p> }

    if (error) {
        return <Navigate to={"/login"} />
    }
    const queryClient = useQueryClient()
    const logout = () => {
        localStorage.removeItem('AUTH_TOKEN');
        queryClient.invalidateQueries({ queryKey: ['usuario'] })

    }
    return (
        <>
            <header className="border-b-black border-b-2 w-11/12 m-auto pt-20 pb-5 flex justify-between">
                <div className="flex items-center space-x-4 font-semibold">
                    <img src="/logo.svg" alt="" className="w-10 " />
                    <p className="text-start">Academia Cantera Sports </p>
                    <img src="/polygon.svg" className="w-min" />
                    <p>Panel administrador</p>
                </div>

                <button className="flex flex-col items-center" onClick={() => logout()}>
                    <img src="/cerrar.svg" className="w-9" />
                    <p className="font-semibold">Cerrar Sesion</p>
                </button>

            </header>
            <main className="w-11/12 m-auto h-full">
                <div className="flex space-x-10">

                    <aside className="py-4 w-1/4 ">
                        <li className="list-none">
                            <NavLink to="/" className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block font-semibold" : "py-2 ml-9 rounded-md px-3 w-full block font-semibold"}>
                                Panel Administrador
                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block font-semibold" : "py-2 ml-9 rounded-md px-3 w-full block font-semibold"} to="/curso">
                                Curso
                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block font-semibold" : "py-2 ml-9 rounded-md px-3 w-full block font-semibold"}
                                to="/estudiante">
                                Estudiante
                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block font-semibold" : "py-2 ml-9 rounded-md px-3 w-full block font-semibold"}
                                to="/pagos">
                                Pagos
                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block font-semibold" : "py-2 ml-9 rounded-md px-3 w-full block font-semibold"}
                                to="/reportes">
                                Reportes

                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block font-semibold" : "py-2 ml-9 rounded-md px-3 w-full block font-semibold"}
                                to="/infromes">
                                Informes
                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block font-semibold" : "py-2 ml-9 rounded-md px-3 w-full block font-semibold"}
                                to="/usuario">
                                Usuario
                            </NavLink>
                        </li>
                    </aside>


                    <Outlet />

                </div>
            </main>
        </>
    )
}

export default AppLayout