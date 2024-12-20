
import React, { useContext } from 'react';
import { ParticipantsContext } from '../context/PerticipantsContext';
import '../styles/pages/perticipant.scss';
import { useNavigate } from 'react-router-dom'; 
export default function ParticipantsList() {
  const { participants, removeParticipant, clearParticipants } = useContext(ParticipantsContext);
  const navigate = useNavigate();
  async function submitHandler() {
    const payload = {
      main_participant: participants[0] || {},
      sub_participants: participants.slice(1),
    };

    try {
      const response = await fetch('https://example.com/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      clearParticipants(); // Clear participants after successful submission
    } catch (error) {
      console.error('Error:', error);
    }
  }
  function navigateToConfirmation() {
    navigate('/Confirmation'); 
  }

  return (
    <div className='participant-container'>
      <h2>Participants List</h2>
      {participants.length === 0 ? (
        <p>No participants added yet</p>
      ) : (
        <ul>
          {participants.map((participant) => (
            <li key={participant.id}>
              <h3>{participant.name}</h3>
              <p>Email: {participant.email}</p>
              <p>Phone: {participant.phone}</p>
              <p>Birthdate: {participant.birthdate}</p>
              <button onClick={() => removeParticipant(participant.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {participants.length > 0 && (
        <button onClick={navigateToConfirmation}>Submit to API</button>
      )}
    </div>
  );
}
