import React, { useState, useEffect } from 'react';

interface EditarEventoModalProps {
  isOpen: boolean;
  onClose: () => void;
  evento: any;
  onGuardar: (eventoEditado: any) => void;
}

const EditarEventoModal: React.FC<EditarEventoModalProps> = ({ isOpen, onClose, evento, onGuardar }) => {
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    if (evento) {
      setTitulo(evento.title || '');
      setFecha(evento.start ? evento.start.toISOString().substring(0, 10) : '');
      setHora(evento.start ? evento.start.toISOString().substring(11, 16) : '');
    }
  }, [evento]);

  const handleGuardarEvento = () => {
    const eventoEditado = {
      ...evento,
      title: titulo,
      start: new Date(`${fecha}T${hora}`),
      end: new Date(`${fecha}T${hora}`),
    };
    onGuardar(eventoEditado);  // Actualiza el evento
    onClose();  // Cierra el modal
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Evento</h2>
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
        <button onClick={handleGuardarEvento}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default EditarEventoModal;
