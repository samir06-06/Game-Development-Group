import React from 'react'
import Navbar3 from '../Components/Navbar3/Navbar3'
import Thoughts from '../Components/Thoughts/Thoughts'
import Menu4 from '../Components/Menu4/Menu4'
import Footer from '../Components/Footer/Footer'
import { useEffect, useState } from 'react'
const Blog = () => {
  
  const [filterCriteria, setFilterCriteria] = useState('All');

  const updateFilterCriteria = (criteria) => {
    setFilterCriteria(criteria);
  }

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
      <Navbar3/>
      <Thoughts updateFilterCriteria = {updateFilterCriteria} />
      <Menu4 display={'none'} filterCriteria = {filterCriteria}/>
      <div className="bg-black">
      <Footer/>
      </div>
      
    </>
  )
}

export default Blog
