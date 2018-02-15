import React from "react";
import "./boat.css";
import './background.css';

class Boat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wiggle: false
        }
        this.wiggleDone = this.wiggleDone.bind(this);
        this.playSoundAndWiggle = this.playSoundAndWiggle.bind(this);
    }
    componentDidMount () {
        const element = this.refs.boat
        element.addEventListener('animationend', this.wiggleDone)
    } 
    wiggleDone() {
        this.setState({wiggle: false})
    }
    playSoundAndWiggle(e) {
		var audioElement = document.createElement('audio');
		audioElement.volume = 0.3;
		audioElement.setAttribute('src', this.props.sound);
		audioElement.play();
        this.setState({wiggle: true})
    };

    render(){
        return(
        <img
            ref='boat'
            className={ this.state.wiggle ? 'wiggle':'boaty' }
            alt="this is a boat, ok?"
            onClick={ this.playSoundAndWiggle }
            src='./img/thailand/boaty-mc-boatface.svg'/>

        );
    }
}
export default Boat;



//import React from "react";
//import "./boat.css";
//
//class Boat extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            wiggle: false
//        }
//        this.wiggleDone = this.wiggleDone.bind(this);
//        this.playSoundAndWiggle = this.playSoundAndWiggle.bind(this);
//    }
//    componentDidMount () {
//        const element = this.refs.boat
//        element.addEventListener('animationend', this.wiggleDone)
//    } 
//    wiggleDone() {
//        this.setState({wiggle: false})
//    }
//    playSoundAndWiggle(e) {
//		var audioElement = document.createElement('audio');
//		audioElement.volume = 0.3;
//		audioElement.setAttribute('src', this.props.sound);
//		audioElement.play();
//        this.setState({wiggle: true})
//        };
//
//    render(){
//        return(
//        <div>
//        <img
//            ref='boat'
//            className={ this.state.active ?'wiggle':'boaty' }
//            alt="this is a boat, ok?"
//            onClick={ this.playSoundAndWiggle }
//            src='./img/thailand/boaty-mc-boatface.svg'/>
//        </div>
//        );
//    }
//}
//export default Boat;
//
//
