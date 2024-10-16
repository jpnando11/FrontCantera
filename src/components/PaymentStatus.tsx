import React from 'react';
import { Payment } from '../types'; // Asegúrate de tener los tipos importados

interface PaymentStatusProps {
  payments: Payment[];
}

// Lógica para determinar el color del estado
const getStatusColor = (status: string) => {
  return status === "Pagado" ? 'green' : 'red';
};

// Componente principal `PaymentStatus`
const PaymentStatus: React.FC<PaymentStatusProps> = ({ payments }) => {
  return (
    <div>
      <table className="payment-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Documento Identidad</th>
            <th>Estudiante</th>
            <th>Celular</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.date}</td>
              <td>{payment.amount}</td>
              <td>
                <span style={{ color: getStatusColor(payment.status), fontWeight: 'bold' }}>
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentStatus;
