import React from 'react';
import './Menu.css';

const Menu = props => ({

    render() {
        //this.props.menuspecificinfo - the content we want to present in the menu
      return <div className="generalMenu">{this.props.menuspecificinfo}</div>;
    },
  });

  export default Menu;