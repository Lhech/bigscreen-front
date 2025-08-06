import React from 'react';
import './Responses.css';


function Responses() {
  // Sample responses data - in a real app, this would come from an API or database
  const responses = [
    {
      id: 1,
      email: 'user1@example.com',
      age: '25',
      gender: 'Homme',
      household: 2,
      profession: 'Developer',
      vrHeadset: 'Oculus Quest',
      store: 'Occulus store',
      futureHeadset: 'Valve index',
      usageFrequency: 3,
      primaryUse: 'regarder des films',
      imageQuality: 4,
      interfaceComfort: 5,
      networkQuality: 4,
      graphicsQuality: 5,
      audioQuality: 4,
      notifications: 'Oui',
      mobileInvite: 'Oui',
      tvRecording: 'Non',
      exclusiveGames: 'Oui',
      newFeature: 'Support for multiple languages'
    }
    // Add more sample responses as needed
  ];

  return (
    
    <div className="responses-container">
      <h1>Réponses au questionnaire</h1>
      <div className="responses-grid">
        {responses.map((response) => (
          <div key={response.id} className="response-card">
            <h2>Réponse #{response.id}</h2>
            <div className="response-details">
              <p><strong>Email:</strong> {response.email}</p>
              <p><strong>Âge:</strong> {response.age}</p>
              <p><strong>Genre:</strong> {response.gender}</p>
              <p><strong>Personnes dans le foyer:</strong> {response.household}</p>
              <p><strong>Profession:</strong> {response.profession}</p>
              <p><strong>Casque VR:</strong> {response.vrHeadset}</p>
              <p><strong>Store préféré:</strong> {response.store}</p>
              <p><strong>Futur casque:</strong> {response.futureHeadset}</p>
              <p><strong>Fréquence d'utilisation:</strong> {response.usageFrequency}/5</p>
              <p><strong>Utilisation principale:</strong> {response.primaryUse}</p>
              <p><strong>Qualité d'image:</strong> {response.imageQuality}/5</p>
              <p><strong>Confort d'interface:</strong> {response.interfaceComfort}/5</p>
              <p><strong>Qualité réseau:</strong> {response.networkQuality}/5</p>
              <p><strong>Qualité graphique:</strong> {response.graphicsQuality}/5</p>
              <p><strong>Qualité audio:</strong> {response.audioQuality}/5</p>
              <p><strong>Notifications améliorées:</strong> {response.notifications}</p>
              <p><strong>Invitation mobile:</strong> {response.mobileInvite}</p>
              <p><strong>Enregistrement TV:</strong> {response.tvRecording}</p>
              <p><strong>Jeux exclusifs:</strong> {response.exclusiveGames}</p>
              <p><strong>Nouvelle fonctionnalité souhaitée:</strong> {response.newFeature}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Responses;