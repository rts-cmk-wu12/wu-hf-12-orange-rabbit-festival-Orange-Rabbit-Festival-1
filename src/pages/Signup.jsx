/*import { useRef } from 'react'
import '../style/pages/signup.scss'
import PasswordInput from '../components/PasswordInput'
import NameInput from '../components/nameInput'

export default function Signup() {

    const formElement = useRef(null)

    function submitHandler(event) {
        event.preventDefault()

        const data = new FormData(formElement.current)
        const dataObject = Object.fromEntries(data.entries())

        formElement.current.reset()

        // virker i firefox
        // console.log(data)

        // virker i chrome
        //console.log(Object.fromEntries(data.entries()))
    }

    return (
        <>
            <h1 className='signup-heading'>Sign up</h1>

            <form ref={formElement} className="signup-form" onSubmit={submitHandler}>
                <NameInput className="signup-form__input" name='firstName' placeholder="First name..."/>
                <NameInput className="signup-form__input" name='lastName' placeholder="Last name..." />
                <input className="signup-form__input" name='email' type="email" placeholder="Email..." />
                <input className="signup-form__input" name='phone' type="tel" placeholder="Phone..."/>
                <PasswordInput className="signup-form__input" name='password' placeholder="Password..." />
                <label>
                    <input name='spam' type="checkbox" defaultChecked />
                    Would you like free spam?
                </label>
                <input className="signup-form__button" type="submit" value="Sign up" />
            </form>
        </>
    )
}*/

/*import { useRef } from 'react'
import '../style/pages/signup.scss'
import PasswordInput from '../components/PasswordInput'
import NameInput from '../components/NameInput'

export default function Signup() {
    const formElement = useRef(null)

    function submitHandler(event) {
        event.preventDefault()

        const data = new FormData(formElement.current)
        const dataObject = Object.fromEntries(data.entries())

       
        localStorage.setItem('firstName', dataObject.firstName)
        localStorage.setItem('lastName', dataObject.lastName)
        localStorage.setItem('email', dataObject.email)
        localStorage.setItem('phone', dataObject.phone)

        formElement.current.reset()
    }

    return (
        <>
            <h1 className='signup-heading'>Sign up</h1>

            <form ref={formElement} className="signup-form" onSubmit={submitHandler}>
                <NameInput className="signup-form__input" name='firstName' placeholder="First name..."/>
                <NameInput className="signup-form__input" name='lastName' placeholder="Last name..." />
                <input className="signup-form__input" name='email' type="email" placeholder="Email..." />
                <input className="signup-form__input" name='phone' type="tel" placeholder="Phone..."/>
                <PasswordInput className="signup-form__input" name='password' placeholder="Password..." />
                <label>
                    <input name='spam' type="checkbox" defaultChecked />
                    Would you like free spam?
                </label>
                <input className="signup-form__button" type="submit" value="Sign up" />
            </form>
        </>
    )
}
*/



/*import React, { useRef, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ParticipantsContext } from '../context/PerticipantsContext';
import '../styles/pages/signup.scss';
import NameInput from '../components/NameInput';
import BirthdateInput from '../components/BirthdateInput';

export default function Signup() {
  const { addParticipant } = useContext(ParticipantsContext);
  const formElement = useRef(null);
  const [participantId, setParticipantId] = useState(0);
  const history = useHistory();

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

  function navigateToParticipants() {
    history.push('/participants');
  }

  return (
    <>
      <h1 className='signup-heading'>Sign up for Orange Rabbit Festival</h1>
      <form ref={formElement} className="signup-form" onSubmit={addParticipantHandler}>
        <NameInput className="signup-form__input" name='name' placeholder="Name..." />
        <input className="signup-form__input" name='email' type="email" placeholder="Email..." />
        <input className="signup-form__input" name='phone' type="tel" placeholder="Phone..." />
        <BirthdateInput className="signup-form__input" name='birthdate' placeholder="Birthdate..." />
        <button type="submit">Add Participant</button>
      </form>
      <button onClick={navigateToParticipants}>Proceed to Submit</button>
    </>
  );
}
*/
// src/components/Signup.js
/*
import React, { useRef, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { ParticipantsContext } from '../context/PerticipantsContext';
import '../styles/pages/signup.scss';
import NameInput from '../components/NameInput';
import BirthdateInput from '../components/BirthdateInput';
export default function Signup() {
  const { addParticipant } = useContext(ParticipantsContext);
  const formElement = useRef(null);
  const [participantId, setParticipantId] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

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

  function navigateToParticipants() {
    navigate('/perticipantsList'); // Use navigate instead of history.push
  }

  return (<div className='content-container'>
    <div className='image-container'>
      <img src="/images/front-image.png" alt="" />
    </div>
    <div className='form-container'>
      <div className='form-heading-section'>
        <h2 className='page-title'>Sign up for the event</h2>
        <h1> Orange Rabbit Festival 2023</h1>
        <div className='flex'><img src="images/date-icon.png" alt="" /><h2>24 June 2025 – 1 July 2025 </h2> </div>

        <div className='flex'><img src="images/map.png" alt="" /><h2>Festivalsgaden 22, 2300, Roskilde</h2> </div>
      </div>
      <form ref={formElement} className="signup-form" onSubmit={addParticipantHandler}>
        <label for="name">Your name</label>
        <NameInput className="signup-form__input" name='name' placeholder="Name..." />
        <label for="email">Email address</label>
        <input className="signup-form__input" name='email' type="email" placeholder="Email..." />
        <label for="phone">Phone number</label>
        <input className="signup-form__input" name='phone' type="tel" placeholder="Phone..." />
        <label for="birthdate">Your birthdate</label>
        <BirthdateInput className="signup-form__input" name='birthdate' placeholder="Birthdate..." />
        <button onClick={navigateToParticipants}>Add Participant<img className='plus' src="/public/images/vector.png" alt="" /></button>
      </form>

    </div>

  </div>
  );
}
*/


// src/components/Signup.js
import { useRef, useContext, useState } from 'react';
import { ParticipantsContext } from '../context/ParticipantsContext';
import '../styles/pages/signup.scss';
import NameInput from '../component/NameInput';
import BirthdateInput from '../component/BirthdateInput';
import ParticipantsList from '../component/ParticipantsList'; 

// Images
import front_image from "../../public/image/front-image.png"
import bg_image from "../../public/image/bg.png"
import date_icon from "../../public/image/date-icon.png"
import map_icon from "../../public/image/map.png"


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
        <img src={front_image} alt="" />
      </div>
      <div className='form-container'>
        <div className='form-heading-section'>
          <h2 className='page-title'>Sign up for the event</h2>
          <h1>Orange Rabbit Festival 2023</h1>
          <div className='flex'>
            <img src={date_icon} alt="" />
            <h2>24 June 2025 – 1 July 2025</h2>
          </div>
          <div className='flex'>
            <img src={map_icon} alt="" />
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
