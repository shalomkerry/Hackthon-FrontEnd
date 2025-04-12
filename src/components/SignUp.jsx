import React, { useState } from 'react';
import { Link, useNavigate } from "react-router"
const RegisterForm = () => {
   const navigate = useNavigate() 

  const [formData, setFormData] = useState({
    fullNameOrCompany: '',
    email: '',
    phoneNumber: '',
    emergencyContact: '',
    preferredLanguage: '',
    address: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        navigate('/User')
      } else {
        alert(`Error: ${result.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to submit form.');
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <h2 className='form'>Create an Account</h2>

      <div className='input--data'>
        <label>Full Name or Company Name:</label>
        <input
          type="text"
          name="fullNameOrCompany"
          value={formData.fullNameOrCompany}
          onChange={handleChange}
          required
        />
      </div>

      <div className='input--data'>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className='input--data'>
        <label>Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className='input--data'>
        <label>Emergency Contact:</label>
        <input
          type="text"
          name="emergencyContact"
          value={formData.emergencyContact}
          onChange={handleChange}
          required
        />
      </div>

      <div className='input--data'>
        <label>Preferred Language:</label>
        <input
          type="text"
          name="preferredLanguage"
          value={formData.preferredLanguage}
          onChange={handleChange}
          required
        />
      </div>

      <div className='input--data' >
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className='input--data'>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button  className='register-button' type="submit">Register</button>
    </form>
  
    
    </>
    )
};

export default RegisterForm;
