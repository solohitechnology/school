import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './GetCertification.css';
import { saveAs } from 'file-saver';

const GetCertification = () => {
  const [name, setName] = useState('');
  const [seId, setSeID] = useState('');
  const [course, setCourse] = useState('');
  const [downloaded, setDownloaded] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isPaid, setIspaid] = useState(false)
  const [showCongrats, setShowCongrates] = useState(false);

  const location = useLocation();
  const { seminar, email } = location.state;

  useEffect(() => {
    setCourse(seminar.title);
    setSeID(seminar._id);
  }, []);

  const handlePayment = async () => {
    try {
      const response = await axios.post('/api/paystack/payment', {
        amount: 1000,
        email: email
      });

      // Redirect the user to the Paystack payment page
      window.location.href = response.data.paystackResponse;
      if (response.data.success) {
        setIspaid(true);
      } else {
        setIspaid(false);
      }
    } catch (error) {
      console.log('Error processing payment:', error);
      // Handle payment error
    }
  };

  const userName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const GetCertificate = async () => {
    const payload = {
      name,
      course,
      seId,
      email,
    };
    if (name === '' || name === null) {
      return alert('Name field cannot be empty');
    }

    setIsDownloading(true); // Set the downloading state to true

    try {
      const response = await axios.post(
        '/api/cert/generate-certificate/single',
        payload,
        {
          responseType: 'blob',
        }
      );

      const file = new Blob([response.data], { type: 'application/pdf' });
      saveAs(file, 'certificate.pdf');
      setDownloaded(true);
      setShowCongrates(true)
    } catch (error) {
      console.error('Certificate generation error:', error);
    }
  };

  return (
    <>
      {downloaded ? (
        <>

          <h3 style={{ margin: '20px', color: 'green' }}>Congratulations! {name}</h3>
          <p>You have made the right choice to participate in this course.</p>
          <img style={{ borderRadius: '20% 200% 300%', margin: '20px' }} src='cert.jpg' />

        </>
      ) : (
        <>
          <div className="certificate-container">
            <h1 className="title">{seminar.title}</h1>
            {seminar.picture && (
              <img
                className="image"
                src={`/uploads/${seminar.picture.filename}`}
                alt="deptresearch.com"
              />
            )}
            <form>
              <div>
                <h3>Input your name the way you want it to appear on the certificate</h3>
                <input className="input" type="text" onChange={userName} required />

                {isPaid ? (
                  <>
                    {isDownloading ? (
                      <p>Generating Certificate...</p>
                    ) : (
                      <>
                        {showCongrats ? (
                          <p>Congratulations! {name} You have successfully downloaded the certificate.</p>
                        ) : (
                          <button className="button" onClick={GetCertificate} type="button">
                            Download Certificate
                          </button>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <button className="button" onClick={handlePayment} type="button">
                      Pay Now ($10)
                    </button>
                    <button className="button" onClick={GetCertificate} type="button">
                      Download Certificate
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default GetCertification;
