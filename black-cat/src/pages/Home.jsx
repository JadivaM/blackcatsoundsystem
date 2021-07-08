import React from 'react';
import video from '../images/video.mp4';

const Home = () => {
    return (
        <div className="section home-container" id="home">
             <video autoPlay loop muted className="video">
            <source src={video} type="video/mp4" />
            </video>
            <div className="home-page-text-slogan-container">
            <p className="home-page-text-slogan">Bringing Sound System Culture to South Florida</p>
            </div>
        </div>
    )
}

export default Home
