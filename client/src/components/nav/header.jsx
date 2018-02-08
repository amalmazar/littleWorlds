import React from "react";
import "./header.css";
import {Navbar, NavItem} from 'react-materialize';
import { login, logout, isLoggedIn } from './../../utils/authService';

const Top = props => (

<Navbar id="header" >
    <NavItem href="/home"><img className="valign-wrapper logo left-align" src={props.imageUri} alt="logo"></img></NavItem>
        {
            (isLoggedIn()) ?
            
                ( <li className='valign-wrapper left-align'>
                  <li className="userWelcome left-align">Welcome</li>
                  <a href='#logout' onClick={() => logout()}> Log out </a>
                  </li>
                 )
            :
                ( <li className='valign-wrapper left-align'>
                    <a href='#login' onClick={() => login()}>Log In</a>
                  </li>)
        }
    
	<NavItem href='/about' className='valign-wrapper right-align'>About</NavItem>
	<NavItem href='/shop' className='valign-wrapper right-align'>Shop</NavItem>
</Navbar>

);

export default Top;

