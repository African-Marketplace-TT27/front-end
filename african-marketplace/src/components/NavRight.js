import React from 'react'
import Profile from '../images/profile.png'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const RightProPic = styled.div `
    display: none;

   @media (min-width: 1024px){
       display: flex;

    .nav-right {
        // display: flex;
        position: absolute;
        right: 0;
        margin-right: 1rem;

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
        margin-right: -1.4rem;
        border-radius: 5px;
    }

    .fas{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 2rem;
        margin-top: .75rem;
        position: absolute;
        // top: 60px;
    }
    li{
        margin-left: 5px;
        cursor: pointer;
        font-size: 14px;
        position: relative;
        right: 60px;
        color: #783200;
        text-align: left;
        padding: .5rem;
        width: 143px;
    }

    .nav-name:hover{
        background: #AD7C82;
        color: #FFFFFF;
    }

    #right-side-nav {
        display: none;
        position: absolute;
        border-radius: 5px;
        box-shadow: 0px 2px 3px rgba(0,0,0,0.25);
        padding: 3px 55px;
        padding-right: 0px;
        padding-left: 60px
    }

    #right-side-nav:before{
        content: "";
        position: absolute;
        top: -20px;
        right: 54px; 
        border: 10px solid;
        border-color: transparent transparent #fff transparent;
       
    }
    
    // .right-side-nav {
    //     background: #74ded8;
    //     padding: 10px 18px;
    //     border-top-left-radius: 15px;
    //     border-bottom-left-radius: 15px;
    // }
    
    // .right-side-nav .dd_right{
    //     padding: 15px 20px;
    // }

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
                                    <i class="fas fa-cog"></i>
                                    <li className="setting-btn nav-name" onClick={() => {push('/Settings')}} >Settings</li>
                                    <br></br>
                                    <i class="fas fa-sign-out-alt"></i>
                                    
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
