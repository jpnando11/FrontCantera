import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

interface EventosProps {
  eventos: any[];
  onEventClick: (evento: any) => void;  
}

const Eventos: React.FC<EventosProps> = ({ eventos, onEventClick }) => {

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '80%', padding: '20px' }}>
        <h2>Cronograma</h2>
        <Calendar
          localizer={localizer}
          events={eventos}  // Usar los eventos dinámicos
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={onEventClick}  // Permite editar al hacer clic en un evento
        />
      </div>
    </div>
  );
};

export default Eventos;
