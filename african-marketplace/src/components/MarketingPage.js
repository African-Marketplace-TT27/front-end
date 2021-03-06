import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

//images
import logo from '../images/Sauti..svg'
import cart from '../images/Cart.svg'
import heroImg from '../images/Rectangle 33.png'
import logoWhite from '../images/Sauti.white.png'

//component
import SellerItem from './SellerItem'
import { axiosWithAuth } from '../utility/axiosWIthAuth'

export default function MarketingPage() {
    const [sellerItems, setSellerItems] = useState([])
    const [search, setSearch] = useState({
        search: ""
    })

useEffect(()=>{
    axiosWithAuth()
    .get('/products')
    .then((resp)=>{
        console.log(resp.data)
        setSellerItems(resp.data)
    })
    .catch((err)=>{
        console.log(err)
    })
}, [])

useEffect(()=>{
    axiosWithAuth()
    .get('/auth/login')
    .then((resp)=>{
        console.log(resp)
    })
})

const updateSearch=(e)=>{
setSearch({...search, [e.target.name]: e.target.value})
}
    return (
        <div>
            <Header>
                <NavLogo className="logo" style={{cursor: "pointer"}}>
                    <img src={logo} alt="Sauti Logo"></img>
                </NavLogo>
                <NavBar className="navBar">
                    <div className="searchBar">
                    <input label="Search Items" type="text" placeholder="Search" value={search.search} onChange={updateSearch}></input>
                    </div>
                    <div className="loginLinkCont">
                        <img src={cart} alt="shopping cart icon"/>
                        <Link className="loginLink" to='/login'> Login</Link>
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
            <Footer className='footer'>
                <NavLogo className="footerLogo">
                    <img src={logoWhite} alt="Sauti Logo"/>
                </NavLogo>
                <FooterLinks className="footerLinks">
                <div><Link className="link-footer" to='/about'>About</Link></div>
                <div><Link className="link-footer" to='/login'>Sell</Link></div>
                <div><Link className="link-footer" to='/help'>Help</Link></div>
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
    padding: 1% 0%;
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
    
    .loginLinkCont{
        /* border: 2px dotted turquoise; */
        width: 20%;
    }
    .loginLink{
        text-decoration: none;
        color: #868662;
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
    background: #FFFBF6;
    padding: 2%;
    padding-top:5%;

    h2{
        color: #C87D55;
        font-weight: bolder;
    }
    `
    //Footer
const Footer = styled.div`
    border: 1px solid green;
;
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

        .link-footer{
            text-decoration: none;
            color: white;
        }
    `

