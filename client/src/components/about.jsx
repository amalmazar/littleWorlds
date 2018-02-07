import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Top from './nav/header.jsx';
import Bottom from './nav/footer.jsx';


export default class About extends Component {
  componentDidMount() {
    browserHistory.push('/about');
  }
  render() {
    return (
        <div>
            <Top imageUri='./img/logo.png'></Top>
            <div><p>This is the about page</p></div>
            <Bottom imageUri='./img/logo2-light.png'></Bottom>
        </div>
    );
  }
}