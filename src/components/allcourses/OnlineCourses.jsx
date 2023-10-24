import React, { useEffect } from "react"
import "./courses.css";
import Heading from "../common/heading/Heading"
import { Helmet } from "react-helmet";
import { CSSTransition } from 'react-transition-group';

const OnlineCourses = () => {

  const online = [
    {
  
      hoverCover: "./christ.jpg  ",
      courseName: "Christian religion",
      course: "0 Courses",
    },
    {
  
      hoverCover: "./robotics2.jpg",
      courseName: "Robotics & AI Courses",
      course: "0 Courses",
    },
    {
  
      hoverCover: "./human.jpg",
      courseName: "Spirituality & Artificial Intelligence",
      course: "0 Courses",
    },
    {
   
      hoverCover: "./ml.png",
      courseName: "MachineLearning Courses",
      course: "0 Courses",
    },
    {
   
      hoverCover: "./sp.jpg",
      courseName: "Spirituality & Psychology,",
      course: "0 Courses",
    },
    {
   
      hoverCover: "./ps.jpg",
      courseName: "Psychology & Artificial Intelligence",
      course: "0 Courses",
    },
    {
      cover: "./uiux.png",
      hoverCover: "./uiux.png",
      courseName: "UI/UX Design Courses",
      course: "0 Courses",
    },
    {
      cover: "./art&design.png",
      hoverCover: "./art&design.png",
      courseName: "Art & Design",
      course: "0 Courses",
    },
    {
      cover: "./computer.jpg",
      hoverCover: "./computer.jpg",
      courseName: "Computer Science",
      course: "0 Courses",
    },
    {
      cover: "./history.jpg",
      hoverCover: "./history.jpg",
      courseName: "History & Archeologic",
      course: "0 Courses",
    },
    {
      cover: "./softeng.png",
      hoverCover: "./softeng.png",
      courseName: "Software Engineering",
      course: "0 Courses",
    },
    {
      cover: "./sinformation.jpg",
      hoverCover: "./sinformation.jpg",
      courseName: "Information Software",
      course: "0 Courses",
    },
    {
      cover: "./health.jpg",
      hoverCover: "./health.jpg",
      courseName: "Health & Fitness",
      course: "0 Courses",
    },
    {
      cover: "./markrting.jpg",
      hoverCover: "./marketing.jpg",
      courseName: "Marketing",
      course: "0 Courses",
    },
    {
      cover: "./graphics.png",
      hoverCover: "./graphics.png",
      courseName: "Graphic Design",
      course: "0 Courses",
    },
    {
      cover: "./music.png",
      hoverCover: "./music.png",
      courseName: "Music",
      course: "0 Courses",
    },
    {
      cover: "./business.jpg",
      hoverCover: "./bz.jpg",
      courseName: "Business Administration",
      course: "0 Courses",
    },
    {
      cover: "./web.png",
      hoverCover: "./web.png",
      courseName: "Web Management",
      course: "0 Courses",
    },
    {
      cover: "./web.png",
      hoverCover: "./phy.jpg",
      courseName: "Philosophy",
      course: "8 Courses",
      link:"/philosohy"
    },
    {
      cover: "./web.png",
      hoverCover: "./kid.jpg",
      courseName: "Kids coding and algorithims",
      course: "0 Courses",
    },
    {
      cover: "./web.png",
      hoverCover: "./africa.jpg",
      courseName: "Afican studies",
      course: "0 Courses",

    },
    {
      cover: "./web.png",
      hoverCover: "./iternational.jpg",
      courseName: " Iternational relations, Diplomacy and geopolitics",
      course: "0 Courses",

    },
    
  ]



  return (
    <>
       <Helmet>
      <title>Ogendu Academy Courses</title>
        {/* Add other head elements like meta tags here */}
      </Helmet>


      <section className='online'>
  <div className='container'>
    <h1 className='course-heading'>COURSES</h1>
    <div className='content grid3'>
      {online.map((val) => (
              <CSSTransition
              in={true} // Whether the component should be visible or not
              timeout={300} // Duration of the transition in milliseconds
              classNames="fade" // CSS class names for enter/exit transitions
              unmountOnExit // Remove the component from the DOM on exit
            >
            
        <a href={val.link} className='course-link'>
          <div className='course-wrapper' >
            <div className='course-image'>
              <img src={val.hoverCover} alt='' className='course-image' />
            </div>
            <h2 className='course-title'>{val.courseName}</h2>
            <p className='course-description'>{val.course}</p>
          </div>
        </a>
        </CSSTransition>
      ))}
    </div>
  </div>
</section>

    </>
  )
}

export default OnlineCourses
