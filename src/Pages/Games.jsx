import React from 'react'
import Amazing from '../Components/Amazing/Amazing'
import Asked from '../Components/Asked/Asked'
import Footer from '../Components/Footer/Footer'
import Navbar2 from '../Components/Navbar2/Navbar2'
import Stats from '../Components/Stats/Stats'
import VideoAbout from '../Components/VideoAbout/VideoAbout'
import { useEffect } from 'react'

const Games = () => {
  useEffect(() => {
    // Select all the items you want to check for visibility
    const items = document.querySelectorAll('a, .logo, .transition1, .transition2');

    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const run = () => {
      items.forEach((item) => {
        if (isInViewport(item)) {
          item.classList.add('show');
        }
      });
    };

    run();

    // Events
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);

    return () => {
      window.removeEventListener('resize', run);
      window.removeEventListener('scroll', run);
    };
  }, []); 
  return (
    <>
      <Navbar2/>
      <Amazing/>
      <Stats/>
      <div className="bg-black">
        <Asked/>
        <VideoAbout/>
        <Footer/>
      </div>
    </>
  )
}

export default Games
