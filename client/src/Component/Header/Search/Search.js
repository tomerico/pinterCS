import React, {Component} from 'react'
// import  PinInput from '../../../Common/PinComponents/PinInput/pinInput';
//import 'antd/dist/antd.css';  
import './Search.css';

class Search extends Component{

render(){
    return(
        <div className="search"> 
            <input type="text" placeholder="Search.." />
        </div>    
    );
    }
}

export default Search;
