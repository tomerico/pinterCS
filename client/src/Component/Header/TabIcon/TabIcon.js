import React, {Component} from 'react'
//import LogoIcon from '../../Media/Icons/pinterestlogo.png';
import './TabIcon.css'

class TabIcon extends Component{

render(){
    return(
        <div className="tabicon"> 
            <img src={require(`./../../../Media/Icons/${this.props.imgSrc}`)} alt="logo icon"/> 
            {/* <img src={this.props.imgSrc} alt="logo icon"/>  */}
        </div>    
    );
    }
}

export default TabIcon;