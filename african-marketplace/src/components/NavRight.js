import React, { useState } from 'react'
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

    li{
        margin-left: 5px;
        cursor: pointer;
        font-size: 14px;
        position: relative;
        right: 60px;
        color: #783200;
        text-align: left;
        padding: .8rem;
        padding-right: 1rem;
    }

    #right-side-nav {
        position: absolute;
        display: flex;
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
        right: 21px; 
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
    // const [isActive, setActive] = useState("false");
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
                                    <li className="setting-btn nav-name" onClick={() => {push('/Settings')}} >Settings</li>
                                    <li onClick={logout} className="log-out nav-name">Logout</li>
                                </ul>
                            </div>
                        </div>
				    </li>
			    </ul>
            </div>
            {/* <DropdownButton className="drop-down" title={
                <div className="right-aligned">
                    <img src={Profile} alt="Seller Profile" className="profilePic" width="50px" height="50px" />
                    </div>}
            >
                <Dropdown.Item href="/Settings">Settings</Dropdown.Item>
                <Dropdown.Item href="/login">Log Out</Dropdown.Item>
                <button className="setting-btn">Settings</button>
                <button onClick={logout} className="log-out" >Log Out</button>
            </DropdownButton> */}
        </RightProPic>
    )
}

export default NavRight;
