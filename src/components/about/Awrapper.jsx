

import axios from 'axios';
import { useEffect, useState } from 'react';
import './awrapper.css'

const Awrapper = () => {
  const [instructors, setInstructors] = useState(1);

  useEffect(() => {
    getTestimonies();
  }, []);

  async function getTestimonies() {
    try {
      const response = await axios.get('/api/testimo/testimonials');
      console.log(response.data.length);
      setInstructors(response.data.length);
    } catch (error) {
      console.error(error);
    }
  }

  const awrapper = [
    {
      cover: 'https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/80/ffffff/external-graduation-education-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png',
      data: instructors,
      title: 'SUCCESS STORIES',
    },
    {
      cover: 'https://img.icons8.com/ios/80/ffffff/athlete.png',
      data: '8',
      title: 'TRUSTED TUTORS',
    },
    {
      cover: 'https://img.icons8.com/external-outline-icons-maxicons/80/ffffff/external-calender-insurance-outline-outline-icons-maxicons.png',
      data: '6',
      title: 'WORKSHOP WEBINAR  ',
    },
    {
      cover: 'https://img.icons8.com/ios/80/ffffff/macbook-idea--v3.png',
      data: '22',
      title: 'ONLINE COURSES',
    },
  ];

  return (
  <>
     <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                {/* <div className='imag'>
                  <img style={{width:"20px, "}} src={val.cover} alt='ogendu academy' />
                </div> */}
                <div className='about_text'>
                  <h1>{val.data}+ </h1>
                  <h3 >{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
  </>
);
};

export default Awrapper;

