import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import contactImage from '../images/contact-image.jpg';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { black } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import AOS from 'aos';

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
  const [isValid, setIsValid] = useState(true);

  const checkEmail = (e) => {
    const emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
   if (emailValid) {
     setIsValid(true)
} else {
  setIsValid(false)
}
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if(isValid === true)
      emailjs.sendForm('service_iaxno1t', 'template_17zqf7m', e.target, 'user_jMNc9Tqke5LnkXIe5lxiZ').then(res => {
        toast.dark('🔊🔊🔊 Message sent!') 
         e.target.reset();
      }).catch(error => {
          toast.error('We ecountered a problem. Please try again.') 
      });
}

AOS.init();

    return (
        <div data-aos="fade-up" className="section" id="contact">  
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

      {isValid ? <CssTextField
          id="filled-multiline-flexible"
          label="Email address"
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
          required
          name="email"
          onChange={checkEmail}
        /> : <CssTextField
        error
        id="filled-error"
        label="Email address"
        multiline
        fullWidth
        maxRows={4}
        required
        helperText="Invalid email address"
        variant="filled"
        onChange={checkEmail}
      /> }
        </div>
       <div className="contact-text-field message-field">
       <CssTextField
          id="filled-multiline-flexible"
          label="Your message"
          fullWidth
          multiline
          rows={6}
          variant="filled"
          required
          name="message"
        />
       </div>
       <CardActions>
        <button type="submit" className="contact-form-submit-button">Send</button>
      </CardActions>
        </form>
      </CardContent>
    </Card>
    <ToastContainer
        position="bottom-right"
        autoClose={10000}
        newestOnTop={false}
        closeOnClick
        autoClose={10000}
        hideProgressBar={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
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
    </div>
    )
}

export default Contact
