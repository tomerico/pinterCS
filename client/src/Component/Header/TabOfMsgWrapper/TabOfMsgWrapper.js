import React, {Component} from 'react'
import './TabOfMsgWrapper.css';
import TabIcon from './../TabIcon/TabIcon'

class TabOfMsgWrapper extends Component{

constructor(props) {
    super(props);

    }

render(){
    return(
        // ...this.props get each original key (imgSrc, text, id)
        <TabIcon {...this.props} {...this.onIconClick} />
    );
    }
}

export default TabOfMsgWrapper; 