import React from 'react';
import KPICard from '../components/KPICard';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import AddProfile from '../components/AddProfile';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard Sidebar</h2>
        <p>Dashboard</p>
        <p>Transactions</p>
      </div>
      <div className="main-content">
        <h2>Dashboard</h2>
        <div className="kpi-row">
          <KPICard title="KPI 1" value="100" />
          <KPICard title="KPI 2" value="200" />
          <KPICard title="KPI 3" value="300" />
          <KPICard title="KPI 4" value="400" />
        </div>
        <div>
          <BarChart />
        </div>
        <div className="chart-row">
          <PieChart />
          <AddProfile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;