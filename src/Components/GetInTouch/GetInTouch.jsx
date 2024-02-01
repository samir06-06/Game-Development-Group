import React from 'react'
import NeedHelp from '../NeedHelp/NeedHelp'
import "./GetInTouch.css"
const GetInTouch = () => {
  return (
    <div id="get-in-touch" className='container'>
      <div className="get-inform">
        <h1>GET IN TOUCH <span>WITH BUZZ</span></h1>
        <h5>If you're a player and need help, please visit our Support page. Interested in working for us? Head to our Careers page for all our current openings and general applications.</h5>
      </div>
      <div className="form">
        <div className="names">
          <input type="text" placeholder='FIRST NAME'/>
          <input type="text" placeholder='LAST NAME' />
        </div>
        <input type="email" name="" id="" placeholder='EMAIL ADRESS' />
        <textarea placeholder='WRITE YOUR MESSAGE'/>
        <input  className="submit" type="submit" value="SUBMIT YOUR MESSAGE" id="" />
      </div>
      <p>By Signing up I agree to receive information from the selected teams above and their partners in the form of news releases, special offers, promotions and details about live events in accordance with the respective team’s Privacy Policy linked below.</p>

      <div className='locations'>
        <div className="location">
          <div className='location-icon'><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cc3116ba44236595cd63aa_Vectors-Wrapper.svg" alt="" /></div>
        <h4>SPACE Inc.</h4>
        <h6>128 Liberty St, New York, NY 10007 <br/>
            space@inc.com</h6>
        </div>
        <div className="location">
          <div className='location-icon'><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cc3116ba44236595cd63aa_Vectors-Wrapper.svg" alt="" /></div>
        <h4>SPACE Inc.</h4>
        <h6>128 Liberty St, New York, NY 10007 <br/>
            space@inc.com</h6>
        </div>
        <div className="location">
          <div className='location-icon'><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cc3116ba44236595cd63aa_Vectors-Wrapper.svg" alt="" /></div>
        <h4>SPACE Inc.</h4>
        <h6>128 Liberty St, New York, NY 10007 <br/>
            space@inc.com</h6>
        </div>
        <div className="location">
          <div className='location-icon'><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64cc3116ba44236595cd63aa_Vectors-Wrapper.svg" alt="" /></div>
        <h4>SPACE Inc.</h4>
        <h6>128 Liberty St, New York, NY 10007 <br/>
            space@inc.com</h6>
        </div>
      </div>
      <NeedHelp/>
    </div>
  )
}

export default GetInTouch
