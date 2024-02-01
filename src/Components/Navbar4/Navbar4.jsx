import React from 'react'
import "./Navbar4.css"
import { Link } from 'react-router-dom'
const Navbar4 = () => {
  return (
    <div id="navbar4" className='container'>
      <div className='logo'><Link to="/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64d77bbf7a2a36cb64b8cd3a_Buzz-logo-dark.svg" alt="" /></Link></div>
      <div className='page-hrefs'>
        <Link to="/games">GAMES</Link>
        <Link to="/company">COMPANY</Link>
        <Link to="/careers">CAREERS</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/template">BUY TEMPLATE</Link>
      </div>
      <div className='links'>
        <Link to="https://www.instagram.com/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cac62a5f6f6e35f6d50d3e_Vectors-Wrapper.svg" alt="" /></Link>
        <Link to="https://www.linkedin.com/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cac62c236c9284e330a67b_Vectors-Wrapper.svg" alt="" /></Link>
        <Link to="https://www.discord.com/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cac62d1029be3d9a42c138_Vectors-Wrapper.svg" alt="" /></Link>
        <Link to="https://www.twitter.com/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cac62dcd4b5a42deade9bb_Vectors-Wrapper.svg" alt="" /></Link>
      </div>
    </div>
  )
}

export default Navbar4
