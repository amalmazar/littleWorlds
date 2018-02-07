import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Top from './nav/header.jsx';
import Bottom from './nav/footer.jsx';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import './shop.css';

export default class Shop extends Component {
  componentDidMount() {
    browserHistory.push('/shop');
    console.log("did mount")
  }
  render() {
    return (
        <div className='everything'>
            <Top imageUri='./img/logo.png'></Top>
                <Row>
                    <Col className='center-align' l={12}>
                    <h1>Shop</h1>
                        <Col className='shopItems' l={4} m={6} s={12}>
                            <Card className='small'
                                header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
                                actions={[<a href='/shop'>This is a Link</a>]}>
                                I am a very simple card. I am good at containing small bits of information. 
                            </Card>
                        </Col>
                        <Col className='shopItems' l={4} m={6} s={12}>
                            <Card className='small'
                                header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
                                actions={[<a href='/shop'>This is a Link</a>]}>
                                I am a very simple card. I am good at containing small bits of information. 
                            </Card>
                        </Col>
                        <Col className='shopItems' l={4} m={6} s={12}>
                            <Card className='small'
                                header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
                                actions={[<a href='/shop'>This is a Link</a>]}>
                                I am a very simple card. I am good at containing small bits of information.
                            </Card>
                        </Col>
                        <Col className='shopItems' l={4} m={6} s={12}>
                            <Card className='small'
                                header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
                                actions={[<a href='/shop'>This is a Link</a>]}>
                                I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
                            </Card>
                        </Col>
                      </Col>
                    </Row>
            <Bottom imageUri='./img/logo2-light.png'></Bottom>
        </div>
    );
  }
}
