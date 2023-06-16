import React from 'react'
import './cartitem.css'

export default function Cartitem(props) {
  return (
    <div className='cartitemcontainer'>
        <div className='cartitemcontaineritemslarge'>
            <a href="/" className='cartitemproduct'>
                <div className='cartitemproductpicbox'>
                    <img src={props.img} className='cartitemproductimg' alt="TempelateX" />
                </div>
                <span> {props.product} </span>
            </a>
        </div>

        <div className='cartitemcontaineritemsnortmal'>
            ${props.totalprice}
        </div>

        <div className='cartitemcontaineritemsnortmal'>
            <div className='cartitemqtybox'>
                <button> - </button>
                <span> {props.qty} </span>
                <button> + </button>
            </div>
        </div>

        <div className='cartitemcontaineritemsnortmal'>
            ${props.unitprice}
        </div>
    </div>
  )
}
