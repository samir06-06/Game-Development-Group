import { Link } from 'react-router-dom/dist';
import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = (props) => {
  // useEffect(() => {
  //   // Select all the items you want to check for visibility
  //   const items = document.querySelectorAll('a, .logo');

  //   const isInViewport = (el) => {
  //     const rect = el.getBoundingClientRect();
  //     return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <=
  //         (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //     );
  //   };

  //   const run = () => {
  //     items.forEach((item) => {
  //       if (isInViewport(item)) {
  //         item.classList.add('show');
  //       }
  //     });
  //   };

  //   run();

  //   // Events
  //   window.addEventListener('resize', run);
  //   window.addEventListener('scroll', run);

  //   return () => {
  //     window.removeEventListener('resize', run);
  //     window.removeEventListener('scroll', run);
  //   };
  // }, []); 

  return (
    <div id="navbar" className="container">
      <div className='logo'><Link to="/"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64d77bbf7a2a36cb64b8cd3a_Buzz-logo-dark.svg" alt="" /></Link></div>
      <div className='page-hrefs'>
        <Link to="/games" className="show-on-scroll">GAMES</Link>
        <Link to="/company" className="show-on-scroll">COMPANY</Link>
        <Link to="/careers" className="show-on-scroll">CAREERS</Link>
        <Link to="/blog" className="show-on-scroll">BLOG</Link>
        <Link to="/contact" className="show-on-scroll">CONTACT</Link>
        <Link to="/template" className="show-on-scroll">BUY TEMPLATE</Link>
      </div>
      <div className='links'>
        <Link to="https://www.instagram.com/" className="show-on-scroll"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cac62a5f6f6e35f6d50d3e_Vectors-Wrapper.svg" alt="" /></Link>
        <Link to="https://www.linkedin.com/" className="show-on-scroll"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cac62c236c9284e330a67b_Vectors-Wrapper.svg" alt="" /></Link>
        <Link to="https://www.discord.com/" className="show-on-scroll"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cac62d1029be3d9a42c138_Vectors-Wrapper.svg" alt="" /></Link>
        <Link to="https://www.twitter.com/" className="show-on-scroll"><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cac62dcd4b5a42deade9bb_Vectors-Wrapper.svg" alt="" /></Link>
      </div>
    </div>
  );
}

export default Navbar
