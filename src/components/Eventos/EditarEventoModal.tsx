import React, { useState, useEffect } from "react";
import { Evento } from "../../types";

interface EditarEventoModalProps {
  isOpen: boolean;
  onClose: () => void;
  evento?: Evento | null;
  onGuardar: (eventoEditado: Evento) => Promise<void>;
  onEliminar: (id: number) => Promise<void>;
}

const EditarEventoModal: React.FC<EditarEventoModalProps> = ({
  isOpen,
  onClose,
  evento,
  onGuardar,
  onEliminar,
}) => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [lugar, setLugar] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (evento) {
      setTitulo(evento.titulo || "");
      setFecha(evento.fecha);
      setHora(evento.hora);
      setLugar(evento.lugar || "");
      setDescripcion(evento.descripcion || "");
    }
  }, [evento]);

  const handleGuardar = async () => {
    if (evento) {
      const eventoEditado: Evento = {
        ...evento,
        titulo,
        fecha,
        hora,
        lugar,
        descripcion,
      };
      await onGuardar(eventoEditado);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Editar Evento</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Fecha:</label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Hora:</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Lugar:</label>
          <input
            type="text"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            placeholder="Lugar"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
          />
        </div>
        <div className="flex justify-between space-x-4">
          <button
            onClick={() => onEliminar(evento?.id!)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all"
          >
            Eliminar
          </button>
          <div className="flex space-x-4">
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all"
            >
              Cerrar
            </button>
            <button
              onClick={handleGuardar}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarEventoModal;
