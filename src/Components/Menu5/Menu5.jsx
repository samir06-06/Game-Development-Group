import "./Menu5.css"
import React from 'react'
import { Imgdata2 } from '../Assets/data.js';


const Menu5 = () => {
  const clickedItem = JSON.parse(localStorage.getItem('clickedItem'));
  const id = clickedItem.id;
  const takenData = Imgdata2.filter(item => item.id === id);
  const selectedItem = takenData.length > 0 ? takenData[0] : null; // Select the first matched item if any, otherwise null
  console.log(selectedItem);
  // Further logic with selectedItem

  // datani otururem, hamisinda isleyir, axirinci postda amma iki data oturur ve sehv olani secir, gozle gosterim
  //dataya baxdim amma problrm yoxdu orda

  return (
    <div id="menu5" className="container">
      <div className="img">
        <img src={takenData[0].MainImagePath} alt="" />
      </div>
      <div className="person">
        <div className="picture">
          <img src={takenData[0].personImgPath} alt="" />
          <h4 className="name">{takenData[0].personName}</h4>
        </div>
        <div className="date">
          <h3>SEPTEMBER 22, 2023 &nbsp; / &nbsp; 2MIN READ</h3>
        </div>
      </div>
      <div className="line"></div>
      <h2>
      {takenData[0].heading}
      </h2>
      <h5>Exercitationem laboriosam debitis consequuntur accusantium iste.</h5>
      <p>Illo debitis nulla omnis sed sed. Similique omnis non et. Laboriosam sit aperiam dolorum commodi eum saepe corrupti quia. Necessitatibus a possimus ab et cum iure placeat recusandae est. Ab aut nihil ut quia quas sunt veritatis iste atque. Et consequatur autem ut distinctio molestias nihil est.</p>
      <h6>Impedit laborum nihil cumque ut ut.</h6>
      <p className="green-line">Qui et voluptate distinctio dolore rerum ipsa recusandae distinctio velit. Minus qui voluptatem est repellat commodi qui consequatur. Nostrum asperiores saepe rerum possimus. Dolore non voluptatem quia sed dolores. Aspernatur et voluptatem id. Nemo tenetur consequatur aliquam explicabo eius reprehenderit vero.</p>
      <p>Ipsa est saepe non qui autem eos est inventore maxime. Voluptas quam ut voluptatem enim placeat. Iure dolorem est incidunt ut dolore. Aut similique dicta voluptatem est ipsam cupiditate dicta perspiciatis consequuntur. Eligendi reiciendis eos fugiat sint quia.</p>
      <p>Nulla necessitatibus ab. Id atque qui natus consequuntur. A corporis quia unde nesciunt et est quaerat et ducimus.</p>
      <h5>Harum reiciendis sed.</h5>
      <p>Ex placeat perspiciatis eius id quo voluptatum praesentium. Voluptate odit vero in dolor iste enim ea perferendis autem. Magnam amet incidunt nemo et. Ad odit quo dolor ea fugit unde itaque hic.</p>
      <h6>Dolor accusamus placeat consectetur.</h6>
      <p className="green-line">Reiciendis facere quisquam in sit consequuntur ea dolorum iure. Laudantium illo esse reprehenderit aut asperiores consequatur. Quasi vel ratione porro est non quia velit beatae earum.</p>
      <p>Consequuntur ad sequi eius iusto voluptate. Ratione qui architecto rem. Aliquam maiores aut deserunt explicabo facilis nobis. Sint voluptatem ratione dolor vero accusantium quis consequatur. Dicta officia et et molestias. Blanditiis qui in repellendus fugiat vero ut.</p>
      <p>In quo eum velit expedita eum sunt consequatur libero. Omnis et nostrum ab. Assumenda ad ullam perferendis ut totam velit dolorem odit ex. Saepe est dicta repudiandae et sit eius hic hic sint. Dolorem quo nam natus commodi eos. Odio similique nihil et molestiae sed aut nihil.</p>

  </div>
  )
}

export default Menu5