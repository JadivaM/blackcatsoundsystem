import React, {useState} from 'react';
import logo from '../images/logo.png';
import { Navbar, Nav} from "react-bootstrap";
import { NavHashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
const [navbar, setNavbar] = useState(false);

const changeBackground = () => {
    if (window.scrollY >= 100){
      setNavbar(true)
    } else {
      setNavbar(false)
    }
}

window.addEventListener("scroll", changeBackground);


    return (
        <div className={navbar ? "navbar-container active" : "navbar-container"}>
          <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar"
        bg="navbar"
        variant="dark"
      >
        <Navbar.Brand href="/#home" id="brand">
        <img src={logo} alt="business logo" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <FontAwesomeIcon icon={faBars}  color="white" size="lg" />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-links-container">
          <Link smooth to="/#home" id='text-link'>
            <p className="navbar-link">Home</p>
            </Link>
            <Link smooth to="/#about" id='text-link'>
            <p className="navbar-link">About</p>
            </Link>
            <Link smooth to="/#contact" id='text-link'>
            <p className="navbar-link">Contact</p>
            </Link>
            <Link smooth to="/#events" id='text-link'>
            <p className="navbar-link">Events</p>
            </Link>
            </Nav> 
          </Navbar.Collapse>
          </Navbar>
        </div>
    )
}

export default Navigation;
