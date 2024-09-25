import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

interface EventosProps {
  onEventClick: (evento: any) => void;
}

const Eventos: React.FC<EventosProps> = ({ onEventClick }) => {
  const events = [
    {
      title: 'Entrenamiento',
      start: new Date(2024, 8, 11, 14, 0),
      end: new Date(2024, 8, 11, 15, 0),
    },
    {
      title: 'Partido',
      start: new Date(2024, 8, 13, 14, 0),
      end: new Date(2024, 8, 13, 15, 0),
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '80%', padding: '20px' }}>
        <h2>Cronograma</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={(event) => onEventClick(event)} 
        />
      </div>
    </div>
  );
};

export default Eventos;
