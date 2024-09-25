import { useQuery } from "react-query"
import { getUser } from "../api/UsuarioApi"

export const useAuth = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['usuario'],
        retry: 1,
        queryFn: getUser,
        refetchOnWindowFocus: false
    })

    return {
        data, error, isLoading
    }
}