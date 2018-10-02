import React, {Component} from 'react'
//import LogoIcon from '../../Media/Icons/pinterestlogo.png';
import './Logo.css'

class Logo extends Component{

render(){
    return(
        <div className="logoicon"> 
            { <img src={require('./../../../Media/Icons/pinterestlogo.png')} alt="logo icon"/> }
        </div>    
    );
    }
}

export default Logo;


//import by es6. require is the old way