import React from 'react'
import Footer from '../Components/Footer/Footer'
import GetInTouch from '../Components/GetInTouch/GetInTouch'
import Navbar4 from '../Components/Navbar4/Navbar4'
import { useEffect } from 'react'

const Contact = () => {
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
      <Navbar4/>
      <div className='line2'></div>
      <GetInTouch/>
      <div className="bg-black"><Footer/></div>
    </>
  )
}

export default Contact
