import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './certificate.css';

const Myemail = () => {
  const [email, setEmail] = useState('');
  const [seminars, setSeminars] = useState([]);
  const [error, setError] = useState('');
  const [download, setDownload] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/cert/generate-certificate', { email });
      // console.log(response.data.allSeminars);
      setSeminars(response.data.allSeminars);
    } catch (error) {
      setError('Error generating seminars. Please try again.');
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGetCertificate = (seminar) => {
    // Redirect to the certification page with the seminar object as state
    navigate(`/getcertification`, { state: { seminar, email } });
  };

  return (
    <>
      <div className='myemail-container1'>
      {seminars.length > 0 && (
          <div className='seminars-container1'>
            {seminars.map((seminar) => (
              <div className='seminar-item' key={seminar.id}>
                <h1>{seminar.title}</h1>

                {seminar.picture && (
                  <img
                  className='image2'
                    src={`/uploads/${seminar.picture.filename}`}
                    alt="deptresearch.com"
                  />
                )}

                <button
                  style={{ color: 'gold', fontSize: '20px' }}
                  type="button"
                  onClick={() => handleGetCertificate(seminar)}
                >
                  Get certificate
                </button>
              </div>
            ))}
          </div>
        )}
        
        <form onSubmit={emailSubmit}>
        <h4 className='myemail-title1'>Email</h4>
        <div style={{width:'150vw', }}>

          <input
            placeholder="Input your email"
            style={{fontSize:'20px', width:'200px'}}
            type="email"
            value={email}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </div>
        </form>

      
      </div>
    </>
  );
};

export default Myemail;
