import React from 'react'
import Footer from '../Components/Footer/Footer'
import Menu3 from '../Components/Menu3/Menu3'
import Showcase2 from '../Components/Showcase2/Showcase2'
import LoveIt from '../Components/LoveIt/LoveIt'
import Featured from '../Components/Featured/Featured'
import VideoAbout from '../Components/VideoAbout/VideoAbout'
import Navbar2 from '../Components/Navbar2/Navbar2'
import { useEffect } from 'react'
const Blog = () => {
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
      <Showcase2/>
      <LoveIt/>
      <Menu3 display={"none"}/>
      <div className='bg-black'>
        <Featured/>
        <VideoAbout/>
      <Footer/>
      </div>
    </>
  )
}

export default Blog
