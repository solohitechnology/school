import React, { useEffect, useRef } from "react";
import "./about1.css"; // Import your custom CSS for styling

const AboutPage = () => {
  const textElementRef = useRef(null);

  useEffect(() => {
    const textElement = textElementRef.current;
    const textToType = `
    
Ogendu Academy and E-learning (OAE) are committed to providing exceptional educational content and resources.
Their team of experienced educators and instructional design experts have created interactive online courses and materials to enhance learners' knowledge and skills.
 The academy aims to provide accessible, high-quality content to help individuals achieve their educational goals.
Their unique learning methodologies enable individuals to acquire new skills and reach their professional and personal goals. 
Join Ogendu Academy and E-Learning to unlock your full potential. Yet, it is not just about learning; it is about transformation.

    `
    let currentSentenceIndex = 0;
    let currentCharacterIndex = 0;

    function typeText() {
      if (currentSentenceIndex < textToType.length) {
        const currentSentence = textToType[currentSentenceIndex];
        if (currentCharacterIndex < currentSentence.length) {
          textElement.innerHTML += currentSentence.charAt(currentCharacterIndex);
          currentCharacterIndex++;
          setTimeout(typeText, 50); // Adjust typing speed as needed
        } else {
          // Move to the next sentence
          currentSentenceIndex++;
          currentCharacterIndex = 0;
          setTimeout(typeText, 1000); // Delay before typing the next sentence
        }
      }
    }

    // Check when the user scrolls to the about-content section
    window.addEventListener("scroll", () => {
      const aboutContent = document.querySelector(".about-content");
      const rect = aboutContent.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        typeText(); // Start typing when the section is in view
        window.removeEventListener("scroll", typeText); // Remove the scroll listener
      }
    });
  }, []); // Empty dependency array to run this effect once after component mounts

  return (
    <div className="about-container">
      <div className="about-content">
        <p>
          <h1>About The Academy</h1>
          <p ref={textElementRef} className="text-animation"></p>
        </p>
      </div>
      <div className="about-video">
        <video autoPlay muted loop playsInline>
          <source
            src="https://res.cloudinary.com/dssjiciev/video/upload/v1692204467/robot_pjzewe.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default AboutPage;

















