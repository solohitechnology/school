
import React, { useEffect, useState,useRef } from 'react';
import './style.css';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Testimonial data including text and image URLs


const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);

 
  
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('/api/testimo/testimonials');
      setTestimonials(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };



  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (window.innerWidth < 768) {
    settings.slidesToShow = 1; // Show only one card on mobile
  } else {
    settings.slidesToShow = 1; // Show two cards on larger screens
  }


  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials-p">
      <div className="testimonials-h">
        <h1>Testimonials</h1>
        <h3>See what our supporters and beneficiaries are saying about our work.</h3>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {testimonials.slice(-3).map((testimonial) => (
          <div key={testimonial.id} className="testimonial-c"  >
            <div className="testimonial-c">
             <img
              src={`https://ogenduacademy.com/uploads/${testimonial.picture}`}
              alt="Testimonial"
              className="testimonial-image"

            />
              <p>{testimonial.testimonial}</p>
              <p className="testimonial-a">{testimonial.name}</p>
              <p className="testimonial-p">{testimonial.country}</p>
            </div>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default Testimonial;













// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './style.css'; 
// import AOS from 'aos'
// import 'aos/dist/aos.css'


// const Testimonial = () => {
//   const [testimonials, setTestimonials] = useState([]);
  
//   useEffect(()=> {
//     AOS.init({duration: 2000})
//   }, [])
  
//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   const fetchTestimonials = async () => {
//     try {
//       const response = await axios.get('/api/testimo/testimonials');
//       setTestimonials(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       {/* <h2>Testimonials</h2> */}
//       <h1 style={{background:"skyblue", color:"black", fontFamily:'revert-layer', fontSize:"40px", borderRadius:"10px", margin:"30px", fontWeight:"bold"}}>Testimonies</h1>
//       <div className="testimonial">
//         {testimonials.slice(-3).map((testimonial) => (
//           <div data-aos='fade-up' className="testimonial-item" key={testimonial._id}>
//             <img
//               src={`https://ogenduacademy.com/uploads/${testimonial.picture}`}
//               alt="Testimonial"
//               className="testimonial-img"
//             />
//             <div className="testimonial-content">
//               <h3 className="testimonial-name">{testimonial.name}</h3>
//               <p style={{textAlign:"justify"}} className="testimonial-text">{testimonial.testimonial}</p>
//               <p className="testimonial-country">{testimonial.country}</p> 
//             </div>
//           </div>
//         ))}
//       <span style={{borderBottom:"" ,color:"black", background:"skyblue", fontFamily:"monospace", textAlign:"center", fontSize:"30px", borderRadius:"5px", margin:"50px", cursor:"pointer", fontWeight:"bold"}} > 
//       <a href="/testimonialform">
//       leave a comment
//       </a>
//        </span>
//       </div>
//     </>
//   );
// };

// export default Testimonial;
