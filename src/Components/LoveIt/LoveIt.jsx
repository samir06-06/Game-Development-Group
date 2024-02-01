import React from 'react'
import "./LoveIt.css"
import Crash from "../Assets/images/Crash.png"
const LoveIt = () => {
  return (
    <div id="love-it" className="container">
      <div className="text-half">
      <h3>WHY YOU MIGHT LOVE IT HERE</h3>
      <p>We believe games have the power to bring people around the world together and closer to each other. We work to create new, innovative, memorable experiences no one has played before. This is why we try to design games that excite wide and diverse player communities as well as to expand the audience for otherwise smaller “niche” game concepts.
    
    <br/>
    <br/>If you love to think, talk, play and make games, Supercell is the place for you. We’ve built a company of proactive and independent teams with the freedom to do what they think is best for their players, our games and the company at large.</p>
    <button className="btn trwhite">
      Read Full Article
    </button>
      </div>
    <div className="pic-half">
      <img src={Crash} alt="" />
    </div>
  </div>
  )
}

export default LoveIt
