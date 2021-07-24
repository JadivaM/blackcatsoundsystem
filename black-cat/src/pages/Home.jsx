import React from 'react';
import { NavHashLink as Link } from "react-router-hash-link";

const Home = () => {
    return (
        <div className="section home-container" id="home">
            <div className="home-page-text-slogan-container">
            <h1 className="home-page-text-slogan">Bringing Sound System <br /> Culture to South Florida</h1>
            <Link smooth to="/#contact" style={{textDecoration: 'none'}}>
            <button id="mobile-contact-button">Contact us
            </button>
            </Link>
            </div>        
        </div>
    )
}

export default Home
