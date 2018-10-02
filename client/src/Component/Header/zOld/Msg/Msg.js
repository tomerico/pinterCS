import React, {Component} from 'react'
import './Msg.css'

class Msg extends Component{

render(){
    return(
        <div className="tab">
            <div className = "iconsImgWrapper">
                { <img src={require('./../../../Media/Icons/speech-balloon.png')} alt="speech-balloon"/> }
            </div>
        </div>    
    );
    }
}

export default Msg;