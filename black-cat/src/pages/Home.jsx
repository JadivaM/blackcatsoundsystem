import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavHashLink as Link } from "react-router-hash-link";

const Home = () => {
    return (
        <div className="section home-container" id="home">
            <div className="mobile-hero-image-section">
            <div className="home-page-text-slogan-container">
            <h1 className="home-page-text-slogan">Bringing Sound System Culture to South Florida</h1>
            <Link smooth to="/#contact">
            <Button id="mobile-contact-button">Contact us
            </Button>
            </Link>
            
            </div>
            </div>
            
        </div>
    )
}

export default Home
