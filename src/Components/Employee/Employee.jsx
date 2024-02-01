import React from 'react'
import "./Employee.css"
import { Link } from 'react-router-dom'
const Employee = () => {
  return (
    <div id="employee" className='container'>
      <div className='big-stats'>
        <div className='stat'>
          <h1>630</h1>
          <h3>EMPLOYEES</h3>
        </div>
        <div className='stat'>
          <h1>8</h1>
          <h3>OFFICES</h3>
        </div>
        <div className='stat'>
          <h1>58</h1>
          <h3>NATIONALITIES</h3>
        </div>
        <div className='stat'>
          <h1>24</h1>
          <h3>GAMES</h3>
        </div>
      </div>
      <h2 className='emp-h'>
      WHAT DO MORE THAN 170 PEOPLE FROM 20 DIFFERENT<br/> COUNTRIES HAVE IN COMMON? WE’RE COMPETITIVE,<br/> PASSIONATE AND LIKE TO HAVE FUN. TAKE A LOOK!
      </h2>
      <div className="emp-pictures">
        <div className='emp-pic'><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64da25511fc66ad7ce55325d_staff_03-p-500.jpg" alt="" /></div>
        <div className='emp-pic'><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64da25511fc66ad7ce55325d_staff_03-p-500.jpg" alt="" /></div>
        <div className='emp-pic'><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64da25511fc66ad7ce55325d_staff_03-p-500.jpg" alt="" /></div>
        <div className='emp-pic'><img src="https://assets-global.website-files.com/629492815ffdc45486c74126/64da25511fc66ad7ce55325d_staff_03-p-500.jpg" alt="" /></div>
      </div>
      <div className='we-hiring'>
        <h3 className='hiring-h'>
        WANT TO WORK WITH OUR AWESOME<br/> TEAM? WE ARE HIRING FOR MULTIPLE ROLES!
        </h3>
        <Link to="/company"><button className='btn purple'>ABOUT US=</button></Link>
      </div>
      
    </div>
  )
}

export default Employee
