import React, { useState, useRef } from 'react';
import { AiOutlinePlus } from "react-icons/ai";

const InputFields = () => {
  const formElement = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthdate: ''
  });

  const [errors, setErrors] = useState({});

    function submitHandler(event) {
      event.preventDefault();
      const data = new FormData(formElement.current);

      const dataObject = Object.fromEntries(data.entries());
      localStorage.setItem('formData', JSON.stringify(dataObject));
      formElement.current.reset();
    }

  const validateForm = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) error = 'Email is required';
        else if (!emailRegex.test(value)) error = 'Invalid email format';
        break;
      case 'phone':
        const phoneRegex = /^\d{8}$/;
        if (!value) error = 'Phone number is required';
        else if (!phoneRegex.test(value)) error = 'Invalid phone number';
        break;
      case 'birthdate':
        if (!value) error = 'Birthdate is required';
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'birthdate') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      if (cleaned.length >= 2) {
        formatted = cleaned.slice(0, 2) + '/';
        if (cleaned.length >= 4) {
          formatted += cleaned.slice(2, 4) + '/';
          if (cleaned.length >= 8) {
            formatted += cleaned.slice(4, 8);
          } else {
            formatted += cleaned.slice(4);
          }
        } else {
          formatted += cleaned.slice(2);
        }
      }
      setFormData({
        ...formData,
        [name]: formatted
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }

    const error = validateForm(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  return (
    <form ref={formElement} onSubmit={submitHandler} className="form-container">
      <div className="form-group">
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          maxLength="8"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label>Your Birthdate</label>
        <input
          type="text"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
          placeholder="DD/MM/YYYY"
        />
        {errors.birthdate && <span className="error">{errors.birthdate}</span>}
      </div>
      <div>
        <button type="submit" name='submit'>
          Add participant <AiOutlinePlus className='form-icon-plus' />
        </button>
      </div>
    </form>
  );
};

export default InputFields;