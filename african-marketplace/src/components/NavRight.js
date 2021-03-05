import React from 'react'
import Profile from '../images/profile.png'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const RightProPic = styled.div `
    display: none;

   @media (min-width: 1024px){
       display: flex;

    .nav-right {
        position: absolute;
        right: 0;
        margin-right: 1rem;
    }
    .profilePic{
        border-radius: 50px 50px;
        border: solid 2px #AD7C82;
        margin-top: .3rem;
        cursor: pointer;
        margin-left: 2.2rem;
    }
    ul{
        list-style: none;
        background: #fffbf6;
        margin-right: 1rem;
        border-radius: 5px;
        width: 120px;
    }

    .fas{
        display: flex;
        align-items: center;
        margin-left: .5rem;
        margin-top: .70rem;
        position: absolute;
    }
    li{
        margin-left: 1.5rem;
        cursor: pointer;
        font-size: 1.8;
        color: #783200;
        text-align: left;
        padding: .5rem;
        width: 100px;
    }

    .nav-name:hover{
        background: #AD7C82;
        color: #FFFFFF;
    }

    #right-side-nav {
        display: none;
        position: absolute;
        right: 1rem;
        border-radius: 5px;
        box-shadow: 0px 2px 3px rgba(0,0,0,0.25);
    }

    #right-side-nav:before{
        content: "";
        position: absolute;
        top: -20px;
        right: 18px; 
        border: 10px solid;
        border-color: transparent transparent #fff transparent;
    }

   }
`
const NavRight = () => {
    const { push } = useHistory()

    const logout = () => {
        localStorage.setItem('token', null)
        push('/login')
    }

    const toggleNav = () => {
        const rightNav = document.getElementById('right-side-nav')
        if(rightNav.style.display === 'none'){
            rightNav.style.display = 'flex'
        }else {
            rightNav.style.display = 'none'
        }
    }

    return (
        <RightProPic>
            <div className="nav-right">
			    <ul >
				    <li>
                        <img src={Profile} alt="Seller Profile" className="profilePic" width="50px" height="50px" onClick={toggleNav}/>
                        <div id="right-side-nav">
                            <div>
                                <ul>
                                    <i className="fas fa-cog"></i>
                                    <li className="setting-btn nav-name" onClick={() => {push('/Settings')}} >Settings</li>
                                    <br></br>
                                    <i className="fas fa-sign-out-alt"></i>
                                    
                                    <li onClick={logout} className="log-out nav-name">Logout</li>
                                </ul>
                            </div>
                        </div>
				    </li>
			    </ul>
            </div>
        </RightProPic>
    )
}

export default NavRight;
