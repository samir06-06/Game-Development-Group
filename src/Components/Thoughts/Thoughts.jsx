import React from 'react'
import "./Thoughts.css"
const Thoughts = ({updateFilterCriteria}) => {
  return (
    <div id='thoughts' className='container'>
      <h1 className='share-h'>
      SHARE YOUR THOUGHTS <br/>& OPINIONS
      </h1>
      <a onClick={() => {updateFilterCriteria('All')}}>All</a>
      <a onClick={() => {updateFilterCriteria('Art')}}>Art</a>
      <a onClick={() => {updateFilterCriteria('Games')}}>Games</a>
      <a onClick={() => {updateFilterCriteria('Gaming')}}>Gaming</a>
    </div>
  )
}

export default Thoughts
