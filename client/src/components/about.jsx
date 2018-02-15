import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Top from './nav/header.jsx';
import Bottom from './nav/footer.jsx';
import { Col, Row } from 'react-materialize';
import './../App.css';
import './About.css';
import './../animate.css';



export default class About extends Component {
  componentDidMount() {
    browserHistory.push('/about');
  }
  render() {
    return (
        <div>
            <Top imageUri='./img/logo.png'></Top>
            <Row>
                <Col className='center-align' l={12}>
                    <h1>About</h1>       
                </Col>
            </Row>
            <Row className='aboutContent'>
                <Col l={6} className="animated fadeInUp">
                    <h3>Header</h3>
                    <p>Licks your face small kitty warm kitty little balls of fur. Ears back wide eyed mark territory eat the fat cats food cat fur is the new black , warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats i love cuddles my left donut is missing, as is my right. Lick arm hair attack the child if it smells like fish eat as much as you wish unwrap toilet paper scratch leg; meow for can opener to feed me slap kitten brother with paw need to chase tail.</p>
                </Col>
                <Col l={6}>
                    <p>image here</p>
                </Col>
            </Row>
            <Row className='aboutContent dark'>
                <Col l={6}>
                    <p>image here</p>
                </Col>
                <Col l={6} className="animated fadeInUp">
                    <h3>Header</h3>
                    <p> Instead of drinking water from the cat bowl, make sure to steal water from the toilet loves cheeseburgers lick butt. Loved it, hated it, loved it, hated it lies down or pee in human's bed until he cleans the litter box for under the bed, for claws in your leg, so find something else more interesting. Damn that dog hide when guests come over. </p>
                </Col>
            </Row>
            <Bottom imageUri='./img/logo2-light.png'></Bottom>
        </div>
    );
  }
}