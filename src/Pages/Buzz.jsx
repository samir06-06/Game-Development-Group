import React from 'react'
import Showcase from '../Components/Showcase/Showcase'
import Menu1 from '../Components/Menu1/Menu1'
import Menu2 from '../Components/Menu2/Menu2'
import Menu3 from '../Components/Menu3/Menu3'
import Menu4 from '../Components/Menu4/Menu4'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import { useEffect, useState} from 'react'
const Buzz = () => {

  

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
     <Navbar/>
     <div className='line'></div>
     <Showcase/>
     <Menu1/>
     <Menu2/>
     <Menu3/>
      <Menu4 filterCriteria = {filterCriteria} />
     <div className="bg-black">
     <Footer/>
     </div>
     
    </>
  )
}

export default Buzz
