import React from 'react';
import PaymentStatus from './PaymentStatus';
import { Payment } from '../types';

interface PaymentTableProps {
  payments: Payment[];
}

const PaymentTable: React.FC<PaymentTableProps> = ({ payments }) => {
  return (
    <table className="payment-table">
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Cantidad</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {payments.map((payment) => (
          <tr key={payment.id}>
            <td>{payment.date}</td>
            <td>${payment.amount}</td>
            <td>
              <PaymentStatus status={payment.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentTable;
