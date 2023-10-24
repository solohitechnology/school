import "./browsecourse.css";
import OnlineCourses from "../../allcourses/OnlineCourses";

const BrowseCourses = () => {
  return (
    <>
      <div className="top-div"></div>
      <div className="browse-course">
        <div className="browse-first-child">
          <h1>  CATEGORIES</h1>
          <div className="category">
          <ul>
    <li>
        <h3>DESIGN</h3>
        <ul>
            <li><a href="">- Graphic Design</a></li>
            <li><a href="">- Digital Illustration</a></li>
            <li><a href="">- Brand Identity Design</a></li>
            <li>
                <h4>WEB DESIGN</h4>
           
                    <li><a href="">- Web Design</a></li>
                    <li><a href="">- Responsive Web Design</a></li>
                    <li><a href="">- UX/UI Design</a></li>
        
            </li>
            <li>
                <h4>PRINT DESIGN</h4>
        
                    <li><a href="">- Print Media Design</a></li>
                    <li><a href="">- Packaging Design</a></li>
                    <li><a href="">- Typography in Print</a></li>
           
            </li>
        </ul>
    </li>
</ul>

            <ul>
              <li>
                <h3>CYBERSECURITY</h3>
                <ul>

            
                  <li>
                    <a href="">- Network Security</a>
                  </li>
                  <li>
                    <a href="">- Cyber Threat Analysis</a>
                  </li>
                  <li>
                    <a href="">- Ethical Hacking</a>
                  </li>
          
                <h4>WEB SECURITY</h4>
         
                  <li>
                    <a href="">- Web Application Security</a>
                  </li>
                  <li>
                    <a href="">- Secure Coding Practices</a>
                  </li>
             
                <h4>DATA SECURITY</h4>
           
                  <li>
                    <a href="">- Data Encryption</a>
                  </li>
                  <li>
                    <a href="">- Data Privacy Regulations</a>
                  </li>
                  </ul>
              </li>
            </ul>

            <ul>
    <li>
        <h3>DEVELOPMENT COURSES</h3>
        <ul>
            <li><a href="">- Front-End Development</a></li>
            <li><a href="">- Back-End Development</a></li>
            <li><a href="">- Full-Stack Development</a></li>
            <li>
                <h4>WEB DEVELOPMENT</h4>
           
                    <li><a href="">- HTML/CSS</a></li>
                    <li><a href="">- JavaScript</a></li>
                    <li><a href="">- React.js</a></li>
                    <li><a href="">- Angular</a></li>
            
            </li>
            <li>
                <h4>MOBILE APP DEVELOPMENT</h4>
           
                    <li><a href="">- Android App Development</a></li>
                    <li><a href="">- iOS App Development</a></li>
                    <li><a href="">- Cross-Platform Development</a></li>
              
            </li>
            <li>
                <h4>DATA SCIENCE</h4>
            
                    <li><a href="">- Python for Data Science</a></li>
                    <li><a href="">- Machine Learning</a></li>
                    <li><a href="">- Big Data Technologies</a></li>
              
            </li>
        </ul>
    </li>
</ul>

<ul>
    <li>
        <h3>SCIENCE AND TECHNOLOGY</h3>
        <ul>
            <li><a href="">- Physics</a></li>
            <li><a href="">- Chemistry</a></li>
            <li><a href="">- Biology</a></li>
            <li>
                <h4>COMPUTER SCIENCE</h4>
  
                    <li><a href="">- Programming Fundamentals</a></li>
                    <li><a href="">- Data Structures and Algorithms</a></li>
                    <li><a href="">- Web Development</a></li>
                    <li><a href="">- Artificial Intelligence</a></li>
       
            </li>
            <li>
                <h4>ENGINEERING</h4>
         
                    <li><a href="">- Electrical Engineering</a></li>
                    <li><a href="">- Mechanical Engineering</a></li>
                    <li><a href="">- Civil Engineering</a></li>
      
            </li>
            <li>
                <h4>INFORMATION TECHNOLOGY</h4>
       
                    <li><a href="">- IT Security</a></li>
                    <li><a href="">- Database Management</a></li>
                    <li><a href="">- Network Administration</a></li>
       
            </li>
        </ul>
    </li>
</ul>

          </div>
        </div>

        <div className="browse-secound-child">
          {/* <div>
                    <input type="text" placeholder='search...' />
                </div> */}
          <OnlineCourses />
        </div>
      </div>
    </>
  );
};

export default BrowseCourses;
