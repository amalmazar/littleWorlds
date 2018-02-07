import React, { Component } from 'react';
import axios from 'axios'
class Buy extends Component {

  componentDidMount() {
    const world = window.location.href.slice(-1);
    const user = localStorage.getItem('uid');
    axios.post(`api/buy/${world}`, {
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