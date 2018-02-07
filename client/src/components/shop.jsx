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
                title: 'World 1',
                description: 'I am a very simple card. I am good at containing small bits of information.',
                image: 'logo.png'
            },
            {
                id: 2,
                title: 'World 2',
                description: 'I am a very simple card. I am good at containing small bits of information.',
                image: 'logo.png'
            },
            {
                id: 3,
                title: 'World 3',
                description: 'I am a very simple card. I am good at containing small bits of information.',
                image: 'logo.png'
            }
        ]
      }
  }
  componentDidMount() {
    browserHistory.push('/shop');
    console.log("did mount")
  }
  render() {
    const {worlds} = this.state;
    const productList = worlds.map((world,index) => (
        <Col className='shopItems' l={4} m={6} s={12} key={index}>
            <CardTitle image={`img/${world.image}`}>{world.title}</CardTitle>
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
