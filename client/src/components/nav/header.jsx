import React from "react";
import "./header.css";
import {Navbar, NavItem} from 'react-materialize';
import { login, logout, isLoggedIn } from './../../utils/authService';
import userProfile from './../../utils/authService';



const Top = props => (

    
    
<Navbar id="header" className="slide-out" >
    <NavItem href="/home"><img className="valign-wrapper logo " src={props.imageUri} alt="logo"></img></NavItem>
        {
            (isLoggedIn()) ?
            
                ( <div className='valign-wrapper left-align loginstuff'>
                  <p className="userWelcome left-align">Welcome</p>
                  <a href='#logout' onClick={() => logout()}> Log out </a>
                  </div>
                 )
            :
                ( <div className='valign-wrapper left-align'>
                    <a href='#login' onClick={() => login()}>Log In</a>
                  </div>)
        }
    
	<NavItem href='/about' className='valign-wrapper right-align'>About</NavItem>
	<NavItem href='/shop' className='valign-wrapper right-align'>Shop</NavItem>
</Navbar>

);

export default Top;

