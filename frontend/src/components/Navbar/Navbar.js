import React, { Component } from 'react';
// import { ReactDOM } from 'react';
import './Navbar.css';
import Person from './images/person.svg';
import ShoppingCart from './images/shopping cart.svg';
import Hamburger from './images/hamburger.svg';
class Navbar extends Component {
    render() {
        return (
            <div className="body">
                <div className="header">
                    <ul className="navBar">
                        <li>
                            <ul className="navLeft">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Products</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="navRight">
                                <li><a href="/"><img src={Person} alt="Person" /></a></li>
                                <li><a href="/"><img src={ShoppingCart} alt="Shopping Cart" /></a></li>
                                <li><a href="/"><img src={Hamburger} alt="Hamburger" /></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;