import React from "react";
import "./signup.css";
import { Row, Col, Button } from 'react-materialize';
//import { Link } from 'react-router-dom';
import { login, isLoggedIn } from '../utils/authService';


const SignUp = props => {
    
    if(isLoggedIn()) {
       return(
        <div></div>
       )} else if(isLoggedIn() === false) {
        return (
            <div 
            className = 'fadeBack z-depth-1 valign-wrapper'>
            <Row className = 'center-align'>
                <Col
                    s = {12}
                    className = 'valign-wrapper center-align'
                >
                    <Button 
                        className = 'large floating greenButton'
                        waves = 'light'
                        onClick={() => login()}
                    >
                    Join Little Worlds
                    </Button>
                </Col>
            </Row>
        </div>
        )
    };
}

export default SignUp;
