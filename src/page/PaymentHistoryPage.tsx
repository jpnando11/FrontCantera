import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Importar correctamente el plugin de autotable
import PaymentStatus from '../components/PaymentStatus'; // Asegúrate de que PaymentStatus esté bien importado
import axios from '../lib/axios';

// Añadir las propiedades faltantes a la interfaz
interface PaymentData {
  id: number;
  date: string;
  amount: number;
  status: string;
  id_usuario: number;
  fecha?: string;
  documentoIdentidad?: string;
  estudiante?: string;
  celular?: string;
  estado?: string;
}

const PaymentHistoryPage = () => {
  const [payments, setPayments] = useState<PaymentData[]>([]);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  // Función para generar y descargar el PDF
  const generatePDF = () => {
    const doc = new jsPDF(); // Crear una nueva instancia de jsPDF

    doc.text('Reporte de Pagos', 20, 10); // Título del PDF

    // Añadir tabla con los datos de los pagos
    doc.autoTable({
      head: [['Fecha', 'Documento Identidad', 'Estudiante', 'Celular', 'Estado']],
      body: payments.map((payment) => [
        payment.fecha || '',
        payment.documentoIdentidad || '',
        payment.estudiante || '',
        payment.celular || '',
        payment.estado || '',
      ]),
    });

    doc.save('reporte_pagos.pdf'); // Descargar el PDF con el nombre "reporte_pagos.pdf"
  };

  return (
    <div className="payment-history-page">
      <h1 className="font-bold text-4xl text-center text-gray-700 mb-4">Reportes</h1>

      {/* Contenedor con flexbox para alinear DatePickers y el botón */}
      <div className="flex justify-between mb-4 items-center">
        <div className="flex">
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date ?? undefined)}
            startDate={startDate}
            endDate={endDate}
            placeholderText="Selecciona la fecha de inicio"
            className="mx-2 p-2 border border-gray-300 rounded"
          />

          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date ?? undefined)}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Selecciona la fecha de fin"
            className="mx-2 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Botón para exportar a PDF alineado a la derecha */}
        <button
          onClick={generatePDF}
          className="ml-auto px-4 py-2 bg-gray-500 text-white rounded"
        >
          Exportar a PDF
        </button>
      </div>

      <PaymentStatus payments={payments} />
    </div>
  );
};

export default PaymentHistoryPage;
