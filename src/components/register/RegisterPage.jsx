import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const ParentRegisterForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const RegistrationFormWrapper = styled.form`
  background-color: skyblue;
  border: none;
  padding: 20px;
  width: 400px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-right: 5px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SignUpButton = styled.a`
  background-color: skyblue;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border:2px solid ;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

const RegistrationForm = () => {
  const [username, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSigningUp(true);

      const response = await axios.post('/api/auth/register', {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        setMessage(response.data.message);
        setIsSigningUp(false);
        navigate('/login');
      } else {
        setMessage('An error occurred during registration');
        setIsSigningUp(false);
      }
    } catch (err) {
      console.log(err);
      setMessage('An error occurred during registration');
      setIsSigningUp(false);
    }
  };

  return (
    <ParentRegisterForm>
      <RegistrationFormWrapper onSubmit={handleSubmit}>
        <Title>Sign Up</Title>
        <br />
        <br />
        {message && <p>{message}</p>}
        <InputLabel htmlFor="firstName">Username:</InputLabel>
        <InputField
          type="text"
          id="firstName"
          value={username}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <InputLabel htmlFor="email">Email:</InputLabel>
        <InputField
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <InputLabel htmlFor="password">Password:</InputLabel>
        <InputField
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <SignUpButton type="submit" disabled={isSigningUp}>
          {isSigningUp ? <CircularProgress size={24} /> : 'Sign Up'}
        </SignUpButton>
        <p>
          Click here to <a href="/login">Sign in!</a>
        </p>
      </RegistrationFormWrapper>
    </ParentRegisterForm>
  );
};

export default RegistrationForm;
