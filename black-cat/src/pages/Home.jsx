import React from 'react';
import video from '../images/crop.mov';

const Home = () => {
    return (
        <div className="section home-container" id="home">
           
            <video className="video" autoPlay muted>
                <source src={video} type="video/mp4"/>
            </video>
            <div className="home-page-text-slogan-container">
            <p className="home-page-text-slogan">Bringing Sound System Culture to South Florida</p>
            </div>
        </div>
    )
}

export default Home
