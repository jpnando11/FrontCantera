import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Curso } from "../types";


export const crearCurso = async (curso: Curso) => {
    try {
        const url = "/curso/createCurso"
        const { data } = await api.post<[]>(url, curso);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }

    }


}

export const listCurso = async () => {
    try {
        const url = "curso/listCursos"
        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }

}

export const listCursouno = async (id: string = '0') => {
    try {
        const url = `curso/listCurso/${id}`
        const { data } = await api.get(url);

        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }

}