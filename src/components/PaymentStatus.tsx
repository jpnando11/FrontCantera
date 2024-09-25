import React from 'react';

interface PaymentStatusProps {
  status: string;
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({ status }) => {
  const getStatusColor = (status: string) => {
    return status === 'Pagado' ? 'green' : 'red';
  };

  return (
    <span style={{ color: getStatusColor(status), fontWeight: 'bold' }}>
      {status}
    </span>
  );
};

export default PaymentStatus;
