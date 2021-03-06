import React from 'react';
import {Link} from "react-router-dom";

export const Header = (props) => {
  return(
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/user" activeClassName={"active"}>User</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};