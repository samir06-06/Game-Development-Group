// Menu4.jsx
import React from 'react';
import NeedHelp from '../NeedHelp/NeedHelp';
import { Imgdata2 } from '../Assets/data.js';
import "./Menu4.css";
import { Link } from 'react-router-dom'

const Menu4 = (props) => {
  const { filterCriteria } = props;

  const filteredData = Imgdata2.filter(item => {
    return item.catagory === filterCriteria || filterCriteria === 'All';
  });

  return (
    <div id="menu4" className="container">
      <h1 style={{ display: props.display }}>FEATURED NEWS</h1>
      <div className="news">
        {filteredData.map((item, index) => (
          <div className="new" key={index}>
            <div className="new-img transition1">
              <img src={item.MainImagePath} alt="" />
            </div>
            <div className="new-details transition2">
              <div className="person">
                <div className="picture">
                  <img src={item.personImgPath} alt="" />
                  <h2 className="name">{item.personName}</h2>
                </div>
                <div className="date">
                  <h5>September 22, 2023 &nbsp; / &nbsp; 2min read</h5>
                </div>
              </div>
              <div className="about-new">
                <a href=""><h3>{item.heading}</h3></a>
                <p>Sint aperiam corrupti pariatur eos magni voluptatem est temporibus quam. Quo eius omnis illo. Eum esse autem ut et et iste cupiditate voluptates est. Doloremque atque facilis saepe qui ea omnis sint reprehenderit voluptatem. Doloru</p>
              </div>
              <div className="newlink">
                <Link to="/blog_ext">READ FULL ARTICLE <img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cada3538fe85bddb778017_Vectors-Wrapper.svg" alt="" /></Link>
              </div>
            </div>
          </div>
        ))}
        <NeedHelp />
      </div>
    </div>
  );
}

export default Menu4;
