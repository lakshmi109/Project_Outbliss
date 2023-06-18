import React from 'react'
import './productspecpg.css'

export default function Productspecpg() {
  return (
    <>
        <div className='productspecificcontainer'>
            <div className='productspecificimgbox'>
                <img className='prductspecificimg' src="https://cdn.shopify.com/s/files/1/0573/7850/4819/products/Screenshot2023-01-31at11.38.51PM.png?v=1675188885&width=823" alt="Here is the tempelate" />
            </div>


            <div className='productspecificdiscrp'>
                <span className='productspecificdiscrpspan1'>Outbless</span>

                <h1 className='productspecificdiscrph1'>Modern Illustrations</h1>

                <div className='productspecificprice'>
                    <div className='productspecificoldprice'>
                        <h5>Rs. 1,000.00</h5>
                    </div>
                    <h5>Rs. 500.00</h5>
                    <div className='saleshow'> Sale </div>
                </div>

                <div className='productspecificquantitybox'>
                    <h3>Quantity</h3>
                    <div className='productspecificbuttonscontainer'>
                        <div className='productspecificquantitychange'>
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>

                        <div className='productspecificcartbutton'>
                            <button>Buy Now</button>
                        </div>
                    </div>

                </div>

                <p>discription</p>
            </div>
        </div>
    </>
  )
}
