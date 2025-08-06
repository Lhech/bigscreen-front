import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SurveyTable.css';

function SurveyTable() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
  };

  const questions = [
    { numero: 1, question: "Votre adresse mail", type: "text" },
    { numero: 2, question: "Votre âge", type: "number" },
    { numero: 3, question: "Votre sexe", type: "select" },
    { numero: 4, question: "Nombre de personnes dans votre foyer", type: "number" },
    { numero: 5, question: "Votre profession", type: "text" },
    { numero: 6, question: "Quel marque de casque VR utilisez-vous ?", type: "select" },
    { numero: 7, question: "Sur quel magasin d'application achetez-vous vos contenus VR ?", type: "select" },
    { numero: 8, question: "Quel casque envisagez-vous d'acheter dans un futur proche ?", type: "select" },
    { numero: 9, question: "Au quotidien, combien de temps utilisez-vous la VR ?", type: "range" },
    { numero: 10, question: "Vous utilisez principalement la VR pour...", type: "text" },
    { numero: 11, question: "Quelle note donneriez-vous à la qualité des graphismes ?", type: "range" },
    { numero: 12, question: "Quelle note donneriez-vous au confort d'utilisation de l'interface ?", type: "range" },
    { numero: 13, question: "Quelle note donneriez-vous à la qualité de la connexion réseau ?", type: "range" },
    { numero: 14, question: "Quelle note donneriez-vous à la qualité des graphismes ?", type: "range" },
    { numero: 15, question: "Quelle note donneriez-vous à la qualité audio ?", type: "range" },
    { numero: 16, question: "Aimeriez-vous avoir des notifications plus précises ?", type: "select" },
    { numero: 17, question: "Aimeriez-vous pouvoir inviter vos amis via leur mobile ?", type: "select" },
    { numero: 18, question: "Aimeriez-vous pouvoir enregistrer vos sessions de jeu ?", type: "select" },
    { numero: 19, question: "Aimeriez-vous avoir des jeux exclusifs sur la plateforme ?", type: "select" },
    { numero: 20, question: "Quelle nouvelle fonctionnalité aimeriez-vous voir apparaître ?", type: "text" }
  ];

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
          <div className={`menu-item ${location.pathname === '/survey' ? 'active' : ''}`} onClick={() => navigate('/survey')}>
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
      <div className="survey-table-container">
        <h1>Questionnaire</h1>
        <div className="table-wrapper">
          <table className="survey-table">
            <thead>
              <tr>
                <th>Numéro</th>
                <th>Question</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.numero}>
                  <td>{q.numero}</td>
                  <td>{q.question}</td>
                  <td>{q.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SurveyTable;