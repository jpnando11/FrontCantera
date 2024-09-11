import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Estudiante } from "../types";


export const crearEstudiante = async (estudiante: Estudiante) => {
    try {
        const url = "auth/registro"
        console.log(estudiante);

        const { data } = await api.post(url, estudiante);
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