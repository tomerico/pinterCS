import React, {Component} from 'react'
import './Menu.css'

class Menu extends Component{

render(){
    return(
        <div className="tab">
            <div className = "iconsImgWrapper">
                { <img src={require('./../../../Media/Icons/ellipsis.png')} alt="ellipsis"/> }
            </div>
        </div>    
    );
    }
}

export default Menu;