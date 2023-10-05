import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Dashboard.css';

function Dashboard() {
  const overallTraffic = 4000; 
  const totalUsers = 250; 
  const activeUsers = 150;
  const eComActivity = 1200; 
  const totalSales = 15000; 

  const categoryData = {
    dinning: [
      { name: 'Wooden Table', sales: 100 },
      { name: 'Dinning Table', sales: 150 },
      
    ],
    sofa: [
      { name: 'Fabric Sofa Set', sales: 85 },
      { name: 'Royal Sofa Set', sales: 120 },
      
    ],
    bed: [
      { name: 'Wooden Bet Set', sales: 200 },
      { name: 'COSMO BedRoom Set', sales: 100 },
      
    ],
  };

  const totalSalesByCategory = {
    dinning: categoryData.dinning.reduce((total, item) => total + item.sales, 0),
    sofa: categoryData.sofa.reduce((total, item) => total + item.sales, 0),
    bed: categoryData.bed.reduce((total, item) => total + item.sales, 0),
  };

  const percentagesByCategory = {
    dinning: ((totalSalesByCategory.dinning / totalSales) * 100).toFixed(2),
    sofa: ((totalSalesByCategory.sofa / totalSales) * 100).toFixed(2),
    bed: ((totalSalesByCategory.bed / totalSales) * 100).toFixed(2),
  };

  return (
    <div className="dashboard">
      <h1>Online Furniture Dashboard</h1>
      <div className="dashboard-stats">
        <div className="dashboard-stat">
          <h2>Overall Traffic</h2>
          <p>{overallTraffic} visits</p>
        </div>
        <div className="dashboard-stat">
          <h2>Total Users</h2>
          <p>{totalUsers} users</p>
        </div>
        <div className="dashboard-stat">
          <h2>Active Users</h2>
          <p>{activeUsers} online</p>
        </div>
        <div className="dashboard-stat">
          <h2>E-commerce Activity</h2>
          <p>{eComActivity} orders placed</p>
        </div>
      </div>
      <div className="category-links">
        <Link to="/dinning">Dinning Table ({percentagesByCategory.dinning}%)</Link>
        <Link to="/sofa">Sofa ({percentagesByCategory.sofa}%)</Link>
        <Link to="/bed">Bed ({percentagesByCategory.bed}%)</Link>
      </div>
    </div>
  );
}

export default Dashboard;
