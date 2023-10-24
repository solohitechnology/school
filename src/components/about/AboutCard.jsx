import React, { useState, useEffect } from "react";
import Heading from "../common/heading/Heading";
import About from "./About";
import Awrapper from "./Awrapper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css'; // Import the external CSS file for styling

const AboutCard = () => {
  const homeAbout = [
    {
      id: 1,
      cover: "/book6.jpg",
      title: " Philosophy",
      desc: " Dive into the realm of deep thoughts and profound ideas with our Philosophy ebook collection. ",
    },
    {
      id: 2,
      cover: "book7.webp",
      title: "Deep Learning",
      desc: " Unlock the power of artificial intelligence and neural networks with our comprehensive Deep Learning ebook. ",
    },
    {
      id: 3,
      cover: "book3.jpeg",
      title: "Web Development",
      desc: " Master the art of web development and create stunning websites with our Web Development ebook.",
    },
    
    {
      id: 4,
      cover: "book4.webp",
      title: "Digital Marketing",
      desc: "  Stay ahead in the digital world with our Digital Marketing ebook, packed with strategies for online success",
    },
  ]

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const [aboutData, setAboutData] = useState(homeAbout);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutData((prevAboutData) => {
        return prevAboutData.map((item) => ({
          ...item,
          data: item.data === 0 ? parseInt(item.data) + 1 : 0,
        }));
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const icon = '>>'

  return (
    <>
      <div className="mother">
        <section className="aboutHome">
          <About />
        </section>
        <h1>EXPERIENCE OUR E-BOOK WORLD</h1>
        <div className="courses-container">
          {aboutData.map((val, key) => {
            return (
              <div data-aos="fade-left" className="course-card" key={val.id}>
                <div className="img">
                  <img style={{ height: "250px" }} src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h2 className="course-title"> {icon} {val.title}</h2>
                  <p className="course-description">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <h1 className="auto-didactic-heading">Auto-Didactic-E-Learning.</h1>
        {/* <Awrapper /> */}
      </div>
    </>
  );
};

export default AboutCard;
