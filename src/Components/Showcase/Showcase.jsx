import React from 'react'
import "./Showcase.css"
const Showcase = () => {
  return (
    <div id="show-case" >
      <div className='sliding-text'><h1>GAMES+PASSION</h1></div>
      <div className="text container transition1">
        <h5>WE MAKE  AWESOME GAMES FOR <br/> THE <span>GENERATIONS</span> TO COME</h5>
        <p>MORE THAN TWENTY YEARS OF EXPERIENCE IN CHARGE IF<br/> CREATING GAMES THAT HAS BEEN PLAYED BY MORE THAN 100<br/> MILLION PEOPLE WORLDWIDE</p>
        <button className='btn green'>BUY TEMPLATE  &nbsp;   <img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cada3538fe85bddb778017_Vectors-Wrapper.svg" alt="" /></button>
      </div>
      <div className='purple-pink'>
      </div>
      <div className="stores container">
        <a href="" className='transition1'><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64da1b402e307274f2690407_googleplay%201.webp" alt="" /></a>
        <a href="" className='transition2'><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64da1b55a0c05cbac9464af6_App%20Store.webp" alt="" /></a>
      </div>
      <div className="qaqash">
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default Showcase
