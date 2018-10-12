import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import 'antd/dist/antd.css';  
import Header from './Component/Header/Header';
import CardZone from './Component/CardsZone/CardZone';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <CardZone/>     
      </div>
    );
  }
}

export default App;