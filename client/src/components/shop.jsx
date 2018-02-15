import React, { Component } from "react";
import { browserHistory } from 'react-router';
import Top from './nav/header.jsx';
import Bottom from './nav/footer.jsx';
import { Row, Col, Card, CardTitle } from 'react-materialize';
import './shop.css';

export default class Shop extends Component {
  constructor(props){
      super(props);
      this.state ={
        worlds : [
            {
                id: 1,
                title: 'Ski Chalet',
                description: 'Make yourself at home here. Grab a hot cocoa, cuddle up in front of the fire and enjoy the views of snow falling and skiiers enjoying the slopes.'
            },
            {
                id: 2,
                title: 'Rain Forest',
                description: 'Enjoy a bird’s eye view of the lush rainforest, observe quietly through the rainforest canopy where you’ll encounter plants and animals rarely seen.'
            },
            {
                id: 3,
                title: 'Scenic Australian Countryside',
                description: 'I am a very simple card. I am good at containing small bits of information.'
            }
        ]
      }
  }
  componentDidMount() {
    browserHistory.push('/shop');
  }
  render() {
    const {worlds} = this.state;
    const productList = worlds.map((world,index) => (
        <Col className='shopItems' l={4} m={6} s={12} key={index}>
            <CardTitle><div><h4>{world.title}</h4></div></CardTitle>
            <Card
                className='small'
                key={world.id}
                actions={
                    [
                    <a href={`/buy?world=${world.id}`}>Buy this world</a>]
                    }
                >
                {world.description}
            </Card>
        </Col>
    ));
    return (
        <div className='everything'>
            <Top imageUri='./img/logo.png'></Top>
                <Row>
                    <Col className='center-align' l={12}>
                        <h1>Shop</h1>
                        {productList}
                    </Col>
                </Row>
            <Bottom imageUri='./img/logo2-light.png'></Bottom>
        </div>
    );
  }
}
