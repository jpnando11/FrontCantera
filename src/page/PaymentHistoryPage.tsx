import React, { useState, useEffect } from 'react';
import FilterButtons from '../components/FilterButtons';
import PaymentTable from '../components/PaymentTable';
import axios from '../lib/axios';
import { Payment } from '../types';

const PaymentHistoryPage: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    // Aquí puedes aplicar el filtro si es necesario
    axios.get('/api/payments')
      .then((response) => setPayments(response.data))
      .catch((error) => console.error('Error fetching payments:', error));
  }, [filter]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    // Aquí puedes hacer una petición filtrada a la API
  };

  return (
    <div className="payment-history-page">
      <h1>Historial de pagos</h1>
      <FilterButtons onFilterChange={handleFilterChange} />
      <PaymentTable payments={payments} />
    </div>
  );
};

export default PaymentHistoryPage;
