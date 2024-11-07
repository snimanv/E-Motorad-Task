import React from 'react';

const KPICard = ({ title, value }) => {
  return (
    <div className="kpi-card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default KPICard;