import React from 'react'
import Empathy from '../Components/Empathy/Empathy'
import Employee from '../Components/Employee/Employee'
import Journey from '../Components/Journey/Journey'
import Map from '../Components/Map/Map'
import Navbar from '../Components/Navbar/Navbar'
import NeedHelp from '../Components/NeedHelp/NeedHelp'
import Showcase3 from '../Components/Showcase3/Showcase3'
import Weird from '../Components/Weird/Weird'
import Footer from '../Components/Footer/Footer'
import { useEffect } from 'react'

const Careers = () => {
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
      <Navbar/>
      <div className='line'></div>
      <Showcase3/>
      <div className='purple-pink'>
      </div>
      <Employee/>
      <div className='bg-black'>
        <Weird/>
        <Empathy color={"white"}/>
        <NeedHelp/>
      </div>
      <Journey/>
      <Map/>
      <div className="bg-black">
        <Footer/>
      </div>
    </>
  )
}

export default Careers
