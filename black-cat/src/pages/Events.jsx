import React from 'react';
import cat from '../images/cat.png';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import musicIcon from '../images/song.svg';
import soundsystem from '../images/sound.png';
import soundIcon from '../images/sound.svg';

const Events = () => {
    return (
        <div className="section" id="events">
            <img className="black-cat" src={cat} alt="black cat logo"/>
            <h2 className="about-heading-text">What We Offer</h2>
            <div className="services-cards-container">
            <Card className="services-card" variant="outlined">
                <CardContent>
                <img className="card-icon" src={soundsystem} alt="icon"/>
                <p className="card-text">
                    Hand built sound system powered by some of the best drivers on the market 
                </p>
                </CardContent>
            </Card>
            <Card className="services-card" variant="outlined">
                <CardContent>
                <img className="card-icon" src={musicIcon} alt="icon"/>
                <p className="card-text">
                Highest quality amplifiers for high fidelity (hi-fi) sound
                </p>
                </CardContent>
            </Card>
            <Card className="services-card" variant="outlined">
                <CardContent>
                <img className="card-icon" src={soundIcon} alt="icon"/>
                <p className="card-text">
                Maintaining quality sound throughout events & connecting people through music
                </p>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}

export default Events
