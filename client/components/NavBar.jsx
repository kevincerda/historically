import React from 'react';
import Search from './Search.jsx';

const NavBar = props => {
  return (
    <nav className="navbar nav-results nav-sticky">
      <div className="center-vertical-horizontal" id="logo">
        Historically
      </div>
      <div className="center-vertical-horizontal">
        <Search updateData={props.updateData} />
      </div>
    </nav>
  );
};

export default NavBar;
