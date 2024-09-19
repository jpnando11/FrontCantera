import axios from 'axios';
import { Evento } from '../types/eventos';

const baseURL = '/api/eventos';

export const obtenerEventos = async (): Promise<Evento[]> => {
  const response = await axios.get(baseURL);
  return response.data;
};

export const agregarEvento = async (nuevoEvento: Evento) => {
  await axios.post(baseURL, nuevoEvento);
};

export const editarEvento = async (id: string, eventoActualizado: Evento) => {
  await axios.put(`${baseURL}/${id}`, eventoActualizado);
};
