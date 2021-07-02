import React from 'react';
import logo from '../images/logo.png';
import { Navbar} from "react-bootstrap";
import { NavHashLink as Link } from "react-router-hash-link";

const Nav = () => {

    return (
        <div className="navbar-container">
          <Navbar
        collapseOnSelect
        expand="sm"
        className="navbar"
        bg="navbar"
        variant="dark"
      >
        <Navbar.Brand id="brand">
        <img src={logo} alt="business logo" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="navbar-links-container">
            <Link smooth to="/#home"
            >
            <p className="navbar-link">Home</p>
            </Link>
            <Link smooth to="/#about">
            <p className="navbar-link">About</p>
            </Link>
            <Link smooth to="/#contact">
            <p className="navbar-link">Contact</p>
            </Link>
            <Link smooth to="/#events">
            <p className="navbar-link">Events</p>
            </Link>
          </div>
          </Navbar.Collapse>
          </Navbar>
        </div>
    )
}

export default Nav;
