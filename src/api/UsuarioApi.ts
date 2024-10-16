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

export const getUser = async () => {
    try {
        const url = "auth/listUsuarioLogin"

        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }

}

export const getMaestro = async () => {
    try {
        const url = "auth/listMaestro"

        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }

}