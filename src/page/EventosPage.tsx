import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Eventos from "../components/Eventos/Eventos";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
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
  const [eventoSeleccionado, setEventoSeleccionado] = useState<Evento | null>(null);

  const { data, isLoading } = useQuery<Evento[]>(["eventos"], listarEventos);

  useEffect(() => {
    if (data) {
      const eventosFormateados = data.map((evento) => ({
        id: evento.id,
        title: evento.titulo,
        start: new Date(evento.fecha + "T" + evento.hora),
        end: new Date(evento.fecha + "T" + evento.hora),
        descripcion: evento.descripcion,
        lugar: evento.lugar,
      }));
      setEventos(eventosFormateados);
    }
  }, [data]);

  if (isLoading) {
    return <p>Cargando eventos...</p>;
  }

  
  const handleAgregarEvento = async (nuevoEvento: Evento) => {
    try {
      const eventoCreado = await crearEvento(nuevoEvento);
      if (eventoCreado) {
        setEventos((prevEventos) => [...prevEventos, eventoCreado]);
        toast.success("✅ Evento creado con éxito", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progressClassName: "bg-green-500 h-1 rounded",
        });
      }
      setAgregarModalOpen(false);
    } catch (error) {
      toast.error("🚫 Error al crear el evento", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressClassName: "bg-red-500 h-1 rounded",
      });
    }
  };

  // Función para manejar la edición de un evento
  const handleGuardarEdicion = async (eventoEditado: Evento) => {
    try {
      const eventoActualizado = await actualizarEvento(eventoEditado.id.toString(), eventoEditado);
      if (eventoActualizado) {
        setEventos(
          eventos.map((evento) =>
            evento.id === eventoSeleccionado?.id ? eventoEditado : evento
          )
        );
        toast.success("✅ Evento actualizado con éxito", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progressClassName: "bg-blue-500 h-1 rounded",
        });
      }
      setEditarModalOpen(false);
    } catch (error) {
      toast.error("🚫 Error al actualizar el evento", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressClassName: "bg-red-500 h-1 rounded",
      });
    }
  };

  // Función para eliminar un evento
  const handleEliminarEvento = async (id: string) => {
    try {
      await eliminarEvento(id);
      setEventos(eventos.filter((evento) => evento.id.toString() !== id));
      toast.success("✅ Evento eliminado con éxito", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressClassName: "bg-yellow-500 h-1 rounded",
      });
    } catch (error) {
      toast.error("🚫 Error al eliminar el evento", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressClassName: "bg-red-500 h-1 rounded",
      });
    }
  };

  const handleAbrirAgregarModal = () => setAgregarModalOpen(true);
  const handleCerrarAgregarModal = () => setAgregarModalOpen(false);
  const handleAbrirEditarModal = (evento: Evento) => {
    setEventoSeleccionado(evento);
    setEditarModalOpen(true);
  };
  const handleCerrarEditarModal = () => {
    setEditarModalOpen(false);
    setEventoSeleccionado(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Gestión de Eventos</h1>

      {/* Listado de eventos */}
      <Eventos eventos={eventos} onEventClick={handleAbrirEditarModal} />

      {/* Botón para abrir el modal de agregar evento */}
      <div className="mt-4 text-right">
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleAbrirAgregarModal}>
          Agregar evento
        </button>
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

      {/* Componente de Toastify */}
      <ToastContainer />
    </div>
  );
};

export default EventosPage;
