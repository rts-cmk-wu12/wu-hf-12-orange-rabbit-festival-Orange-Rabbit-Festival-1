import React, { useRef, useContext, useState } from 'react';
import { ParticipantsContext } from '../context/ParticipantsContext';
import '../styles/pages/signup.scss';
import NameInput from '../components/NameInput';
import BirthdateInput from '../components/BirthdateInput';
import ParticipantsList from '../components/participantsList';
 
export default function Signup() {
  const { addParticipant } = useContext(ParticipantsContext);
  const formElement = useRef(null);
  const [participantId, setParticipantId] = useState(0);
 
  function addParticipantHandler(event) {
    event.preventDefault();
 
    const formData = new FormData(formElement.current);
    const participant = {
      id: participantId,
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      birthdate: formData.get('birthdate'),
    };
 
    addParticipant(participant);
    setParticipantId(participantId + 1);
    formElement.current.reset();
  }
 
  return (
    <div className='content-container'>
      <div className='image-container'>
        <img src="/images/front-image.png" alt="" />
      </div>
      <div className='form-container'>
        <div className='form-heading-section'>
          <h2 className='page-title'>Sign up for the event</h2>
          <h1>Orange Rabbit Festival 2023</h1>
          <div className='flex'>
            <img src="images/date-icon.png" alt="" />
            <h2>24 June 2025 – 1 July 2025</h2>
          </div>
          <div className='flex'>
            <img src="images/map.png" alt="" />
            <h2>Festivalsgaden 22, 2300, Roskilde</h2>
          </div>
        </div>
        <form ref={formElement} className="signup-form" onSubmit={addParticipantHandler}>
          <label htmlFor="name">Your name</label>
          <NameInput className="signup-form__input" name='name' placeholder="Name..." />
          <label htmlFor="email">Email address</label>
          <input className="signup-form__input" name='email' type="email" placeholder="Email..." />
          <label htmlFor="phone">Phone number</label>
          <input className="signup-form__input" name='phone' type="tel" placeholder="Phone..." />
          <label htmlFor="birthdate">Your birthdate</label>
          <BirthdateInput className="signup-form__input" name='birthdate' placeholder="Birthdate..." />
          <button className='add-button' type="submit">Add Participant<img className='plus' src="/images/vector.png" alt="" /></button>
        </form>
      </div>
      <ParticipantsList /> {/* Include the ParticipantsList component */}
    </div>
  );
}