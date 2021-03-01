import React from 'react'

//images
import logo from '../images/Sauti.png'
import cart from '../images/ShoppingCartImg.png'

export default function MarketingPage() {
    return (
        <div>
            <header>
                <div className="logo">
                    <img src={logo} alt="Sauti Logo"></img>
                </div>
                <div className="navBar">
                    <div className="searchBar">
                        <h6> Search Bar </h6>
                    </div>
                    <div className="login">
                        <img width="65px" src={cart} alt="shopping cart icon"/>
                        <h6>Login</h6>
                    </div>
                </div>

            </header>
        </div>
    )
}
