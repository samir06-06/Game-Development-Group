import React from 'react'
import "./Amazing.css"
import street_fighter_png from "../Assets/images/street-fighter1.png" 
const Amazing = () => {
  return (
    <div id='amazing' className='container'>
      <div className="pic-part"><img src={street_fighter_png} alt="" /></div>
      <div className="text-part">
        <h1 className='amazing'><span>AMAZING</span> CITY</h1>
        <p className="transition1">There’s no simple recipe or magic formula to achieve our dream.
         What we do know, however, is that without players Supercell
         doesn’t exist. Creating lovable worlds and characters that players
         want to come back to over and over again is at the heart of how
         we design and operate our games.
        </p>
        <div className="o-g-store">
          <a href=""><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64da1b08c30f30ecaec8b343_Google_Play_Store_badge_EN%201.webp" alt=""/></a>
          <a href=""><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cae0bc87f968be533df17a_Vectors-Wrapper.svg" alt=""/></a>
        </div>
        <h6>GAMEPLAY</h6>
        <p>Single-player, role-playing game with multiplayer interactions</p>
        <ul>
          <li className='transition1'>Release: May, 2015</li>
          <li className='transition2'> Platform: iOS, Android</li>
        </ul>
      </div>
    </div>
  )
}

export default Amazing
