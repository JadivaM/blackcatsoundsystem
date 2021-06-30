import React from 'react';
import logo from '../images/logo.png';

const Nav = () => {
    return (
        <div className="navbar-container">
          <img src={logo} alt="business logo" className="logo"/>
          <div className="navbar-links-container">
            <p className="navbar-link">About</p>
            <p className="navbar-link">Contact</p>
            <p className="navbar-link">Events</p>
          </div>
        </div>
    )
}

export default Nav;
