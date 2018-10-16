import React, { Component } from 'react';
// import logo from './logo.svg';
import './Header.css';
import Logo from './Logo/Logo';
import Search from './Search/Search';
import Tab from './Tab/Tab';
import TabIcon from './TabIcon/TabIcon';
import Menu from './../../Common/Menu/Menu';
import TabOfMsgWrapper from './TabOfMsgWrapper/TabOfMsgWrapper';

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
          // content : [{},]
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
    //case1 - if the id is the same as the opened one, it means please close the menu
    if(id === this.state.openedMenu)
    {
      this.setState({
        openedMenu: null
      })
    }

    //this.state.openedMenu == null

    //case2 - if the id is different from the id of the opened tab, it means, 
    //        close the opened one and open the menu of the pressed tab.
    if(id !== this.state.openedMenu)
    {
      this.setState({
        openedMenu: id
      })
    }
  }

  getCurrentIconText(openedMenu) {
    const currentItem = this.state.tabIcons.find((icon) => {//FIND RETURN TRUE OR FALSE, THE FIRST ELEmNT THAT valid
      return icon.id === this.state.openedMenu
    });
   
    return !!currentItem ? currentItem.text : null
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
                  {/* the using of 3 dots like this ...this.state.tabIcons[0] is spread that in practice 
                      seperate the keys, instead we will need to spread and write it by ourselves, it also
                      relevant to passing props {...this.props} */}
                   {/*no necessity to use key  */}
                  <TabOfMsgWrapper {...this.state.tabIcons[0]} onIconClick={this.onIconClick} />  
                  <TabOfMsgWrapper {...this.state.tabIcons[1]} onIconClick={this.onIconClick} />  
                  <TabOfMsgWrapper {...this.state.tabIcons[2]} onIconClick={this.onIconClick} />  
                
                  <Menu openMenuState = {this.state.openedMenu} presentedText = {this.getCurrentIconText(this.state.openMenu)}/>
                  {/* {!!this.state.openedMenu && <Menu openMenuState = {this.state.openedMenu}/>} */}

                  <IconMenu icon={'message-icon'}>
                      <MessagesContent/>
                  </IconMenu>

                  <IconMenu icon={'notification-icon'}>
                      <NotificationsContent/>
                  </IconMenu>

                  <IconMenu icon={'menu-icon'}>
                      <MenuContent/>
                  </IconMenu>
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




//<div className = "iconsWrapper">
//{/* this.state.tabIcons.map((icon) - run on every cell in the array */}
//  {this.state.tabIcons.map((icon) => <TabIcon iconId={icon.id} imgSrc={icon.imgSrc} onIconClick={this.onIconClick} />)}   
  
//  {/* we set a condition that if one of the checks fails, the all condition fails  
//    the first condition - checks if the state is different from null
//    the scond condition - we check if there is an icon, that its id is equal to openedMenu, 
//    if yes it means that the menu of this tab is open. at first openedMenu is equal to null
//    so there is no an open menu. the state of open menu is changed by onIconClick */}
//  {
//    this.state.openedMenu !== null && 
//    <Menu data={this.state.tabIcons.find((icon) => icon.id === this.state.openedMenu).text} />
//  }
    
//</div>

{/* menuspecificinfo={"HELLO WORLD"} */}




                   {/* <TabIcon imgSrc={('speech-balloon.png')}/>   
                   <TabIcon imgSrc={('notification.png')}/>  
                   <TabIcon imgSrc={('ellipsis.png')}/>   */}