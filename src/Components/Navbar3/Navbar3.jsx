import React from 'react'
import "./Navbar3.css"
import { Link } from 'react-router-dom'
const Navbar3 = () => {
  return (
    <div id="navbar3" className='container'>
      <div className='logo'><Link to="/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64d77beb5b9d53be4ee3263e_Buzz-logo-white.svg" alt="" /></Link></div>
      <div className='page-hrefs'>
        <Link to="/games">GAMES</Link>
        <Link to="/company">COMPANY</Link>
        <Link to="/careers">CAREERS</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/template">BUY TEMPLATE</Link>
      </div>
      <div className='links'>
        <Link to="https://www.instagram.com/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64d781e45b9d53be4ee7d880_Instagram.svg" alt="" /></Link>
        <Link to="https://www.linkedin.com/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cc1ae553d55257cc5342f9_ln%20white.svg" alt="" /></Link>
        <Link to="https://www.discord.com/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cc1ae5566b159f0fb3f7bb_discord%20white.svg" alt="" /></Link>
        <Link to="https://www.twitter.com/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cc1ae68b831a4f77f107f9_twitter%20white.svg" alt="" /></Link>
      </div>
    </div>
  )
}

export default Navbar3
