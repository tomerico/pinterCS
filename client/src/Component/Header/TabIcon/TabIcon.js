import React, {Component} from 'react'
//import LogoIcon from '../../Media/Icons/pinterestlogo.png';
import './TabIcon.css'

class TabIcon extends Component{



render(){
    const { id, imgSrc, onIconClick } = this.props; //extract all the params from props, no need to use this.props.ParamName
    console.log("id55555555",id)
    return(
        //onIconClick get the function from Header component and is able to change the state in header
        //transfer the iconId of the specific tab
        <div className="tabicon" onClick={() => onIconClick(id)}> 
            <img src={require(`./../../../Media/Icons/${imgSrc}`)} alt="logo icon"/> 
            {/* <img src={this.props.imgSrc} alt="logo icon"/>  */}
        </div>    
    );
    }
}

export default TabIcon;