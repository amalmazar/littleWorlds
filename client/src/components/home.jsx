import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import './../App.css';
import Callback from './Callback';
import Top from './nav/header.jsx';
import Bottom from './nav/footer.jsx';
import SignUp from './signup.jsx';
import Boat from './boat.jsx';
import Parakeet from './parakeet.jsx';
import Tree from './tree.jsx';
import Background from './background.jsx';
import { isLoggedIn } from './../utils/authService';

export default class Home extends Component {

  componentDidMount() {
    browserHistory.push('/home')
  }

  render() {
      console.log("also works");
  
  if(isLoggedIn()) {
    return (
        <BrowserRouter>
            <div>
            <SignUp></SignUp>
                <Top imageUri='./img/logo.png'></Top>
                <div className="worldContainer">
                    <Tree></Tree>
                    <Parakeet sound='./sound/lorikeet.wav'></Parakeet>
                    <Boat sound='./sound/water-swirl.wav'></Boat>
                    <Background sound='./sound/ambiance.wav'></Background>
                </div>
                <Bottom imageUri='./img/logo2-light.png'></Bottom>
                <Switch>
                    <Route path='/callback' component={Callback} />
                </Switch>
            </div>
        </BrowserRouter>
        )} else if(isLoggedIn() === false) {
    return (
        <BrowserRouter>
            <div>
            <SignUp></SignUp>
                <Top imageUri='./img/logo.png'></Top>
                <div className="worldContainer blurOn">
                    <Tree></Tree>
                    <Parakeet></Parakeet>
                    <Boat></Boat>
                    
                    <Background></Background>
                </div>
                <Bottom imageUri='./img/logo2-light.png'></Bottom>
                <Switch>
                    <Route path='/callback' component={Callback} />
                </Switch>
            </div>
        </BrowserRouter>
    )}
  }
}



