import React, { Component } from 'react';
import './background.css';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }
    componentDidMount() {
        var audioElement = document.createElement('audio');
		audioElement.volume = 0.3;
		audioElement.setAttribute('src', this.props.sound);
		audioElement.play();
    }
    onMouseMove(event) {
        
        // sets the mouseX and mouseY variables to the mouse location
        this.setState({ x: event.screenX, y: event.screenY });
        const { x, y } = this.state;
        const mouseX = x;
        const mouseY = y;
        
        // sets the mountain elements to variables
        const mountainTwo = this.refs.mountainTwo;
        const mountainOne = this.refs.mountainOne;
        const sand = this.refs.sand;
        
        // sets the width and height of the bgelements to variables
        const totalX = this.refs.bgElements.offsetWidth;
//        const totalY = this.refs.bgElements.offsetHeight;
        
        // sets the center of the bgelements to variables
        const centerX = totalX / 2;
//        const centerY = totalY / 2;
        
        // sets some movement
        const shiftX = centerX - mouseX;
//        const shiftY = centerY - mouseY;
        
        // not sure what this is doing yet...I think it's setting the starting point of the elements to 0, which I don't actually want. 
        const startX = (totalX / 2) - (mountainTwo.offsetWidth / 2);
//        const startY = (totalY / 2) - (mountainTwo.offsetHeight / 2);
        
        mountainTwo.style.backgroundPositionX = startX - 290 + (shiftX/10) + 'px';
        mountainOne.style.backgroundPositionX = startX - 90 + (shiftX/30) + 'px';
        console.log(mountainTwo.style.borderColor);
    }
    
    
//    moveMountains(horiz, vert) {
//        const mountainTwo = this.refs.mountainTwo;
//        const mountainOne = this.refs.mountainOne;
//        
//   
//        
//        // function that moves the mountains based on the parameters passed when called. need to sort out the current location of mountains? maybe i can adjust the position based on css - if i pass the coordinates as parameters to change the posiiton of the item in css.
//        
//    }
   
       render() {
           const { x, y } = this.state;
           
//           this.moveMountains(x, y)
          
           return (
       <div>       
           <div onMouseMove={this.onMouseMove.bind(this)} className='backgroundElements' ref='bgElements'>
                <div className="sea"></div>
                <div className="sand" ref="sand"></div>
                <div className="mtn01" ref="mountainOne"></div>
                <div className="mtn02" ref="mountainTwo"></div> 
                 
            </div>
       </div>
       )
   }
}


export default Background;

