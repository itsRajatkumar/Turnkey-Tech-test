import React from 'react'
import Cards from '../Cards/Cards'
import Sidebar from '../Sidebar/Sidebar'
import './Landing.css'

const Landing = () => {
  return (
    <div className='landing'>
      <h1>Design Courses</h1>
      <h3>Courses to get you started</h3>
      <div className="gridbox">
        <Sidebar/>
        <Cards/>
      </div>
      <h3>Advance your career with new skill</h3>
    </div>
  )
}

export default Landing