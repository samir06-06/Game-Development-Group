import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Imgdata1} from '../Assets/data.js';
import "./Menu1.css";

const Menu1 = () => {
  useEffect(() => {
    const button1 = document.querySelector('.btn1');
    const button2 = document.querySelector('.btn2');
    const button3 = document.querySelector('.btn3');
    const imageDiv = document.querySelector('.trio-img');
    const image = imageDiv.querySelector('img');
    const trioTextDiv = document.querySelector('.trio-text');
    const heading = trioTextDiv.querySelector('h3');
  
    const updateButtonStates = (clickedButton) => {
      // Reset styles and classes for all buttons
      [button1, button2, button3].forEach(btn => {
        btn.classList.remove('btn-on');
        btn.classList.add('btn-off');
        btn.firstChild.style.color = 'white'; // Reset color to default
      });
  
      // Set styles and classes for the clicked button
      clickedButton.classList.add('btn-on');
      clickedButton.classList.remove('btn-off');
      clickedButton.firstChild.style.color = 'purple';
  
      // Update the image source based on the clicked button
      const buttonIndex = Array.from([button1, button2, button3]).indexOf(clickedButton);
      image.src = Imgdata1[buttonIndex].imagePath;
      heading.innerHTML = Imgdata1[buttonIndex].heading
    };
  
    button1.addEventListener('click', () => {
      updateButtonStates(button1);
    });
  
    button2.addEventListener('click', () => {
      updateButtonStates(button2);
    });
  
    button3.addEventListener('click', () => {
      updateButtonStates(button3);
    });
  
    // Cleanup event listeners when the component unmounts
    return () => {
      button1.removeEventListener('click', () => {});
      button2.removeEventListener('click', () => {});
      button3.removeEventListener('click', () => {});
    };
  
  }, []);
   // The empty dependency array ensures this effect runs once after the initial render



  return (
    <div id="menu1" className="container">
      <div className='trio-displayer'>
        <div className="trio-img transition1">
          <img src={Imgdata1[0].imagePath} alt="" />
        </div>
        <div className="trio-text transition2">
          <img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64d77beb5b9d53be4ee3263e_Buzz-logo-white.svg" alt="" className="icon"/>
          <h3>{Imgdata1[0].heading}</h3>
          <p>We’re a mobile gaming company with big ambitions and with empathy <br/> at the heart of what we do. Fueled by our dream to create competitive <br/> games, we now enable millions of people around the globe to be <br/> champions. Proud of where we’re from, we’re putting Belgrade on the <br/> gaming map.</p>
          <Link to="/company"><button className="btn green">ABOUT US  &nbsp;   <img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cada3538fe85bddb778017_Vectors-Wrapper.svg" alt="" /></button></Link>

        </div>
      </div>
        <div className="trio-changer">
          <button className="transition1 btn1">
                 <h6>01</h6>
            <h6>
              OUR OFFICES
            </h6>
            <p>A short paragraph on how you save time</p>
          </button>
          <button className="transition2 btn2 ">
                 <h6>02</h6>
            <h6>
              OUR VENUE
            </h6>
            <p>a short paragraph on how you save time</p>
          </button>
          <button className="transition1 btn3 ">
                 <h6>03</h6>
            <h6>
              OUR TEAM
            </h6>
            <p>a short paragraph on how you save time</p>
          </button>
        </div>
      </div>
  )
}

export default Menu1;