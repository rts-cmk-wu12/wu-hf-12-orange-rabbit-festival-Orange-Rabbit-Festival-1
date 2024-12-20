// src/context/ParticipantsContext.js
/*import React, { createContext, useState } from 'react';

export const ParticipantsContext = createContext();

export const ParticipantsProvider = ({ children }) => {
  const [participants, setParticipants] = useState([]);

  const addParticipant = (participant) => {
    setParticipants([...participants, participant]);
  };

  const removeParticipant = (id) => {
    setParticipants(participants.filter((participant) => participant.id !== id));
  };

  const clearParticipants = () => {
    setParticipants([]);
  };

  return (
    <ParticipantsContext.Provider value={{ participants, addParticipant, removeParticipant, clearParticipants }}>
      {children}
    </ParticipantsContext.Provider>
  );
};*/
// src/context/ParticipantsContext.js
import React, { createContext, useState } from 'react';

export const ParticipantsContext = createContext();

export const ParticipantsProvider = ({ children }) => {
  const [participants, setParticipants] = useState([]);

  const addParticipant = (participant) => {
    setParticipants([...participants, participant]);
  };

  const removeParticipant = (id) => {
    setParticipants(participants.filter(participant => participant.id !== id));
  };

  return (
    <ParticipantsContext.Provider value={{ participants, addParticipant, removeParticipant }}>
      {children}
    </ParticipantsContext.Provider>
  );
};

