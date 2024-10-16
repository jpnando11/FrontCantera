import { isAxiosError } from "axios";
import api from "../lib/axios";
import { Evento } from "../types";


export const crearEvento = async (evento: Evento) => {
    try {
        const url = "api/eventos/crearEvento";
        console.log("Creando evento");
        const { data } = await api.post<[]>(url, evento);
        console.log(" Evento creado con exito.");
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
        console.error("Hubo un error creando el evento:", error);
    }
}


export const listarEventos = async () => {
    try {
        const url = "api/eventos/listEventos";
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}


export const obtenerEventoPorId = async (id: string = '0') => {
    try {
        const url = `api/eventos/obtenerEvento/${id}`;
        const { data } = await api.get(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}


export const actualizarEvento = async (id: string, eventoActualizado: Evento) => {
    try {
        const url = `api/eventos/actualizarEvento/${id}`;
        const { data } = await api.put<[]>(url, eventoActualizado);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}


export const eliminarEvento = async (id: string) => {
    try {
        const url = `api/eventos/eliminarEvento/${id}`;
        const { data } = await api.delete<[]>(url);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}
