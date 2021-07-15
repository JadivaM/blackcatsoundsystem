import React from 'react';
import emailjs from 'emailjs-com';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import contactImage from '../images/contact-image.jpg';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { black } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

import {
    withStyles,
  } from '@material-ui/core/styles';


  const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'black',
          },
          '& .MuiFilledInput-underline:after': {
            borderBottomColor: 'black',
          },
      '& .MuiFilledInput-root': {
        '& fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'black',
        },
      },
    },
  })(TextField);


const Contact = () => {


  const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_EMAIL_JS_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('sent');
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         e.target.reset();
      }, function(error) {
         console.log('FAILED...', error);
      });
}



    return (
        <div className="section" id="contact"> 
        <div className="contact-us-information-container">
        <img className="contact-image" src={contactImage} alt="sound system" />
        <h6 className="contact-heading">Contact</h6>
        <p className="contact-text">contact@blackcatsoundsystem.com</p>
        <p className="contact-text">(954)873-1170</p>
        <div className="contact-icon-container">
        <Link to={{ pathname: "https://www.facebook.com/blackcatsoundsystems/"}} target="_blank" style={{color: "#000"}}>
        <FacebookIcon className="contact-icon"/>
        </Link>
        <Link to={{ pathname: "https://www.instagram.com/blackcatsoundsystem"}} target="_blank" style={{color: "#000"}}>
        <InstagramIcon className="contact-icon"/>
        </Link>
        </div>
        </div>           
        <Card className="contact-us-form-container" variant="outlined">
            <h1 className="contact-heading-hit-us-up">Hit Us Up</h1>
            <CardContent>
            <form className="contact-us-form" onSubmit={sendEmail}>
            <div className="contact-text-field">
                <CssTextField
                id="filled-multiline-flexible"
                label="Name"
                multiline
                fullWidth
                maxRows={4}
                variant="filled"
                required
                name="name"
            />
            </div>
        <div className="contact-text-field">
        <CssTextField
          id="filled-multiline-flexible"
          label="Email address"
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
          required
          name="email"
        />
        </div>
       <div className="contact-text-field message-field">
       <CssTextField
          id="filled-multiline-flexible"
          label="Your message"
          fullWidth
          multiline
          rows={5}
          variant="filled"
          required
          name="message"
        />
       </div>
       <CardActions>
        <button type="submit" className="contact-form-submit-button">Send message</button>
      </CardActions>
        </form>
      </CardContent>
 
    </Card>
    </div>
    )
}

export default Contact
