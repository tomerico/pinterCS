import React from 'react';
import './Menu.css';

const Menu = props => ({

  
  render() {
        //this.props.menuspecificinfo - the content we want to present in the menu
      if(!this.props.openMenuState) return null;

      return <div className="generalMenu">{this.props.presentedText}</div>;
    },
  });

  export default Menu;