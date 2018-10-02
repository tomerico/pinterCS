import React, { Component } from 'react';
import './CardZone.css';
import Card from './Card/Card';
import Gallery from './Gallery';
import PicsLinks from './../CardsZone/temp';

//the cardZone need to get all the pics, send it as a props to Masonry, then Masonry will transfer it to Card


class CardZone extends Component {

    constructor(props){ //must write props also in the constructor
      super(props)
      this.state = {
        ArrayPic: [] //PicsLinks
      }
      let counterI = 0;
    }

    componentDidMount(){
      fetch('api/cardsData')
      .then(data => data.json())
      .then(updateState => {
        this.setState({ArrayPic:updateState})
      })
      .catch(e => console.log(e.message))
    }

    render() {
      
      return (
        <div className="CardZone">
            <Gallery elements={this.state.ArrayPic}/>
         
        </div>
  
      );
    }
  }
  
  export default CardZone;
  