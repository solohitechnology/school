import React from "react"
import Back from "../common/back/Back"
import TeamCard from "./TeamCard"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"

const Team = () => {
  return (
    <>
    <div>

      {/* <Back  style={{background:'blue'}} title='Team' /> */}
      <section  style={{ }} className='team padding'>
        <div  style={{ marginTop:'10px'}} className='container grid'>
          <TeamCard />    
        </div>
      </section>
      <Awrapper />
    </div>
    </>
  )
}

export default Team
