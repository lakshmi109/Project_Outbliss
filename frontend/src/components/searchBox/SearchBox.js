import React, { Component } from 'react'
import './searchBox.css'
import Box from './box/Box'
export default class SearchBox extends Component {
    render() {
        return (
            <div className='searchBox'>
                <div className='searchBoxLeft'>
                    <h1 className='searchBoxHeading'>
                        Share your Blessings
                    </h1>
                    <p className='searchBoxPara'> Make impressions to your customers
                        <div className='numbers'>
                            <p>50+ Templates</p>
                            <p>|</p>
                            <p>100+ Customers</p>
                        </div>
                    </p>
                    <div className='box'>
                        <Box/>
                    </div>

                </div>
            </div>
        )
    }
}
