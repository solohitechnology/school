import React, { useEffect, useRef } from "react";
import Hblog from "./Hblog";
// import HAbout from "./HAbout";
import "./hero/Hero.css";
import Hprice from "./Hprice";
import AboutCard from "../about/AboutCard";
import Awrapper from "../about/Awrapper";
import Testimonal from "./testimonal/Testimonal";
import Heading from "../common/heading/Heading";
import Allseminar from "./Allseminar";
import Slider from "react-slick";
import Pricing from "../common/pricing/Pricing";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopCategories from "./topcat/TopCategories";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "skyblue",
  color: "black",

  borderRadius: "7px",
  fontSize: "20px",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "700px",
};

const testimonialData = [
  {
    id: 0,
    quote: "Discover a world of knowledge with us.",
    image: "/sch1.jpg", // Replace with actual image URL
  },
  {
    id: 1,
    quote: "Unlock boundless learning opportunities.",
    image: "/solo1.jpg", // Replace with actual image URL
  },
  {
    quote: "Embark on a journey of personal growth.",
    image: "/solo.jpg", // Replace with actual image URL
  },
  {
    id: 4,
    quote: "Broaden your horizons through education.",
    image: "/hd1.jpg", // Replace with actual image URL
  },
  {
    id: 5,
    quote: "Experience transformative learning.",
    image: "/hd9.webp", // Rd9eplace with actual image URL
  },
  {
    id: 6,
    quote: "Join a community of passionate learners.",
    image: "/psx.jpg", // Replace with actual image URL
  },
];

const Home = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  const handleCoursesClick = (e) => {
    e.preventDefault();
    window.location.href = "/courses";
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    window.location.href = "/register";
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="home-card">
            <div className="home-content">
              <img
                src={testimonial.image}
                alt={`${testimonial.author}'s photo`}
                className="home-image"
              />
              <p>{testimonial.quote}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="home_container">
        <Allseminar />
        <TopCategories />
        <AboutCard />
        <Awrapper />
        <Testimonal />
        <Hblog />
        <Pricing />
      </div>
    </>
  );
};

export default Home;
