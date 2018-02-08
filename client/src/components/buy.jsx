import React, { Component } from 'react';
import axios from 'axios';
import { Modal } from 'react-materialize';

// new component for buying worlds in the shop
class Buy extends Component {

  // when the component mounts, create a variable called world that is equal to the number of the world purchased
  componentDidMount() {
    const world = window.location.href.slice(-1);
    const user = localStorage.getItem('uid');
    axios.post(`/api/buy/${world}`, {
      "world" : `${world}`,
      "buyer": `${user}`
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const world = window.location.href.slice(-1);
    const user = localStorage.getItem('uid');
    return(
    
	<h1>{`Thank you, user# ${user} for buying world ${world}`}</h1>

        
    )
  }
}

export default Buy;