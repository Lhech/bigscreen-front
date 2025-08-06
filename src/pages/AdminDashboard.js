import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Responses from './Responses';
import SurveyTable from './SurveyTable';
import './AdminDashboard.css';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
  };

  const chartData = {
    labels: ['Image', 'Interface', 'Réseau', 'Graphismes', 'Audio'],
    datasets: [
      {
        label: 'Qualité',
        data: [25000, 22000, 21000, 25000, 29000],
        backgroundColor: '#6c5ce7',
      }
    ]
  };

  const pieData = {
    labels: ['StramVR', 'Oculus Store', 'Viveport', 'Windows Store'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ['#4834d4', '#ff7675', '#a29bfe', '#00b894'],
    }]
  };

  const usageData = {
    labels: ['Films', 'Jouer équipe', 'Jouer solo', 'Travailler'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ['#4834d4', '#ff7675', '#a29bfe', '#00b894'],
    }]
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>BigScreen</h2>
        </div>
        <div className="sidebar-menu">
          <div className={`menu-item ${location.pathname === '/admin' ? 'active' : ''}`} onClick={() => navigate('/admin')}>
            <span>Accueil</span>
          </div>
          <div className={`menu-item ${location.pathname === '/SurveyTable' ? 'active' : ''}`} onClick={() => navigate('/survey')}>
            <span>Questionnaire</span>
          </div>
          <div className={`menu-item ${location.pathname === '/responses' ? 'active' : ''}`} onClick={() => navigate('/responses')}>
            <span>Réponses</span>
          </div>
        </div>
        <div className="sidebar-footer">
          <div className="menu-item" onClick={handleLogout}>
            <span>Deconnection</span>
          </div>
        </div>
      </div>
      <div className="main-content">
        {location.pathname === '/responses' ? (
          <Responses />
        ) : location.pathname === '/SurveyTable' ? (
          <SurveyTable />
        ) : (
          <div className="dashboard-content">
            <h2>Qualité de l'expérience BigScreen</h2>
            <div className="chart-container">
              <Bar data={chartData} options={{ responsive: true }} />
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Store de contenu VR</h3>
                <div className="pie-chart">
                  <Pie data={pieData} options={{ responsive: true }} />
                </div>
              </div>
              <div className="stat-card">
                <h3>Usage principal de big screen</h3>
                <div className="pie-chart">
                  <Pie data={usageData} options={{ responsive: true }} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;