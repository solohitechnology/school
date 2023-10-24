import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './registration.css'

const RegistrationPage = () => {
  const { id } = useParams();
  const [massage, setMassage ] = useState('')
  const [seminar, setSeminar] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const fetchSeminar = async () => {
      try {
        const response = await axios.get(`/api/confrence/seminar/${id}`);
        setSeminar(response.data);
      } catch (error) {
        console.error('Error fetching seminar:', error);
      }
    };

    fetchSeminar();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setIsRegistering(true);
    try {
      const response = await axios.post(
        `https://ogenduacademy.com/api/confrence/seminar/${id}/register`,
        formData
      );
      setMassage(  response.data.message)
      // console.log( 'this is the response fron the backend ' +  response);
      // console.log('Registering for seminar:', seminar);
      // console.log('Registration form data:', formData);
  
      // Reset the form data after successful registration
      setFormData({
        name: '',
        email: '',
        phone: '',
      });
    } catch (error) {
      console.error('Error registering for seminar:', error);
    } finally {
            setIsRegistering(false); // Set the registering status back to false
          }
  };
  

  if (!seminar) {
    return <p>Loading seminar...</p>;
  }

  return (
    <div className='container_serminar'>
      <div className='content_div'>

      <h2>{seminar.title}</h2>
      <p className='content' >{seminar.content}</p>
      {seminar.picture && (
        <img
        className='seminar_img'
          src={`https://ogenduacademy.com/uploads/${seminar.picture.filename}`}
          alt="Seminar"
        />
      )}
  
        <h1>Registration is free</h1>
      </div>
       
       <div className='form_div'>

      <form style={{display:'flex' }} onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <p style={{color:'darkgreen', fontWeight:'bold'}} >{massage}</p>
        {isRegistering ? 'Registering...' : <button type='submit' style={{color: 'gold'}}>Register</button>}
      </form>
       </div>
    </div>
  );
};

export default RegistrationPage;


