import React, {Component} from 'react'
import './Notification.css'

class Notif extends Component{

render(){
    return(

        <div className="tab">
            <div className = "iconsImgWrapper">
                { <img src={require('./../../../Media/Icons/notification.png')} alt="speech-balloon"/> }
            </div>
        </div>   

    );
    }
}

export default Notif;