import React from 'react'
import './cart.css'
import Cartitem from './Cartitem'

export default function Cart() {
  return (
    <div className='cart'>
        <div className='cartmaincontainer'>
            <div className='cartcontainer'>
                <div className='cartcontaineritemslarge'>
                    Product
                </div>

                <div className='cartcontaineritemsnortmal'>
                    Price
                </div>

                <div className='cartcontaineritemsnortmal'>
                    QTY
                </div>

                <div className='cartcontaineritemsnortmal'>
                    Unit Price
                </div>
            </div>



            <Cartitem
            product = "Tempelate 1"
            img = "https://images.meesho.com/images/products/119544768/7pyu4_512.jpg"
            totalprice = "20"
            unitprice = "10"
            qty = "2"
            />
            

            <Cartitem
            product = "Tempelate 1"
            img = "https://images.meesho.com/images/products/119544768/7pyu4_512.jpg"
            totalprice = "20"
            unitprice = "10"
            qty = "2"
            />
        </div>

        <div className='carttotal'>
            <div className='carttotalempty'>
                empty box
            </div>

            <div className='carttotalpricebox'>
                <div>
                    <ul>
                        <li>
                            <span>Subtotal</span>
                            <span>price</span>
                        </li>

                        <li>
                            <span>Shipping fee</span>
                            <span>Price</span>
                        </li>

                        <li>
                            <span>Coupon</span>
                            <span>Price</span>
                        </li>
                    </ul>

                    <div className='cartitemstotalprice'>
                        <span>Total</span>
                        <span>Price</span>
                    </div>

                    <button>
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
