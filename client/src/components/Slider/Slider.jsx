import React from 'react'
import './Slider.css'
import img from '../../images/cardimg.png'

const Slider = () => {
  return (
    <div className="slider">
        <p>&#60;</p>
        <div className="main_content">
            <img src={img} alt="" />
            <div className="main_title">
                <div>
                <h3>UI/UX Designing Course</h3>
                <h5>Lorem ipsum is the dummy text used tokdkdi kdolll kolk
                    yundjkdi idkdldie dkdldiek idiekm in the nrooot .</h5>
                </div>
                <h3 className='flexend'>Rs.699</h3>
            </div>
        </div>
        <p>&#62;</p>
    </div>
  )
}

export default Slider