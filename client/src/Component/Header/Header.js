import React, { Component } from 'react';
// import logo from './logo.svg';
import './Header.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Tab from './Tab/Tab';
import TabIcon from './TabIcon/TabIcon';

class Header extends Component {

  render() {
//see how Ben transfer this array of objects??
    const tabListState = [
      {
        text: "home",
        isShownIcon: false
      },
      {
        text: "Ben",
        isShownIcon: true
      }
    ];
    
    return (
      // <div className="HeaderWrapper">
        <div className="Header">

              <div className="logoAndSearchBox">
                  <Logo/>
                  <Search/>
              </div>
              <div className="tabsWrapper">
                  <Tab text="Home"/>
                  <Tab text="Following"/>
                  <Tab text="Explore"/>
                  <Tab text="Tomer"/>
              </div>    
              <div className = "iconsWrapper">   
                  <TabIcon imgSrc={('speech-balloon.png')}/>   
                  <TabIcon imgSrc={('notification.png')}/>  
                  <TabIcon imgSrc={('ellipsis.png')}/>  
                  {/* <TabIcon imgSrc={require('./../../Media/Icons/speech-balloon.png')}/>   
                  <TabIcon imgSrc={require('./../../Media/Icons/notification.png')}/>  
                  <TabIcon imgSrc={require('./../../Media/Icons/ellipsis.png')}/>   */}
              </div>
        </div>
      // </div>
    );
  }
}

export default Header;


//index.js = Header.js
//tabItemList - need to add it
//tabItem = Home / Following / Explore


