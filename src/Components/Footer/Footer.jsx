import "./Footer.css"
import React from 'react'
import jhonny_cage from "../Assets/images/johnny-cage.png"
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-text">
      <a href=""><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64d77beb5b9d53be4ee3263e_Buzz-logo-white.svg" alt="" /></a>
      <h2 className="transition2">We make awesome games for the<br/> generations to come</h2>
      <p>Our dream is to create great games that as many people as possible play for years and that are<br/> remembered forever</p>
      <ul className="f-links transition1">
        <li><a href="">Games</a></li>
        <li><a href="">Company</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contace &nbsp;<span>NEW</span></a> </li>
      </ul>
      <div className='links'>
        <a href=""><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cbff771b7a9fc9b83b1e33_Vectors-Wrapper.svg" alt="" /></a>
        <a href=""><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cbff78665a88b5a9029649_Vectors-Wrapper.svg" alt="" /></a>
        <a href=""><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cbff7910c28ab7669f02af_Vectors-Wrapper.svg" alt="" /></a>
        <a href=""><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cbff7ad96a8391c6458ce1_Vectors-Wrapper.svg" alt="" /></a>
      </div>
      <div className="horizontal-line"> </div>
      <p>©  BUZZ 2023. “Space”, “Brick”, “Buzz”, “and their logos are trademarks of Space Limited. All rights <br/>reserved, Powered by Ragebite.com</p>
      </div>
      <div className="footer-pic "><img src={jhonny_cage} alt="" /></div>
    </div>
  )
}

export default Footer
