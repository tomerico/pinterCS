import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  render() {
    
    return (
      <div className="Card">
        <div className="CardWrapper"> 
           <img src={this.props.imageFromMasonry}/>  
        </div>
      </div>
    );
  }
}

export default Card;