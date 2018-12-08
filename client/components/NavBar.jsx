import React from 'react';
import Search from './Search.jsx';

const NavBar = props => {
  return (
    <nav className="navbar nav-results nav-sticky" id="nav">
      <div className="center-vertical-horizontal" id="logo">
        Historically
      </div>
      <div className="center-vertical-horizontal">
        <Search
          updateData={props.updateData}
          page={props.page}
          resultsCount={props.resultsCount}
          pageLinks={props.pageLinks}
          pageCount={props.pageCount}
        />
      </div>
    </nav>
  );
};

export default NavBar;
