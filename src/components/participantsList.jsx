import React, { useContext } from 'react';
import { ParticipantsContext } from '../context/ParticipantsContext';
import './participant.css';
import { useNavigate } from 'react-router-dom';
 
const ParticipantsList = () => {
  const { participants, removeParticipant } = useContext(ParticipantsContext);
  const navigate = useNavigate();
 

  function navigateToConfirmation() {
    navigate('/Confirmation');
  }
  return (
    <div className='participant-container'>
        <div>
      <h2 className='page-title participant-heading'>Participants List</h2>
      {participants.length === 0 ? (
        <p>0 participants</p>
      ) : (
        <ul>
          {participants.map((participant) => (
            <li key={participant.id}>
              {participant.name} - {participant.email} - {participant.phone} - {participant.birthdate}
              <button onClick={() => removeParticipant(participant.id)}>
                <img className="delete-icon" src="/images/vector-delete.png" alt="Delete" />
              </button>
            </li>
          ))}
        </ul>
      )}
      </div>
      <div className='submit-button'>
        <button
          onClick={navigateToConfirmation}
          disabled={participants.length === 0}
          style={{
            backgroundColor: participants.length === 0 ? '#ACACAC' : '#FF6B00',
            width: '100%',
            height: '3em',
            border: 'none',
            color: 'white',
            cursor: participants.length === 0 ? 'not-allowed' : 'pointer',
         
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
 
export default ParticipantsList;
 
 