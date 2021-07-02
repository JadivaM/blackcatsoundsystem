import React from 'react';
import logo from '../images/logo.png';
// import{ Link} from 'react-router-dom';
// import { Navbar} from "react-bootstrap";
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <div className="navbar-container">
          <img src={logo} alt="business logo" className="logo"/>
          <div className="navbar-links-container">
            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            <p>Home</p>
            </Link>
            <Link to="second-page" spy={true} smooth={true} offset={50} duration={500}>
            <p className="navbar-link">About</p>
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
            <p className="navbar-link">Contact</p>
            </Link>
            <Link to="events" spy={true} smooth={true} offset={50} duration={500}>
            <p className="navbar-link">Events</p>
            </Link>

        

          </div>
        </div>
    )
}

export default Nav;
