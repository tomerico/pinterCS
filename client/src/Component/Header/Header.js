import React, { Component } from 'react';
// import logo from './logo.svg';
import './Header.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Tab from './Tab/Tab';
import TabIcon from './TabIcon/TabIcon';
import Menu from'./../../Common/Menu/Menu'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openedMenu: null,

      tabIcons : [
        {
          imgSrc: 'speech-balloon.png',
          text: 'speach text',
          id: 'speech'
        }, {
          imgSrc: 'notification.png',
          text: 'notification text',
          id: 'notification'
        }, {
          imgSrc: 'ellipsis.png',
          text: 'ellipsis text',
          id: 'ellipsis'
        }
      ]
    };
  }

  onIconClick = (id) => {
    debugger
    //if the id is the same as the opened one, it means please close the menu

    //if the id is different, it means please open this menu. what about open them one by one
    if(id === this.state.openedMenu)
    {
      this.setState({
        openedMenu: null
      })
    }

    if(id !== this.state.openedMenu)
    {
      this.setState({
        openedMenu: id
      })
    }
  }

  render() {

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
              {/* this.state.tabIcons.map((icon) - run on every cell in the array */}
                {this.state.tabIcons.map((icon) => <TabIcon iconId={icon.id} imgSrc={icon.imgSrc} onIconClick={this.onIconClick} />)}   
                
                {/* we set a condition that if one of the checks fails, the all conditio fails  
                  the first condition - checks if the state is different from null
                  the scond condition - we check if there is an icon, that its id is equal to openedMenu, 
                  if yes it means that the menu of this tab is open. at first openedMenu is equal to null
                  so there is no an open menu. the state of open menu is changed by onIconClick */}
                {
                  this.state.openedMenu !== null &&
                  <Menu data={this.state.tabIcons.find((icon) => icon.id === this.state.openedMenu)} />
                }
                  
              </div>

              {/* menuspecificinfo={"HELLO WORLD"} */}
        </div>
      // </div>
    );
  }
}

export default Header;


//index.js = Header.js
//tabItemList - need to add it
//tabItem = Home / Following / Explore


