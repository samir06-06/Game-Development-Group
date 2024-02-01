import React from 'react'
import NeedHelp from '../NeedHelp/NeedHelp'
import "./VideoAbout.css"
import Giphy from "../Assets/images/Sonic.gif"
const VideoAbout = () => {
  return (
    <div id='video-about'>
      <div className='video'><img src={Giphy} alt="" />
      </div>
      <div className='why'>
        <div className='why-here'>
          <h5>WHY WE ARE HERE</h5>
          <p>We believe games have the power to bring people around the world
           together and closer to each other. We work to create new, innovative,
            memorable experiences no one has played before. This is why we try to
             design games that excite wide and diverse player communities</p>
        </div>
        <div className='why-here'>
          <h5>UNCOVER MORE ABOUT OUR CULTURE</h5>
          <p>There’s no simple recipe or magic formula to achieve our dream. What
             we do know, however, is that without players Supercell doesn’t exist.
              Creating lovable worlds and characters that players want to come back
               to over and over again is at the heart of how we design </p>
        </div>
      </div> 
      <NeedHelp/>
    </div>
  )
}

export default VideoAbout
