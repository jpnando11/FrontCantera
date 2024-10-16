import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Estudiante } from "../types";


export const crearEstudiante = async (estudiante: Estudiante) => {
    try {
        const url = "auth/registro"

        const { data } = await api.post(url, estudiante);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export const listEstudiantes = async (page: number = 1) => {
    try {
        console.log(page);

        const url = `auth/listEtudiantes?page=${page}`
        console.log(url);


        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export const listEstudiante = async (id_estudiante: string | undefined) => {
    try {
        const url = `auth/listEtudiante/${id_estudiante}`

        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export const editarEstudiante = async (estudiante: Estudiante) => {
    try {
        const url = "auth/editarEstudiante"
        const { data } = await api.post(url, estudiante);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}