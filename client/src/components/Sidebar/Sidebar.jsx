import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h4>Filter</h4>
        <h5>Topic</h5>

        <div className="filter_box">
            <div>

            <p>Design </p><i class="bi bi-x-square-fill"></i>

            </div>
        </div>
        <h5>Level</h5>
        <div className="check">

            <input type="checkbox" name="data" id="data1" />
            <label htmlFor="data1">Beginner</label>
        </div>
        <div className="check">

            <input type="checkbox" name="data" id="data1" />
            <label htmlFor="data1">Intermediate</label>
        </div>
        <div className="check">

            <input type="checkbox" name="data" id="data1" />
            <label htmlFor="data1">Advanced</label>
        </div>
        <div className="check">

            <input type="checkbox" name="data" id="data1" />
            <label htmlFor="data1">All of the Above</label>
        </div>
        <h5>Price</h5>
        <div className="check">

            <input type="checkbox" name="data" id="data1" />
            <label htmlFor="data1">499 - 1000</label>
        </div>
        <div className="check">

            <input type="checkbox" name="data" id="data1" />
            <label htmlFor="data1">1000 - 1500</label>
        </div>
        <div className="check">

            <input type="checkbox" name="data" id="data1" />
            <label htmlFor="data1">499 - 1000</label>
        </div>
        <div className="check">

            <input type="checkbox" name="data" id="data1" />
            <label htmlFor="data1">1000 - 1500</label>
        </div>

    </div>
  )
}

export default Sidebar