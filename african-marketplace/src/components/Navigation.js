import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

// Images
import Sauti from '../images/Sauti..svg';
import Profile from '../images/profile.png'

const SideContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;

    .nav-header{
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 2%;
    }
    .side-nav{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        background-color: white;
    }
    .footer{
        position: fixed;
        left: 0;
        bottom: 0;
        padding: 0.8rem;
        background-color: white;
    }
    .link{
        text-decoration: none;
        color: #C87D55;
        padding: 0.5rem;
    }
    .link:hover{
        background: #AD7C82;
        color: #FFFFFF;
    }
    button{
        border: none;
        background: none;
        padding: 0.5rem;
        color: #C87D55;
    }
    button:hover{
        background: #AD7C82;
        color: #FFFFFF;
    }
    @media (min-width: 768px){
        
    }

    @media (min-width: 1024px){
        width: 20vw;
        align-items: flex-start;
        text-align: left;
        margin-left: 2%;

        .nav-header{
            margin-top: 5%;
        }
        .side-nav{
            display: flex;
            flex-direction: column;
            padding-top: .7rem;
            margin-top: .05rem;
            width: 10rem;
        }

        button{
            text-align: left;
        }
        .footer{
            
        }
    }
`
const RightProPic = styled.div `
    img{
        display: none; 
    }

   @media (min-width: 1024px){
       
       img{
        display: flex;
        position: fixed;
        right: 0;
        border-radius: 50px 50px;
        border: solid 2px #AD7C82;
        margin: 0.5rem;
       }
   }

`
const Navigation = () => {
    const { push } = useHistory();

    const logout = () => {
        localStorage.setItem('token', null)
        push('/login')
    }

    return (
        <div className="navigation">
        <RightProPic>
        <div className="right-aligned">    
            <img src={Profile} alt="Seller Profile" className="profilePic" width="50px" height="50px"/>
        </div>
        </RightProPic>
        <SideContainer>
            <header className="nav-header">
                <div className="nav-logo">
                    <img src={Sauti} alt='Sauti Logo' className="nav-logo" onClick={() => {push('/')}} />
                </div>
            </header> 
            <div>
                <div className="side-nav">
                    <div className=" side-nav dash-links"> 
                        <Link className="link dash seller-dash" to="/SellerDashboard">Home</Link>
                        <button className="link add ">Orders</button>
                        <Link className="link dash products" to="/SellerDashboard">Products</Link>
                        <button className="link add ">Reports</button>
                    </div>   
                
                    <div className="footer">
                        <button className="link add">Settings</button>
                        <button onClick={logout} className="log-out" >Log Out</button>
                    </div>
                </div>
        </div>
        </SideContainer>
        
        </div>
       
    )
}

export default Navigation;
