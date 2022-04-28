import React from 'react'
import img from '../../../images/cardimg.png'

const Card = ({element,index}) => {
  return (
    <div key={index} className='card'>
        <img src={img} alt="" />
        <h3>{element.title}</h3>
        <h5>{element.price}</h5>
    </div>
  )
}

export default Card