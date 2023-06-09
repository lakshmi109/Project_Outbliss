import React from 'react'
import './bscard.css'


export default function BSCard(props) {
  return (
    <>
        <div className='bscardcontainer'>
            <a href='/' className='bscardimgbox'>
                <img className='bscardimg' src={props.img} alt="" />
            </a>

            <div className='bscardprice'>
                <h5>{props.tempelate}</h5>
                <p>{props.price}</p>
            </div>
        </div>
    </>
  )
}
