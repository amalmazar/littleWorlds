import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    console.log("works");
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}



export default App;

