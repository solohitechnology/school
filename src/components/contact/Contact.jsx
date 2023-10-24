import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // Send email using 'mailto:' protocol
      const emailLink = `mailto:learn@ogenduacademy.com?subject=${encodeURIComponent(
        `Contact Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = emailLink;
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // A simple email validation regex (not perfect, but sufficient for basic validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div style={{marginTop:"150px"}} className="contact-page">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or inquiries, please feel free to get in touch with us using the
        contact details below or by filling out the contact form.
      </p>
      <div className="contact-details">
        {/* Contact details as before */}
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send us a Message</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          ></textarea>
          {errors.message && <div className="error-message">{errors.message}</div>}
        </div>
        <button style={{background:"skyblue"}} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Contact;



















// import React from "react";
// import Back from "../common/back/Back";
// import "./contact.css";
// import { FaFacebook, FaWhatsapp, FaTwitter, FaTelegramPlane, FaTiktok, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

// const Contact = () => {
//   const websiteEmail = "info@ogenduacademy.com";

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const subject = formData.get("subject");
//     const message = formData.get("message");

//     // Compose the mailto link with user's input and open the email client
//     const mailtoLink = `mailto:${websiteEmail}?subject=${encodeURIComponent(
//       subject
//     )}&body=${encodeURIComponent(
//       `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
//     )}`;
//     window.location.href = mailtoLink;
//   };

//   return (
//     <>
//       <Back style={{ color: "blue" }} title="Contact us" />
//       <section className="contacts padding">
//         <div className="container shadow flexSB">
//           <img className="picture" src="logo2.jpeg" />
//           <div style={{ marginTop: "10px" }} className="left row"></div>
//           <div style={{ marginTop: "100px" }} className="right row">
//           <span>Email:</span>
//             <p>{websiteEmail}</p>
//             <span>PHONE:</span>
//             <p> +33758491949</p>
//             <p>We're open for any suggestion or just to have a chat </p>

//             <div className="items grid2">
//               <div className="box">
//                 <h4 className="address_head">ADDRESS:</h4>
//                 <p className="adress_para">
//                     OGENDU ACADEMY <br />
//                   institute of Paris. 26 Rue Castagnary, 75015 Paris France.
//                 </p>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit}>
         
//                 <input type="text" placeholder="Name" name="name" required />
//                 <input
//                   type="email"
//                   placeholder="Email" 
//                   name="email"
//                   required
//                  />
     
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 name="subject"
//                 required
//               />
//               <textarea
//                 cols="30"
//                 rows="10"
//                 placeholder="Create a message here..."
//                 name="message"
//                 required
//               ></textarea>
//               <button style={{ color: "gold" }} className="primary-btn">
//                 SEND
//               </button>
//             </form>

//             <h3>Follow us here</h3>
//             <div
//               style={{ display: "flex", justifyContent: "space-around" }}
//               className="contact_social"
//             >
//               <a href="https://wa.me/whatsappphonenumber">
//                 <span style={{ color: 'royalblue', fontSize: '30px', overflowY: 'hidden', margin: '10px' }}>
//                   <FaFacebook style={{ overflowY: 'hidden' }} />
//                 </span>
//               </a>

//               <a href="https://wa.me/whatsappphonenumber">
//                 <span style={{ color: 'blue', fontSize: '30px', margin: '10px' }}>
//                   <FaTwitter />
//                 </span>
//               </a>


//               <a href="https://wa.me/whatsappphonenumber">
//                 <span style={{ color: 'purple', fontSize: '30px', margin: '10px' }}>
//                   <FaInstagram />
//                 </span>
//               </a>
            


//               <a href="https://chat.whatsapp.com/EOgUUcwU1Su6fEgcU0777w">
//                 <span style={{ color: 'green', fontSize: '30px', margin: '10px' }} >
//                   <FaWhatsapp />
//                 </span>
//               </a>

//               <a href="https://wa.me/whatsappphonenumber">
//                 <span style={{ color: 'red', fontSize: '30px', margin: '10px' }} >
//                   < FaYoutube />
//                 </span>
//               </a>
//               <a href="https://www.linkedin.com/">
//                 <span style={{ color: '#0077B5', fontSize: '30px', margin: '10px' }}>
//                   <FaLinkedinIn />
//                 </span>
//               </a>

//               <a href="https://www.tiktok.com/">
//                 <span style={{ color: 'black', fontSize: '30px', margin: '10px' }}>
//                   <FaTiktok />
//                 </span>
//               </a>

//               <a href="https://telegram.org/">
//                 <span style={{ color: 'lightblue', fontSize: '30px', margin: '10px' }}>
//                   <FaTelegramPlane />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;
