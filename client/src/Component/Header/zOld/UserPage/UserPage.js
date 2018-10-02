import React, {Component} from 'react'
import './UserPage.css';

let userName = "tomer";

class UserPage extends Component{

render(){
    return(
        <div className="tab">
            <div className="user">{userName}</div>
        </div>
    );
    }
}

export default UserPage;