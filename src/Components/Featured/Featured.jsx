import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Featured.css';

const Featured = () => {
  const [selectedSphere, setSelectedSphere] = useState('Art & Design');

  const jobOptions = [
    { sphere: 'Art & Design', title: 'SENIOR UI ARTIST' },
    { sphere: 'Art & Design', title: 'GRAPHIC DESIGNER' },
    { sphere: 'Art & Design', title: 'BUSINESS & DATA ANALYST' },
    { sphere: 'Art & Design', title: 'UX DESIGNER' },
  
    { sphere: 'Engineering', title: 'JAVASCRIPT DEVELOPER' },
    { sphere: 'Engineering', title: 'GAME USER RESEARCHER' },
  
    { sphere: 'Marketing', title: 'SOCIAL MEDIA MANAGER' },
    { sphere: 'Marketing', title: 'VIDEO EDITOR' },
    { sphere: 'Marketing', title: 'GOOGLE ADS SPECIALIST' },
    { sphere: 'Marketing', title: 'PR MANAGER' },
  ];
  
  const filteredOptions = jobOptions.filter(
    (option) => option.sphere === selectedSphere
  );

  return (
    <div id="featured">
      <h2>FEATURED POSITIONS</h2>
      <p>We’re a mobile gaming company with big ambitions and with empathy at the heart</p>
      <div className='job-spheres'>
        <a onClick={() => setSelectedSphere('Art & Design')}>Art & Design</a>
        <a onClick={() => setSelectedSphere('Engineering')}>Engineering</a>
        <a onClick={() => setSelectedSphere('Marketing')}>Marketing</a>
      </div>
      <div className='job-options'>
        {filteredOptions.map((option, index) => (
          <div className='option' key={index}>
            <h4>{option.title}</h4>
            <Link to='/contact'>VIEW POSITION <img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cbdc72c1688cb199b24223_arrow%20right%20white.svg" alt=""></img></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
