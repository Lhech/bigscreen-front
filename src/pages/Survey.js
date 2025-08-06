import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import '../styles/Survey.css';

const Survey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showReview, setShowReview] = useState(false);

  const questions = [
    { id: 1, text: 'Votre adresse mail', type: 'B' },
    { id: 2, text: 'Votre âge', type: 'B' },
    { id: 3, text: 'Votre sexe', type: 'A', options: ['Homme', 'Femme', 'Préfère ne pas répondre'] },
    { id: 4, text: 'Nombre de personne dans votre foyer (adulte & enfants)', type: 'C' },
    { id: 5, text: 'Votre profession', type: 'B' },
    { id: 6, text: 'Quel marque de casque VR utilisez-vous ?', type: 'A', options: ['Oculus Quest', 'Oculus Rift/s', 'HTC Vive', 'Windows Mixed Reality', 'Valve index'] },
    { id: 7, text: 'Sur quel magasin d\'application achetez vous des contenus VR ?', type: 'A', options: ['SteamVR', 'Occulus store', 'Viveport', 'Windows store'] },
    { id: 8, text: 'Quel casque envisagez-vous d\'acheter dans un futur proche ?', type: 'A', options: ['Occulus Quest', 'Occulus Go', 'HTC Vive Pro', 'PSVR', 'Autre', 'Aucun'] },
    { id: 9, text: 'Au sein de votre foyer, combien de personnes utilisent votre casque VR pour regarder Bigscreen ?', type: 'C' },
    { id: 10, text: 'Vous utilisez principalement Bigscreen pour :', type: 'A', options: ['regarder la TV en direct', 'regarder des films', 'travailler', 'jouer en solo', 'jouer en équipe'] },
    { id: 11, text: 'Combien donnez-vous de point pour la qualité de l\'image sur Bigscreen ?', type: 'C' },
    { id: 12, text: 'Combien donnez-vous de point pour le confort d\'utilisation de l\'interface Bigscreen ?', type: 'C' },
    { id: 13, text: 'Combien donnez-vous de point pour la connexion réseau de Bigscreen ?', type: 'C' },
    { id: 14, text: 'Combien donnez-vous de point pour la qualité des graphismes 3D dans Bigscreen ?', type: 'C' },
    { id: 15, text: 'Combien donnez-vous de point pour la qualité audio dans Bigscreen ?', type: 'C' },
    { id: 16, text: 'Aimeriez-vous avoir des notifications plus précises au cours de vos sessions Bigscreen ?', type: 'A', options: ['Oui', 'Non'] },
    { id: 17, text: 'Aimeriez-vous pouvoir inviter un ami à rejoindre votre session via son smartphone ?', type: 'A', options: ['Oui', 'Non'] },
    { id: 18, text: 'Aimeriez-vous pouvoir enregistrer des émissions TV pour pouvoir les regarder ultérieurement ?', type: 'A', options: ['Oui', 'Non'] },
    { id: 19, text: 'Aimeriez-vous jouer à des jeux exclusifs sur votre Bigscreen ?', type: 'A', options: ['Oui', 'Non'] },
    { id: 20, text: 'Quelle nouvelle fonctionnalité devrait exister sur Bigscreen ?', type: 'B' }
  ];

  const handleInputChange = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      alert('Veuillez fournir une réponse avant de continuer.');
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowReview(true);
    }
  };

  const renderQuestionType = (question) => {
    switch (question.type) {
      case 'A':
        return (
          <div className="options-container">
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`option ${answers[currentQuestion] === option ? 'selected' : ''}`}
                onClick={() => handleInputChange(option)}
              >
                {option}
              </div>
            ))}
          </div>
        );
      case 'B':
        return (
          <div className="input-container">
            <input
              type="text"
              maxLength="255"
              value={answers[currentQuestion] || ''}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Votre réponse..."
            />
          </div>
        );
      case 'C':
        return (
          <div className="numeric-container">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className={`numeric-option ${answers[currentQuestion] === num ? 'selected' : ''}`}
                onClick={() => handleInputChange(num)}
              >
                {num}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  if (showReview) {
    return (
      <div className="survey-container">
        <Navbar />
        <div className="survey-form review-form">
          <h2>Réponses</h2>
          <div className="answers-grid">
            {questions.map((question, index) => (
              <div key={index} className="answer-card">
                <h3>Réponse: {String(index + 1).padStart(2, '0')}</h3>
                <p className="answer-text">{answers[index]}</p>
              </div>
            ))}
          </div>
          <button className="submit-button" onClick={() => alert('Survey submitted successfully!')}>Terminer</button>
        </div>
      </div>
    );
  }

  return (
    <div className="survey-container">
      <Navbar />
      <div className="survey-form">
        <div className="question-header">
          <h2>Question: {String(currentQuestion + 1).padStart(2, '0')}</h2>
        </div>
        <div className="question-text">
          <p>{questions[currentQuestion].text}</p>
        </div>
        {renderQuestionType(questions[currentQuestion])}
        <button className="submit-button" onClick={handleNext}>Suivant</button>
        <div className="progress-bar">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index === currentQuestion ? 'active' : ''} ${index < currentQuestion ? 'completed' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Survey;
