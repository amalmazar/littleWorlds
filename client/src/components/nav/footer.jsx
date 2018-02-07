import React from "react";
import "./footer.css";
import {Footer} from 'react-materialize';

const Bottom = props => (

    <Footer className='footer'>
        <div className="col s12 offset-l6">
          <img src={props.imageUri} alt="logo 2"></img>
            <p>&copy; 2018 Amy Almazar</p>
        </div>
    </Footer>
    
);

export default Bottom;
