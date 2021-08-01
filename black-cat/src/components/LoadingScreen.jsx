import React from 'react';
import LoadingGif from '../images/logo2.png';

const LoadingScreen = () => {
    return (
        <div className="loading-gif-container">
            <img className="loading-gif" src={LoadingGif} alt="loading screen" />
        </div>
    )
}

export default LoadingScreen;
