import "./Menu2.css"
import React from 'react'
import { Link } from "react-router-dom"
const Menu2 = () => {
  return (
    <div id="menu2" className="container">
      <div className="our-games">
        <div className="o-g-text">
          <span>OUR GAMES</span>
          <h4>
          MORE THAN TWENTY YEARS OF EXPERIENCE IN CHARGE IF<br/> CREATING GAMES THAT HAS BEEN PLAYED
          </h4>
        </div>
        <div className="o-g-store">
          <a href=""><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64da1b08c30f30ecaec8b343_Google_Play_Store_badge_EN%201.webp" alt="" /></a>
          <a href=""><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cae0bc87f968be533df17a_Vectors-Wrapper.svg" alt="" /></a>
        </div>
      </div>
      <div className="o-g-four">
        <div className="one-of-four transition2"><Link to="/games"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64d78f2d3651930e89a5e466_Game%20Image%201-p-500.webp" alt="" /></Link><span>STEAL MANIACS</span></div>
        <div className="one-of-four transition1"><Link to="/games"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64d78f40a16855af8b10a954_Game%20Image%202-p-500.webp" alt="" /></Link><span>THE LEGEND</span></div>
        <div className="one-of-four transition2"><Link to="/games"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64d78f4c7a2a36cb64c63498_Game%20Image%203-p-500.webp" alt="" /></Link><span>LIQUID MONSTER</span></div>
        <div className="one-of-four transition1"><Link to="/games"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64d78f564baa0aa1aa9e8e53_Game%20Image%204-p-500.webp" alt="" /></Link><span>PARTY KINGS</span></div>
      </div>
      <div className="small-purple-pink"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64da1a9b62786b295da219aa_Purple-Banner-p-2000.webp" alt="" />
      </div>
    </div>
  )
}

export default Menu2
