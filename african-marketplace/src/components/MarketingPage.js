import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

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
            <Header>
                <NavLogo className="logo">
                    <img src={logo} alt="Sauti Logo"></img>
                </NavLogo>
                <NavBar className="navBar">
                    <div className="searchBar">
                    <h6> Search Bar </h6>
                    </div>
                    <div className="loginLink">
                        <img width="65px" src={cart} alt="shopping cart icon"/>
                        <Link to='/login'>Login</Link>
                    </div>
                </NavBar>
            </Header>
            <HeroImg className="heroImg">
                <img src={heroImg} alt="woman grocery shopping"/>
            </HeroImg>
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

// NAVIGATION BAR STYLES
const Header = styled.header`
    border: 3px solid black;
    width: 100%;
    display:flex;
    `
const NavLogo = styled.div`
    border: 3px solid green;
    width: 15%;
    display:flex;
    align-items: center;
    justify-content: center;
    `

const NavBar = styled.div`
border: 3px solid orange;
display:flex;
justify-content: flex-end;
width:85%;

    .searchBar{
        border: 2px dotted black;
        width: 30%;
        display:flex;
        align-items:center;
        justify-content: center;
    }
    
    .loginLink{
        border: 2px dotted turquoise;
        width: 20%;
    }
`

//HERO IMAGE STYLES
const HeroImg = styled.div`
    img{
        border: 2px solid magenta;
        width: 100%;
    }
`