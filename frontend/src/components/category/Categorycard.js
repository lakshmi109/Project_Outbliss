import React from 'react'
import './categorycard.css'

export default function Categorycard(props) {
  return (
    <>
        <div className='categorycardcontainer'>
            <div className='categorycard'>
                <img  className = "categorycardimg" src={props.img} alt="Category 1"/>
            </div>

            <div className='categorydiscription'>
                <h3>{props.category}</h3>
            </div>
        </div>
    </>
  )
}
