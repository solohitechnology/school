import React, {useState} from "react";
import "./header.css";
import { FaUser } from "react-icons/fa";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

function HeaderPrimary() {
  const [showCoursesList, setShowCoursesList] = useState(false);

  
  const toggleCoursesList = () => {
    setShowCoursesList(!showCoursesList);
  };



  return (
    <div className="headerPrimary">
      <div className="ogendu-logo part ">
        <a href="/">
          <img src="./ogendu11.png" className="logo" alt="logo"></img>
        </a>
      </div>
      <div>
      {showCoursesList && (
        <div className="courses_list">
        <ul className="left-course">
        <li className="menu-item">
    <a href="#">
      <h3>
      Health & Fitness
      </h3>
      </a>
    <div className="submenu">
      <ul className="link-menu">
        <div>
        <li><a href="#">Nutrition</a></li>
        <li><a href="#">Exercise</a></li>
        <li><a href="#">Mental Health</a></li>
        <li><a href="#">Wellness</a></li>
        <li><a href="#">Weight Management</a></li>
        <li><a href="#">Disease Prevention</a></li>
        </div>
        <div>
        <li><a href="#">Fitness Equipment</a></li>
        <li><a href="#">Healthy Cooking</a></li>
        <li><a href="#">Yoga & Meditation</a></li>
        <li><a href="#">Sports & Athletics</a></li>
        <li><a href="#">Recovery & Rehabilitation</a></li>
        <li><a href="#">Health Apps & Technology</a></li>
        </div>
      
      </ul>
    </div>
  </li>
  <li className="menu-item">
    <a href="#">
      <h3>
      Philosophy
      </h3>
      </a>
    <div className="submenu">
      <ul className="link-menu">
        <div>
        <li><a href="#">Metaphysics</a></li>
        <li><a href="#">Epistemology</a></li>
        <li><a href="#">Ethics</a></li>
        <li><a href="#">Aesthetics</a></li>
        <li><a href="#">Logic</a></li>
        <li><a href="#">Philosophy of Mind</a></li>
        </div>
        <div>
        <li><a href="#">Political Philosophy</a></li>
        <li><a href="#">Philosophy of Religion</a></li>
        <li><a href="#">Philosophy of Science</a></li>
        <li><a href="#">Philosophy of Language</a></li>
        <li><a href="#">Existentialism and Phenomenology</a></li>
        <li><a href="#">Social and Cultural Philosophy</a></li>
        </div>
      </ul>
    </div>
  </li>
  <li className="menu-item">
    <a href="#">
      <h3>
      Development
      </h3>
      </a>
    <div className="submenu">
      <ul className="link-menu">
        <div>
        <li><a href="#">Web Development</a></li>
        <li><a href="#">App Development</a></li>
        <li><a href="#">Software Engineering</a></li>
        <li><a href="#">Game Development</a></li>
        <li><a href="#">Mobile App Development</a></li>
        <li><a href="#">Front-End Development</a></li>
        </div>
        <div>
        <li><a href="#">Back-End Development</a></li>
        <li><a href="#">Full-Stack Development</a></li>
        <li><a href="#">UI/UX Design</a></li>
        <li><a href="#">DevOps</a></li>
        <li><a href="#">Data Science</a></li>
        <li><a href="#">Machine Learning</a></li>
        </div>
      </ul>
    </div>
  </li>
  <li className="menu-item">
    <a href="#">
      <h3>
      Marketing
      </h3>
      </a>
    <div className="submenu">
      <ul className="link-menu">
        <div>
        <li><a href="#">Digital Marketing</a></li>
        <li><a href="#">Content Marketing</a></li>
        <li><a href="#">Social Media Marketing</a></li>
        <li><a href="#">Email Marketing</a></li>
        <li><a href="#">Search Engine Optimization (SEO)</a></li>
        <li><a href="#">Pay-Per-Click (PPC) Advertising</a></li>
        </div>
        <div>
        <li><a href="#">Marketing Analytics</a></li>
        <li><a href="#">Branding</a></li>
        <li><a href="#">Market Research</a></li>
        <li><a href="#">Public Relations</a></li>
        <li><a href="#">Influencer Marketing</a></li>
        <li><a href="#">E-commerce Marketing</a></li>
        </div>
      </ul>
    </div>
  </li>
  <li className="menu-item">
    <a href="#">
      <h3>
      Software
        </h3>
      </a>
    <div className="submenu">
    <ul className="link-menu">
      <div>
        <li><a href="#">Software Development</a></li>
        <li><a href="#">Software Testing</a></li>
        <li><a href="#">Software Architecture</a></li>
        <li><a href="#">Agile Development</a></li>
        <li><a href="#">DevOps</a></li>
        <li><a href="#">Software Security</a></li>
      </div>
        <div>
        <li><a href="#">Software Tools & Frameworks</a></li>
        <li><a href="#">Database Management</a></li>
        <li><a href="#">Cloud Computing</a></li>
        <li><a href="#">Mobile App Development</a></li>
        <li><a href="#">Artificial Intelligence (AI)</a></li>
        <li><a href="#">Machine Learning</a></li>

        </div>
      </ul>
    </div>
  </li>
  <li className="menu-item">
    <a href="#">
      <h3>
      Design
        </h3>

        </a>
    <div className="submenu">
      <ul className="link-menu">
        <div>
        <li><a href="#">Graphic Design</a></li>
        <li><a href="#">UI/UX Design</a></li>
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Logo Design</a></li>
        <li><a href="#">Illustration</a></li>
        <li><a href="#">Typography</a></li>
        </div>
        <div>
        <li><a href="#">Product Design</a></li>
        <li><a href="#">Interior Design</a></li>
        <li><a href="#">Fashion Design</a></li>
        <li><a href="#">Motion Graphics</a></li>
        <li><a href="#">Game Design</a></li>
        <li><a href="#">3D Modeling & Animation</a></li>
        </div>
      </ul>
    </div>
  </li>
  <li className="menu-item">
    <a href="#">
      <h3>
        Music
        </h3>
        </a>
    <div className="submenu">
      <ul className="link-menu">
        <div>
        <li><a href="#">Music Theory</a></li>
        <li><a href="#">Instrumental Music</a></li>
        <li><a href="#">Vocal Music</a></li>
        <li><a href="#">Music Composition</a></li>
        <li><a href="#">Music Production</a></li>
        <li><a href="#">Music History</a></li> 
        </div>
          <div>
        <li><a href="#">Music Education</a></li>
        <li><a href="#">Music Technology</a></li>
        <li><a href="#">Music Genres</a></li>
        <li><a href="#">Music Performance</a></li>
        <li><a href="#">Music Business</a></li>
        <li><a href="#">Music Therapy</a></li>
          </div>
            
      </ul>
    </div>
  </li>
</ul>

        <ul className="left-course">
      
        <li class="menu-item">
            <a href="#">
                <h3>Business</h3>
            </a>
            <div class="submenu">
                <ul class="link-menu">
                    <div>
                        <li><a href="#">Business Administration</a></li>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">Finance</a></li>
                        <li><a href="#">Accounting</a></li>
                        <li><a href="#">Entrepreneurship</a></li>
                        <li><a href="#">Economics</a></li> 
                    </div>
                    <div>
                        <li><a href="#">International Business</a></li>
                        <li><a href="#">Human Resources</a></li>
                        <li><a href="#">Operations Management</a></li>
                        <li><a href="#">Business Ethics</a></li>
                        <li><a href="#">Business Law</a></li>
                        <li><a href="#">Information Technology</a></li>
                    </div>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <a href="#">
                <h3>Engineering</h3>
            </a>
            <div class="submenu">
                <ul class="link-menu">
                    <div>
                        <li><a href="#">Mechanical Engineering</a></li>
                        <li><a href="#">Electrical Engineering</a></li>
                        <li><a href="#">Civil Engineering</a></li>
                        <li><a href="#">Chemical Engineering</a></li>
                        <li><a href="#">Computer Engineering</a></li>
                        <li><a href="#">Aerospace Engineering</a></li> 
                    </div>
                    <div>
                        <li><a href="#">Biomedical Engineering</a></li>
                        <li><a href="#">Environmental Engineering</a></li>
                        <li><a href="#">Software Engineering</a></li>
                        <li><a href="#">Materials Science</a></li>
                        <li><a href="#">Industrial Engineering</a></li>
                        <li><a href="#">Nuclear Engineering</a></li>
                    </div>
                </ul>
            </div>
        </li>
          <li class="menu-item">
            <a href="#">
                <h3>Self-improvement</h3>
            </a>
            <div class="submenu">
                <ul class="link-menu">
                    <div>
                        <li><a href="#">Personal Development</a></li>
                        <li><a href="#">Productivity</a></li>
                        <li><a href="#">Self-help Books</a></li>
                        <li><a href="#">Mindfulness</a></li>
                        <li><a href="#">Motivation</a></li>
                        <li><a href="#">Goal Setting</a></li> 
                    </div>
                    <div>
                        <li><a href="#">Health and Wellness</a></li>
                        <li><a href="#">Time Management</a></li>
                        <li><a href="#">Leadership Skills</a></li>
                        <li><a href="#">Communication Skills</a></li>
                        <li><a href="#">Positive Thinking</a></li>
                        <li><a href="#">Stress Management</a></li>
                    </div>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <a href="#">
                <h3>Cultural Practices</h3>
            </a>
            <div class="submenu">
                <ul class="link-menu">
                    <div>
                        <li><a href="#">Traditional Clothing</a></li>
                        <li><a href="#">Ceremonies and Rituals</a></li>
                        <li><a href="#">Festivals</a></li>
                        <li><a href="#">Art and Crafts</a></li>
                        <li><a href="#">Dance and Music</a></li>
                        <li><a href="#">Language and Literature</a></li> 
                    </div>
                    <div>
                        <li><a href="#">Cuisine and Food Culture</a></li>
                        <li><a href="#">Religious Practices</a></li>
                        <li><a href="#">Cultural Heritage</a></li>
                        <li><a href="#">Customs and Traditions</a></li>
                        <li><a href="#">Cultural Diversity</a></li>
                        <li><a href="#">Cultural Exchange</a></li>
                    </div>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <a href="#">
                <h3>Photography & Video</h3>
            </a>
            <div class="submenu">
                <ul class="link-menu">
                    <div>
                        <li><a href="#">Photography Basics</a></li>
                        <li><a href="#">Camera Types</a></li>
                        <li><a href="#">Composition</a></li>
                        <li><a href="#">Editing and Post-Processing</a></li>
                        <li><a href="#">Portrait Photography</a></li>
                        <li><a href="#">Landscape Photography</a></li> 
                    </div>
                    <div>
                        <li><a href="#">Video Production</a></li>
                        <li><a href="#">Cinematography</a></li>
                        <li><a href="#">Video Editing</a></li>
                        <li><a href="#">Motion Graphics</a></li>
                        <li><a href="#">Documentary Filmmaking</a></li>
                        <li><a href="#">Drone Photography & Videography</a></li>
                    </div>
                </ul>
            </div>
        </li>
          <li class="menu-item">
            <a href="#">
                <h3>Workplace Efficiency</h3>
            </a>
            <div class="submenu">
                <ul class="link-menu">
                    <div>
                        <li><a href="#">Time Management</a></li>
                        <li><a href="#">Task Prioritization</a></li>
                        <li><a href="#">Goal Setting</a></li>
                        <li><a href="#">Productivity Tools</a></li>
                        <li><a href="#">Team Collaboration</a></li>
                        <li><a href="#">Effective Meetings</a></li> 
                    </div>
                    <div>
                        <li><a href="#">Work-Life Balance</a></li>
                        <li><a href="#">Communication Skills</a></li>
                        <li><a href="#">Stress Management</a></li>
                        <li><a href="#">Problem Solving</a></li>
                        <li><a href="#">Decision Making</a></li>
                        <li><a href="#">Continuous Learning</a></li>
                    </div>
                </ul>
            </div>
        </li>
        <li class="menu-item">
            <a href="#">
                <h3>Science & Technology</h3>
            </a>
            <div class="submenu">
                <ul class="link-menu">
                    <div>
                        <li><a href="#">Physics</a></li>
                        <li><a href="#">Chemistry</a></li>
                        <li><a href="#">Biology</a></li>
                        <li><a href="#">Astronomy</a></li>
                        <li><a href="#">Computer Science</a></li>
                        <li><a href="#">Mathematics</a></li> 
                    </div>
                    <div>
                        <li><a href="#">Artificial Intelligence</a></li>
                        <li><a href="#">Robotics</a></li>
                        <li><a href="#">Data Science</a></li>
                        <li><a href="#">Information Technology</a></li>
                        <li><a href="#">Biotechnology</a></li>
                        <li><a href="#">Environmental Science</a></li>
                    </div>
                </ul>
            </div>
        </li>
        </ul>
        </div >
            )}
      </div>
      <div className="mid part">
        <div className="searchIcon">
          <SearchOutlinedIcon className="icon" />
        </div>
        <input
          className="searchBar"
          placeholder="what will you like to study?"
          onFocus={toggleCoursesList} // Show courses list when input is focused
          onBlur={toggleCoursesList}  // Hide courses list when input loses focus
        />
        
      </div>
      <div className="right part">
        <div className="teachDiv">
          {/* <li className="who-we-are" >{''}Who we are </li>
          <span>|</span> */}

          <li className="what-we-do">
            <span>What we do</span>
            <div className="dropdown">
              <ul>
                <li>
                  <a href="#">New Courses</a>
                </li>
                <li>
                  <a href="/browse-courses">Browse Courses</a>
                </li>
                <li>
                  <a href="#">Course Collections</a>
                </li>
                <li>
                  <a href="#">Popular Categories</a>
                </li>
                <li>
                  <a href="#">Instructors</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Course Creation</a>
                </li>
                <li>
                  <a href="#">Teaching Resources</a>
                </li>
                <li>
                  <a href="#">Instructor Dashboard</a>
                </li>
                <li>
                  <a href="#">Become an Instructor</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Webinars</a>
                </li>
                <li>
                  <a href="#">Workshops</a>
                </li>
                <li>
                  <a href="#">Conferences</a>
                </li>
                <li>
                  <a href="#">Upcoming Events</a>
                </li>
              </ul>
            </div>
          </li>

          {/* <ul>
            <li><a href="">Take a course</a></li>
            <li><a href="">Make a course</a></li>
            <li><a href="">Atend event</a></li>
       <li><a href="#">Become an Instructor</a></li>
      <li><a href="#">Teaching Resources</a></li>
      <li><a href="#">Instructor Dashboard</a></li>
      <li><a href="#">Course Creation</a></li>

          </ul> */}
        </div>
        <div className="buttons">
          <li>
            <a href="/register">Get Started </a>
          </li>
          <li>
            <a href="/courses">View Courses</a>
          </li>
          <li>
            <a href="/library">E-Library</a>
          </li>
        </div>
      </div>
      <div className="user-icon-container">
        <FaUser className="user-icon" />
      </div>
    </div>
  );
}

export default HeaderPrimary;
