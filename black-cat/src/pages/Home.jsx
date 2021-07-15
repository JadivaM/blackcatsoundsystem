import React from 'react';
import { NavHashLink as Link } from "react-router-hash-link";

const Home = () => {
    return (
        <div className="section home-container" id="home">
            <div className="mobile-hero-image-section">
            <div className="home-page-text-slogan-container">
            <h1 className="home-page-text-slogan">Bringing Sound System Culture to South Florida</h1>
            <Link smooth to="/#contact">
            <button id="mobile-contact-button">Contact us
            </button>
            </Link>
            
            </div>
            </div>
            
        </div>
    )
}

export default Home
