import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Eventos from "../components/Eventos/Eventos";
import { toast } from "react-toastify";
import AgregarEventoModal from "../components/Eventos/AgregarEventoModal";
import EditarEventoModal from "../components/Eventos/EditarEventoModal";
import {
  listarEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} from "../api/EventosApi";
import { Evento } from "../types";

const EventosPage: React.FC = () => {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [isAgregarModalOpen, setAgregarModalOpen] = useState(false);
  const [isEditarModalOpen, setEditarModalOpen] = useState(false);
  const [eventoSeleccionado, setEventoSeleccionado] = useState<Evento | null>(
    null
  );

  // useQuery para listar los eventos
  const { data, isLoading } = useQuery<Evento[]>(["eventos"], listarEventos);

  useEffect(() => {
    if (data) {
      setEventos(data);
    }
  }, [data]);

  if (isLoading) {
    return <p>Cargando eventos...</p>;
  }

  // Función para manejar la creación de un evento
  const handleAgregarEvento = async (nuevoEvento: Evento) => {
    try {
      const eventoCreado = await crearEvento(nuevoEvento);
      if (eventoCreado) {
        setEventos([...eventoCreado]);
        toast.success("Evento creado con éxito");
      }
      setAgregarModalOpen(false);
    } catch (error) {
      toast.error("Error al crear el evento");
    }
  };

  // Función para manejar la edición de un evento
  const handleGuardarEdicion = async (eventoEditado: Evento) => {
    try {
      const eventoActualizado = await actualizarEvento(
        eventoEditado.id,
        eventoEditado
      );
      if (eventoActualizado) {
        setEventos(
          eventos.map((evento) =>
            evento.id === eventoSeleccionado?.id ? eventoEditado : evento
          )
        );
        toast.success("Evento actualizado con éxito");
      }
      setEditarModalOpen(false);
    } catch (error) {
      toast.error("Error al actualizar el evento");
    }
  };

  // Función para eliminar un evento
  const handleEliminarEvento = async (id: string) => {
    try {
      await eliminarEvento(id);
      setEventos(eventos.filter((evento) => evento.id !== id));
      toast.success("Evento eliminado con éxito");
    } catch (error) {
      toast.error("Error al eliminar el evento");
    }
  };

  const handleAbrirEditarModal = (evento: Evento) => {
    setEventoSeleccionado(evento);
    setEditarModalOpen(true);
  };

  const handleCerrarEditarModal = () => {
    setEditarModalOpen(false);
    setEventoSeleccionado(null);
  };

  const handleAbrirAgregarModal = () => setAgregarModalOpen(true);
  const handleCerrarAgregarModal = () => setAgregarModalOpen(false);

  return (
    <div>
      <h1>Gestión de Eventos</h1>

      {/* Listado de eventos */}
      <Eventos eventos={eventos} onEventClick={handleAbrirEditarModal} />

      {/* Botón para abrir el modal de agregar evento */}
      <div style={{ marginTop: "20px", textAlign: "right" }}>
        <button onClick={handleAbrirAgregarModal}>Agregar evento</button>
      </div>

      {/* Modal para agregar evento */}
      <AgregarEventoModal
        isOpen={isAgregarModalOpen}
        onClose={handleCerrarAgregarModal}
        onAgregar={handleAgregarEvento}
      />

      {/* Modal para editar evento */}
      {eventoSeleccionado && (
        <EditarEventoModal
          isOpen={isEditarModalOpen}
          onClose={handleCerrarEditarModal}
          evento={eventoSeleccionado}
          onGuardar={handleGuardarEdicion}
          onEliminar={handleEliminarEvento}
        />
      )}

      {/* Listado de eventos agregados */}
      <div style={{ marginTop: "20px" }}>
        <h3>Eventos Agregados:</h3>
        <ul>
          {eventos.map((evento) => (
            <li key={evento.id}>
              {evento.title} - {new Date(evento.start).toLocaleDateString()}{" "}
              {new Date(evento.start).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventosPage;
