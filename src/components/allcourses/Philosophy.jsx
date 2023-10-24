import React, {useState} from "react";
import './Philosophy.css'; // Add your CSS file for styling

const Philosophy_Courses = [
    {
        name: "Feminist Philosophy",
        url: "course.mp4",
        author: "Author B",
        price: 70.99,
        rating: 5,
      },
    
  {
    name: "Logic and Critical Thinking",
    url: "https://res.cloudinary.com/dssjiciev/video/upload/v1691869099/jaqcows1ikhycpnp6l7m.mp4",
    author: "Author A",
    price: 69.99,
    rating: 4,
  },
  {
    name: "Ethics in Modern Society",
    url: "robot.mp4",
    author: "Author B",
    price: 89.99,
    rating: 5,
  },
  {
    name: "Ancient Greek Philosophy",
    url: "https://res.cloudinary.com/dssjiciev/video/upload/v1691869099/jaqcows1ikhycpnp6l7m.mp4",
    author: "Author A",
    price: 19.99,
    rating: 4,
  },

  {
    name: "Existentialism: A Journey Within",
    url: "robot.mp4",
    author: "Author B",
    price: 59.99,
    rating: 5,
  },

{
name: "Introduction to Philosophy",
url: "https://res.cloudinary.com/dssjiciev/video/upload/v1691869099/jaqcows1ikhycpnp6l7m.mp4",
author: "Author A",
price: 49.99,
rating: 4,
},
{
name: "Ethics and Morality",
url: "robot.mp4",
author: "Author B",
price: 39.99,
rating: 5,
},
{
name: "Philosophy of Mind",
url: "https://res.cloudinary.com/dssjiciev/video/upload/v1691869099/jaqcows1ikhycpnp6l7m.mp4",
author: "Author A",
price: 29.99,
rating: 4,
},


  


];





const Philosophy = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCourses = Philosophy_Courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showCourseDetails = (course) => {
    const courseDetails = `
      Course Name: ${course.name}
      Author: ${course.author}
      Price: $${course.price}
      Rating: ${course.rating}/5
      Description: This course covers a wide range of topics related to ${course.name}.
    `;

    window.alert(courseDetails);
  };

  return (
    <>
      <div style={{marginTop:"150px"}} className="search-container">
        <input
          type="text"
          placeholder="Find Courses By Their Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="courses-container">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.name}>
            <div className="video-container">
              <video controls>
                <source src={course.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3>{course.name}</h3>
            <p>Author: {course.author}</p>
            <p>Price: ${course.price}</p>
            <div className="star-rating">
              {[...Array(course.rating)].map((_, index) => (
                <span key={index} className="star">&#9733;</span>
              ))}
              {[...Array(5 - course.rating)].map((_, index) => (
                <span key={index} className="star">&#9734;</span>
              ))}
            </div>
            <div className="course-details">
              <h4>Course Details:</h4>
              <p>
                This course covers a wide range of topics related to{" "}
                {course.name}. It is instructed by {course.author}.
              </p>
        
              
              <button className="enroll_btn" onClick={() => showCourseDetails(course)}>Participate</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


export default Philosophy;
