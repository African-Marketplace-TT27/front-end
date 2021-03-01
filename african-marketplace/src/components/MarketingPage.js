import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

//images
import logo from '../images/Sauti.png'
import cart from '../images/ShoppingCartImg.png'
import heroImg from '../images/Rectangle 33.png'
import logoWhite from '../images/Sauti.white.png'
import sellerImg from '../images/Rectangle 11.png'

export default function MarketingPage() {
    const [sellerItems, setSellerItems] = useState([])

useEffect(()=>{
    axios.get('https://reqres.in/api/unknown')
    .then((resp)=>{
        console.log(resp.data.data)
        setSellerItems(resp.data.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}, [])

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
                    <div className="loginLink">
                        <img width="65px" src={cart} alt="shopping cart icon"/>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </header>
            <div className="heroImg">
                <img src={heroImg} alt="woman grocery shopping"/>
            </div>
            <div className="availableItems">
                <div>
                    <h2>Available Items</h2>
                </div>
                <div className="availableItemContainer">
                    {sellerItems.map((item)=>{
                        return <div className="sellerItem">
                            {/* //Change the image below to be the api.image */}
                            <img src={sellerImg} alt="Bell Peppers" />
                            <div className="sellerItemDetails">
                                <div>
                                    <h6>{item.prodName ? item.prodName : "Bell Peppers"}</h6>
                                    <h6>{item.price ? item.price : "$99.99"}</h6>
                                </div>
                                <div>
                                    <p>{item.prodDesc ? item.prodDesc : "Blah Blah Blah Blah Blah" }</p>
                                </div>
                                <div>
                                    
                                    <p>{item.country ? item.country : "Nairobi, Kenya"}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <footer>
                <div className="footerLogo">
                    <img src={logoWhite} alt="Sauti Logo"/>
                </div>
                <div className="footerLinks">
                <Link to='/about'>About</Link>
                <Link to='/register'>Sell</Link>
                <Link to='/help'>Help</Link>
                </div>

            </footer>
        </div>
    )
}
