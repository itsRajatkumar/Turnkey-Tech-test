import React from 'react'
import Card from './Card/Card'
import './Cards.css'

const Cards = () => {
    const data = [
        {
            title:"UI/UX Designing Course",
            price:"Rs.699"
        },
        {
            title:"UI/UX Designing Course",
            price:"Rs.699"
        },
        {
            title:"UI/UX Designing Course",
            price:"Rs.699"
        },
        {
            title:"UI/UX Designing Course",
            price:"Rs.699"
        },
        {
            title:"UI/UX Designing Course",
            price:"Rs.699"
        },
        {
            title:"UI/UX Designing Course",
            price:"Rs.699"
        }
    ]
  return (
    <div className='card_container'>
        {
            data.map((element, index) =>{
               
             return <Card element={element} index = {index}/>
            } )
        }
    </div>
  )
}

export default Cards