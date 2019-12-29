import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <NavLink to="#" className="brand-logo">Logo</NavLink>
        <ul id="nav-mobile" className="right ">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to ="/about">About</NavLink></li>
          <li><NavLink to ="/contact">Contact</NavLink></li>
        </ul>
        </div>
    </nav>
  );
};

export default withRouter(Navbar);