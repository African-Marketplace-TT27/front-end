import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

// Images
import Sauti from '../images/Sauti..svg';

const SideContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: white;
    
    .nav-header{
        display: flex;
        flex-direction: column;
        width: 100vw;
        margin-top: 2%;
        background-color: white;
    }
    .side-nav-container{
        background-color: white;
    }

    .side-nav{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        background-color: white;
        margin-top: 2%;
    }
    // .footer{
    //     position: fixed;
    //     left: 0;
    //     bottom: 0;
    //     padding: 0.8rem;
    //     background-color: white;
    // }
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
        width: 15vw;
        align-items: flex-start;
        text-align: left;
        margin-left: 5%;
        max-width: 270px;
        height: 100vh;

        .nav-header{
            margin-top: 5%;
        }
        .side-nav{
            display: flex;
            flex-direction: column;
            padding-top: .7rem;
            margin-top: .2rem;
            width: 15vw;
        }
        .link{
            margin-top: 1.5rem;
        }

        button{
            text-align: left;
        }
    }
`
const Navigation = () => {
    const { push } = useHistory();

    return (
        <div className="navigation">
            <SideContainer>
                <header className="nav-header">
                    <div className="nav-logo">
                        <img src={Sauti} alt='Sauti Logo' className="nav-logo" onClick={() => {push('/')}} />
                    </div>
                </header> 
                <div className="side-nav-container">
                    <div className="side-nav">
                        <div className=" side-nav dash-links"> 
                            <Link className="link" to="/SellerDashboard">Home</Link>
                            <Link className="link" to="/Orders">Orders</Link>
                            <Link className="link" to="/SellerDashboard">Products</Link>
                            <Link className="link" to="/Reports">Reports</Link>  
                        </div> 
                    </div>
                </div>
            </SideContainer>
        </div>
    )
}

export default Navigation;
