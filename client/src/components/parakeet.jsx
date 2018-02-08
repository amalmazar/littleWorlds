import React from "react";
import "./parakeet.css";
import './background.css';

class Parakeet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wave: false
        }
        this.waveDone = this.waveDone.bind(this);
        this.playSoundAndWave = this.playSoundAndWave.bind(this);
    }
    componentDidMount () {
        const element = this.refs.tree
        element.addEventListener('animationend', this.waveDone)
    } 
    waveDone() {
        this.setState({wave: false})
    }
    playSoundAndWave(e) {
		var audioElement = document.createElement('audio');
		audioElement.volume = 0.1;
		audioElement.setAttribute('src', this.props.sound);
		audioElement.play();
        this.setState({wave: true})
    };

    render(){
        return(
        <img
            ref='tree'
            className={ this.state.wave ? 'flutter':'parakeet' }
            alt="this is a parakeet, ok?"
            onClick={ this.playSoundAndWave }
            src='./img/thailand/parakeet.svg'/>
        );
    }
}
export default Parakeet;
