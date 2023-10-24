import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './seminar.css'; 
import AOS from 'aos'
import 'aos/dist/aos.css'

const SeminarList = () => {
  const [seminars, setSeminars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    AOS.init({duration: 1000})
  }, [])

  useEffect(() => {
    fetchSeminars();
  }, []);

  const fetchSeminars = async () => {
    try {
      const response = await axios.get('/api/confrence/seminar');
      setSeminars(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching seminars:', error);
    }
  };

  if (isLoading) {
    return <p style={{paddingLeft:'100px'}}>Loading seminars...</p>;
  }

  const lastSixSeminars = seminars.slice(-3); // Get the last 6 seminars

  return (
    <div className="seminar-list-container">
     <legend  style={{color:"black", background:"skyblue", borderRadius:"100px"}}>
      <marquee behavior="" direction="">
       <h1  style={{color:"black"}}> | Conferences | Seminars | Workshops | Webinars |</h1>
      </marquee>
      </legend>
   
      {lastSixSeminars.length > 0 ? (
        <div data-aos='fade-left' className="seminar-slider">
          <div className="seminar-grid">
            {lastSixSeminars.map((seminar) => (
              <div key={seminar._id} className="seminar-item">
                <h2>{seminar.title}</h2>
                {seminar.picture && (
                  <img
                    src={`https://ogenduacademy.com/uploads/${seminar.picture.filename}`}
                    alt="Seminar"
                  />
                )}
                <Link to={`/seminar/${seminar._id}`} className="register-link">
                  <button style={{background:"skyblue", color:"black"}}>
                  Register
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No seminars found.</p>
      )}
    </div>
  );
};

export default SeminarList;
