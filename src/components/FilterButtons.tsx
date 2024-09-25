import React from 'react';

interface FilterButtonsProps {
  onFilterChange: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onFilterChange }) => {
  return (
    <div className="filters-container">
      <button onClick={() => onFilterChange('today')}>Hoy</button>
      <button onClick={() => onFilterChange('this_week')}>Esta semana</button>
      <button onClick={() => onFilterChange('this_month')}>Este mes</button>
      <button onClick={() => onFilterChange('last_30_days')}>Últimos 30 días</button>
      <button onClick={() => onFilterChange('custom')}>Personalizado</button>
      <button onClick={() => onFilterChange('0-100')}>$0 - $100</button>
      <button onClick={() => onFilterChange('100-500')}>$100 - $500</button>
    </div>
  );
};

export default FilterButtons;
