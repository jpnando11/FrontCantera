import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Payment } from "../types";


export const crearRegistro = async (registro: Payment) => {
    try {
        const url = "auth/registro"
        console.log(registro);

        const { data } = await api.post(url, registro);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export const listEstudiante = async () => {
    try {
        const url = "auth/listEtudiantes"

        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}