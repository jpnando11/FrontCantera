import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Inscripciones } from "../types";

export const crearIncripcion = async (incripcion: Inscripciones) => {
    try {
        const url = "incripciones/incripcionCurso"

        const { data } = await api.post(url, incripcion);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}