import { NavLink, Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        <>
            <header className="border-b-black border-b-2 w-11/12 m-auto pt-20 pb-10">
                <div className="flex items-center space-x-4">
                    <img src="/logo.svg" alt="" className="w-10 " />
                    <p className="text-start">Academia Cantera Sports </p>
                    <img src="/polygon.svg" className="w-min" />
                    <p>Panel administrador</p>
                </div>
            </header>
            <main className="w-11/12 m-auto h-full">
                <div className="flex space-x-10">

                    <aside className="py-4 w-1/4 ">
                        <li className="list-none">
                            <NavLink to="/" className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block" : "py-2 ml-9 rounded-md px-3 w-full block"}>
                                Panel Administrador
                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block" : "py-2 ml-9 rounded-md px-3 w-full block"} to="/curso">
                                Curso
                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block" : "py-2 ml-9 rounded-md px-3 w-full block"}
                                to="/estudiante">
                                Estudiante
                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block" : "py-2 ml-9 rounded-md px-3 w-full block"}
                                to="/pagos">

                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block" : "py-2 ml-9 rounded-md px-3 w-full block"}
                                to="/reportes">
                                Reportes

                            </NavLink>
                        </li>
                        <li className="list-none">
                            <NavLink
                                className={({ isActive }) => isActive ? "py-2 ml-9 bg-gray-300 rounded-md px-3 w-full block" : "py-2 ml-9 rounded-md px-3 w-full block"}
                                to="/infromes">
                                Informes
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