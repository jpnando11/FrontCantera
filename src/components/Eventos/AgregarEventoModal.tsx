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
      title: titulo,
      start: new Date(`${fecha}T${hora}`),
      end: new Date(`${fecha}T${hora}`), 
    };
    onAgregar(nuevoEvento);  
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Agregar Evento</h2>
        <label>
          Título:
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <label>
          Fecha:
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </label>
        <label>
          Hora:
          <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
        </label>
        <button onClick={handleAgregarEvento}>Agregar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default AgregarEventoModal;
