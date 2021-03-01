import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

//images
import logo from '../images/Sauti.png'
import cart from '../images/ShoppingCartImg.png'
import heroImg from '../images/Rectangle 33.png'
import logoWhite from '../images/Sauti.white.png'


//component
import SellerItem from './SellerItem'

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
            <ItemsContainer>
                <h2>Available Items</h2>
                <SellerItem key={sellerItems.id} sellerItems={sellerItems}></SellerItem>
            </ItemsContainer>
            <Footer>
                <NavLogo className="footerLogo">
                    <img src={logoWhite} alt="Sauti Logo"/>
                </NavLogo>
                <FooterLinks className="footerLinks">
                <div><Link to='/about'>About</Link></div>
                <div><Link to='/register'>Sell</Link></div>
                <div><Link to='/help'>Help</Link></div>
                </FooterLinks>

            </Footer>
        </div>
    )
}

// NAVIGATION BAR STYLES
const Header = styled.header`
    /* border: 3px solid black; */
    width: 100%;
    display:flex;
    `
const NavLogo = styled.div`
    /* border: 3px solid green; */
    width: 15%;
    display:flex;
    align-items: center;
    justify-content: center;
    `

const NavBar = styled.div`
/* border: 3px solid orange; */
display:flex;
justify-content: flex-end;
width:85%;

    .searchBar{
        /* border: 2px dotted black; */
        width: 30%;
        display:flex;
        align-items:center;
        justify-content: center;
    }
    
    .loginLink{
        /* border: 2px dotted turquoise; */
        width: 20%;
    }
`

//HERO IMAGE STYLES
const HeroImg = styled.div`
    img{
        /* border: 2px solid magenta; */
        width: 100%;
    }
`

// Item Container
const ItemsContainer= styled.div`
    background: #E5E5E5;
    padding: 2%;
    padding-top:5%;

    h2{
        color: #C87D55;
    }
    `

    //Footer
const Footer = styled.div`
    background: #AD7C82;
    display:flex;
    height: 50px;
`
const FooterLinks = styled.div`
    width: 85%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 1%;
        div{
            margin: 0% 1.5%;
        }
    `

