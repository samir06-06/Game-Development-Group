import React from 'react'
import Empathy from '../Empathy/Empathy'
import "./Stats.css"
const Stats = () => {
  return (
    <div id="stats" className='container'>
      <div className='big-stats'>
        <div className='stat'>
          <h1>2.2m</h1>
          <h3>PLAYERS</h3>
        </div>
        <div className='stat'>
          <h1>6</h1>
          <h3>PLATFORMS</h3>
        </div>
        <div className='stat'>
          <h1>20</h1>
          <h3>CHARACTERS</h3>
        </div>
        <div className='stat'>
          <h1>3+</h1>
          <h3>YEARS</h3>
        </div>
      </div>
      <p>There’s no simple recipe or magic formula to achieve our dream. What we do know, however, is that without players Supercell doesn’t exist. Creating lovable worlds and characters that players want to come back to over and over again is at the heart of how we design and operate our games.</p>
      <div>
        <h2>IN THE END, THE QUESTION WE ASK OURSELVES IS: “ARE WE BUILDING SOMETHING THAT COULD BE IMPORTANT?”</h2>
        <p>Filip Mravic - SPACE inc. Founder & CEO</p>
        <Empathy/>
      </div>
    </div>
  )
}
export default Stats
