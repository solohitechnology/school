import React, { useEffect } from "react"
import { Helmet } from "react-helmet";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './team.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamCard = () => {



  useEffect(() => {

    AOS.init()

  }, [])

  const team = [
    {
      cover: "./justin.jpeg",
      name: "  Justin OJUMOBI",
      work: "Senior Research scholar",
      hold: " International institute of paris ", 
      school:" 2IP"
    },

    {
      cover: "./alee.jpeg",
      name: "",
      work: "Administrator",
      // hold: "FMCPaed (Paediatrician)",
      // school: "MPH London School of Hygene and Tropical Medicine.(L S H T M)"
    },

    {
      cover: "./doctor.jpeg",
      name: "Dr Mbanefo F.N",
      work: "Paediatrician",
      hold: "FMCPaed (Paediatrician)",
      school: "MPH London School of Hygene and Tropical Medicine.(L S H T M)"

    },
  
  ]
  
  
  
  

  return (
    <>
          <Helmet>
      <title>Ogendu Academy Team</title>
        {/* Add other head elements like meta tags here */}
      </Helmet>
<div className="team_List">

      
             <div
           className="admin_img"
              data-aos="fade-right" >
            <img
              className="first_img"
              src="justin.jpeg" alt="" />
              <h3> Justin Ojumobi</h3>
              <p>Director</p>
              <strong>Senior Research scholar @</strong> <br />
              <strong>International institute of paris</strong>
             </div>

             <div
              className="admin_img"
             data-aos="fade-up" >
            <img 
            className="second_img"
             src="alee.jpeg" alt="" />
            {/* <h3>Sophie MICHEL</h3> */}
            <p>Administrator</p>
             </div>

             <div
              className="admin_img"
              //  data-aos="fade-left"
               >
            <img 
            className="last_img"
             src="doctor.jpeg" alt="" 
             />

            <h3>Dr Mbanefo F.N</h3>
            <p>Consultant</p>
            <strong>Paediatrician</strong><br />
            <strong>FMCPaed (Paediatrician)</strong><br />
            <strong>MPH London School of Hygene and <br /> Tropical Medicine.(L S H T M)</strong>
             </div>
        {/* </div> */}
      {/* ))} */}
      </div>

    </>
  )
}

export default TeamCard
