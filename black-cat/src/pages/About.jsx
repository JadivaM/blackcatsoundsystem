import React from 'react';
import aboutImage from '../images/about-image.png';
import AOS from 'aos';

const SecondPage = () => {

    AOS.init();

    return (
        <div className="section" id="about">
            <h2 className="about-heading-text">Who We Are</h2>
            <div data-aos="fade-up" className="about-information-container">
            <img className="about-photo" src={aboutImage} alt="Founders of Black Cat Sound System"/>
            <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}

export default SecondPage
