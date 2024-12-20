import React, { useState, useEffect } from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import '../style/index.css';

const Participants = () => {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const handleStorageChange = () => {
            const storedData = localStorage.getItem('formData');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setParticipants([JSON.parse(storedData)]);
            }
        };

        handleStorageChange();
        window.addEventListener('storage', handleStorageChange);

        const storageCheckInterval = setInterval(handleStorageChange, 50);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(storageCheckInterval);
        };
    }, []);
        
    return (
        <div className='participant-wrapper'>
            <div className="participant-container">
                {participants.length > 0 && participants.map((participant, index) => (
                    <div key={index} className="participant-card">
                        <h3>{participant.name}</h3>
                        <p>Birthdate: {participant.birthdate}</p>
                        <p>Email: {participant.email}</p>
                        <p>Phone number: {participant.phone}</p>
                        <button
                            onClick={async () => {
                                const updatedParticipants = participants.filter((_, i) => i !== index);
                                await setParticipants(updatedParticipants);
                                if (updatedParticipants.length === 0) {
                                    await localStorage.removeItem('formData');
                                } else {
                                    await localStorage.setItem('formData', JSON.stringify(updatedParticipants[0]));
                                }
                            }}

                            className="delete-btn"><BsFillTrash3Fill />
                        </button>
                    
                    </div>
                    
                ))}
                
                <div className="participant-footer">
                <a className='footer-link' href="/complete" style={{
                    backgroundColor: participants.length > 0 ? '#ff6b00' : '#acacac', transition: 'background-color 0.3s ease'
                    }}>Go to checkout <FaArrowRightLong className='footer-arrow-icon'/></a>
            </div>
            </div>
            
            
        </div>
    );
};

export default Participants;