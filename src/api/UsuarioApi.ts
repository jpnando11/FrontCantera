import { isAxiosError } from "axios";
import api from "../lib/axios";


export const login = async (login: any) => {
    try {
        const url = "auth/login"

        const { data } = await api.post(url, login);
        localStorage.setItem('AUTH_TOKEN', data);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}