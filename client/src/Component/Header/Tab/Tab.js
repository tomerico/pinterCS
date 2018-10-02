import React, {Component} from 'react'
import './Tab.css';

class Tab extends Component{

render(){
    return(
            <div className="tabIn">
                <div className="tab">{this.props.text}</div>
            </div>  
    );
    }
}

export default Tab;