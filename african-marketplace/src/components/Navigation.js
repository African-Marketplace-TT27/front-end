import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { DropdownButton, Dropdown} from 'react-bootstrap'

// Images
import Sauti from '../images/Sauti..svg';
// import Profile from '../images/profile.png'

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
        max-width: 270px;

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
// const RightProPic = styled.div `
//     list-style: none;
//     display: none;

//     @media (min-width: 768px){
//         display: flex;
//         display
//         nav-right ul{
//             display: flex;
//             align-items: center;
//         }
//     }

//    @media (min-width: 1024px){
//     .nav-right ul{
//         display: flex;
//         align-items: center;
//     }

//     .profilePic{
//         border-radius: 50px 50px;
//         border: solid 2px #AD7C82;
//         margin-top: 1rem;
//         position: fixed;
//         display: flex;
//     }

//     .nav-right ul li.nr_li{
//         margin-left: 25px;
//         cursor: pointer;
//         color: #fff;
//         font-size: 20px;
//         position: relative;
//     }
    
//     // .nav-right ul li.nr_li:hover {
//     //     color: #cefffc;
//     // }
    
//     // .nav-right ul li img{
//     //     width: 35px;
//     //     vertical-align: middle;
//     // }
    
//     .dd_menu {
//         position: absolute;
//         right: -25px;
//         top: 47px;
//         display: flex;
//         background: #fff;
//         border-radius: 15px;
//         box-shadow: 0px 0px 3px rgba(0,0,0,0.25);
//         display: none;
//     }
    
//     .dd_menu .dd_left{
//         background: #74ded8;
//         padding: 15px 20px;
//         border-top-left-radius: 15px;
//         border-bottom-left-radius: 15px;
//     }
    
//     .dd_menu .dd_left li{
//         color: #fff;
//     }
    
//     .dd_menu .dd_right{
//         padding: 15px 20px;
//     }
    
//     .dd_menu li{
//         margin-bottom: 10px;
//         color: #868686;
//     }
    
//     .dd_menu:before{
//         content: "";
//         position: absolute;
//         top: -20px;
//         right: 30px;
//         border: 10px solid;
//         border-color: transparent transparent #fff transparent;
//     }
    
//     .dd_main.active .dd_menu{
//         display: flex;
//     }

//     .right-aligned{
//         display: none; 
//     }
//     #dropdown-basic-button{
//         display: none;
//     }
//     .dropdown{
//         display: flex;
        
//     }
//        .right-aligned{
//         // display: flex;
//         // position: fixed;
//         // right: 0;
//         // border-radius: 50px 50px;
//         // border: solid 2px #AD7C82;
//         // margin: 0.5rem;
//        }
//    }

// `
const Navigation = () => {
    const { push } = useHistory();

    // const logout = () => {
    //     localStorage.setItem('token', null)
    //     push('/login')
    // }

//   const toggleNav = () => {
//       const navBtn = document.querySelector('dd_main')
//       if(navBtn.style.display === 'none'){
//           navBtn.style.display = 'flex'
//       }else {
//           navBtn.style.display = 'none'
//       }
//     }

    return (
        <div className="navigation">
        {/* <RightProPic>
            <div className="nav-right">
			    <ul>
				    <li className="nr_li dd_main">
                        <img src={Profile} alt="Seller Profile" className="profilePic" width="50px" height="50px" onClick={toggleNav}/>
                        <div className="dd_menu">
                            <div className="dd_left">
                                <ul>
                                    <li><i className="fas fa-cog"></i></li>
                                    <li><i className="fas fa-sign-out-alt"></i></li>
                                </ul>
                            </div>
                            <div className="dd_right">
                                <ul>
                                    <li className="setting-btn" onClick={() => {push('/Settings')}} >Settings</li>
                                    <li onClick={logout} className="log-out">Logout</li>
                                </ul>
                            </div>
                        </div>
				    </li>
			    </ul>
            </div>
            
        </RightProPic> */}
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
                    {/* <div className="footer">
                        <button className="link add">Settings</button>
                        <button onClick={logout} className="log-out" >Log Out</button>
                    </div> */}
                    
                </div>
        </div>
        </SideContainer>
        
        </div>
       
    )
}

export default Navigation;
