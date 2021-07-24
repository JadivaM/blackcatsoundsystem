import React, {useState} from 'react';
import Logo from '../images/logo.svg';
import { ReactComponent as MenuIcon } from '../images/Hamburger_icon.svg';
import { ReactComponent as CloseMenu } from '../images/white-cross.svg';
import { NavHashLink as Link } from "react-router-hash-link";

const Navigation = () => {

const [navbar, setNavbar] = useState(false);
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const changeBackground = () => {
    if (window.scrollY >= 150){
      setNavbar(true)
    } else {
      setNavbar(false)
    }
}

window.addEventListener("scroll", changeBackground);

    return (
        <div className={navbar ? "navbar-container active" : "navbar-container"}>
        <div className="logo-container">
        <Link smooth to="/#home" id='text-link'>
          <img  className="logo" src={Logo} alt="logo"/>
        </Link>
        </div>
        <nav
        className="nav">
        
        <div className="navbar-links-container">
          <ul className={click ? "nav-options active" : "nav-options"}>
          <Link smooth to="/#home" id='text-link'>
            <li className="navbar-link" onClick={closeMobileMenu}>Home</li>
            </Link>
           
            <Link smooth to="/#about" id='text-link'>
            <li className="navbar-link" onClick={closeMobileMenu}>About</li>
            
            </Link>
          
            <Link smooth to="/#events" id='text-link'>
            <li className="navbar-link" onClick={closeMobileMenu}>Services</li>
            </Link>
          
           
            <Link smooth to="/#contact" id='text-link'>
            <li className="navbar-link" onClick={closeMobileMenu}>Contact</li>
          
            </Link>
           
          </ul>
          
            </div> 
          </nav>
          <div className="mobile-menu" onClick={handleClick}>
          {click ? (
              <CloseMenu className="menu-icon" />
               ) : (
              <MenuIcon className="menu-icon" />
          )}
        </div>
        </div>
    )
}

export default Navigation;
