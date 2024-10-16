import React, { useState, useEffect } from 'react';

interface AgregarEventoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgregar: (nuevoEvento: any) => void;
}

const AgregarEventoModal: React.FC<AgregarEventoModalProps> = ({ isOpen, onClose, onAgregar }) => {
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setTitulo('');
      setFecha('');
      setHora('');
    }
  }, [isOpen]);

  const handleAgregarEvento = () => {
    const nuevoEvento = {
      titulo: titulo,
      fecha: fecha,
      hora: hora,
      descripcion: "Evento creado desde el modal",
      lugar: "Por definir",
    };
    onAgregar(nuevoEvento);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Agregar Evento</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
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
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Hora:</label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={handleAgregarEvento}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgregarEventoModal;
