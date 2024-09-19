import React, { useState } from 'react';
import Eventos from '../components/Eventos/Eventos';
import AgregarEventoModal from '../components/Eventos/AgregarEventoModal';
import EditarEventoModal from '../components/Eventos/EditarEventoModal';

const EventosPage: React.FC = () => {            
  const [isAgregarModalOpen, setAgregarModalOpen] = useState(false);
  const [isEditarModalOpen, setEditarModalOpen] = useState(false);
  const [eventoSeleccionado, setEventoSeleccionado] = useState<any>(null);
  const [eventos, setEventos] = useState<any[]>([]); 

  const handleAbrirAgregarModal = () => setAgregarModalOpen(true);
  const handleCerrarAgregarModal = () => setAgregarModalOpen(false);

  const handleAbrirEditarModal = (evento: any) => {
    setEventoSeleccionado(evento);
    setEditarModalOpen(true);
  };

  const handleCerrarEditarModal = () => setEditarModalOpen(false);

  const handleAgregarEvento = (nuevoEvento: any) => {
    setEventos([...eventos, nuevoEvento]);
    setAgregarModalOpen(false);
  };

  const handleGuardarEdicion = (eventoEditado: any) => {
    setEventos(eventos.map(evento => 
      evento.start === eventoSeleccionado.start ? eventoEditado : evento
    ));
    setEditarModalOpen(false);
  };

  return (
    <div>
      
      <Eventos eventos={eventos} onEventClick={handleAbrirEditarModal} />
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <button style={{ marginRight: '10px' }} onClick={handleAbrirAgregarModal}>Agregar evento</button>
      </div>

      <AgregarEventoModal 
        isOpen={isAgregarModalOpen} 
        onClose={handleCerrarAgregarModal} 
        onAgregar={handleAgregarEvento}  
      />

      <EditarEventoModal 
        isOpen={isEditarModalOpen} 
        onClose={handleCerrarEditarModal} 
        evento={eventoSeleccionado} 
        onGuardar={handleGuardarEdicion}
      />

      <div style={{ marginTop: '20px' }}>
        <h3>Eventos Agregados:</h3>
        <ul>
          {eventos.map((evento, index) => (
            <li key={index}>
              {evento.title} - {evento.start.toLocaleDateString()} {evento.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventosPage;
