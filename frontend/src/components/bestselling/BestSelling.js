import React from 'react'
import './bestselling.css'
import BSCard  from './BSCard'


export default function BestSelling() {
  return (
    <>
        <div className='bscontainer'>

            <div className='bstextcontainer'>
                <h2>Best selling Cards</h2>
                <p>Get posters for all the festivals in a budget  that is lesser than your mobile bill</p>
                
                <button class="cta">
                    <span>See All</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
                
            </div>

            <div className='bscontainercard'>
                <ul>
                    <li>
                        <BSCard tempelate="Tempelate 1" price = "1,400.00" img = "https://www.pinkvilla.com/images/2022-09/diwali_greetings_and_wishes.jpg"/>
                    </li>


                    <li>
                        <BSCard tempelate="Tempelate 2" price = "800.00" img = "https://img.freepik.com/free-vector/happy-diwali-elegant-festival-greeting-card-with-diya-design_1017-28098.jpg?w=2000"/>
                    </li>


                    <li>
                        <BSCard tempelate="Tempelate 3" price = "300.00" img = "https://img.freepik.com/free-vector/happy-diwali-elegant-festival-greeting-card-with-diya-design_1017-28098.jpg?w=2000"/>
                    </li>
                </ul>
            </div>
        </div>
        
    </>
  )
}
