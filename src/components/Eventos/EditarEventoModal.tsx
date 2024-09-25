import React, { useState, useEffect } from "react";
import { Evento } from "../../types";

interface EditarEventoModalProps {
  isOpen: boolean;
  onClose: () => void;
  evento?: Evento | null;
  onGuardar: (eventoEditado: Evento) => Promise<void>;
  onEliminar: (id: string) => Promise<void>;
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
      setTitulo(evento.title || "");
      setFecha(evento.start.toISOString().slice(0, 10));
      setHora(evento.start.toISOString().slice(11, 16));
      setLugar(evento.lugar || "");
      setDescripcion(evento.description || "");
    }
  }, [evento]);

  const handleGuardar = async () => {
    if (evento) {
      const eventoEditado: Evento = {
        ...evento,
        title: titulo,
        start: new Date(fecha + "T" + hora),
        lugar,
        description: descripcion,
      };
      await onGuardar(eventoEditado);
    }
  };

  return (
    <div>
      {isOpen && (
        <div>
          <h2>Editar Evento</h2>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título"
          />
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
          <input
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            placeholder="Lugar"
          />
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción"
          />
          <button onClick={handleGuardar}>Guardar</button>
          <button onClick={onClose}>Cerrar</button>
          <button onClick={() => onEliminar(evento?.id || "")}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default EditarEventoModal;
