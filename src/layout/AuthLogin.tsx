import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth";


const AuthLogin = () => {
    const { error, isLoading } = useAuth();

    if (isLoading) { return <p>Cargando</p> }

    if (!error) {
        return <Navigate to={"/"} />
    }
    return (
        <Outlet />
    )
}

export default AuthLogin