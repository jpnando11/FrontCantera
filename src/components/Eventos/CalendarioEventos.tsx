import React from "react";
import {Calendar,momentLocalizer,Event as CalendarEvent,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

interface EventoCalendario extends CalendarEvent {
  id: number;
  titulo: string;
  start: Date;
  end: Date;
}

interface EventosProps {
  eventos: EventoCalendario[];
  onEventClick: (evento: EventoCalendario) => void;
}

const CalendarioEventos: React.FC<EventosProps> = ({
  eventos,
  onEventClick,
}) => {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 p-5 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-5">
          Cronograma de Eventos
        </h2>
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={(event) => onEventClick(event)}
          className="bg-white border rounded-lg shadow-sm"
        />
      </div>
    </div>
  );
};

export default CalendarioEventos;
