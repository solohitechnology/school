import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const TwoFormInputs = () => {

  const location = useLocation();
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const amount = new URLSearchParams(location.search).get('amount');
  // const [input1, setInput1] = useState('');
 

  // const handleInputChange1 = (event) => {
  //   setInput1(event.target.value);
  // };

  const handleInputChange2 = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the input values
    const data = {
      amount,
      email
    };

    // Make an API call using Axios
    axios.post('/api/paystack/payment', data)
      .then((response) => {
        console.log('API response:', response.data.paystackResponse);
        // Perform any further actions with the response data
        window.location.href = response.data.paystackResponse;
        // localStorage.removeItem('cartItems');
      })
      .catch((error) => {
        console.error('API error:', error);
        // Handle the error
      });

    // Clear the form inputs
    // setInput1('');
    // setEmail('');
  };

  return (
      <>
    <div>
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      {/* <h2>Make Payment</h2> */}
      <form style={{border:'none'}} onSubmit={handleSubmit}>
          <p>Amount: ${amount}</p>
        <div className='paymentInput' >
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleInputChange2}
            style={{marginLeft:'200px', marginRight:'200px', textAlign:'center'}}
            placeholder='Enter your email'

          />
        </div>
        <button style={{color:'whitesmoke', background: 'green'}} type="submit">Pay Now</button>
      </form>
    </div>
      
      </>
  );
};

export default TwoFormInputs;
