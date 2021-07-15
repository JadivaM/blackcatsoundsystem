import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import contactImage from '../images/contact-image.jpg';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { black } from '@material-ui/core/colors';
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
    return (
        <div className="section" id="contact"> 
        <div className="contact-us-information-container">
        <img className="contact-image" src={contactImage} alt="sound system" />
        <h6 className="contact-heading">Contact</h6>
        <p className="contact-text">contact@blackcatsoundsystem.com</p>
        <p className="contact-text">(954)873-1170</p>
        <div className="contact-icon-container">
        <FacebookIcon className="contact-icon"/>
        <InstagramIcon className="contact-icon"/>
        </div>
        </div>           
        <Card className="contact-us-form-container" variant="outlined">
            <h1 className="contact-heading-hit-us-up">Hit Us Up</h1>
            <CardContent>
            <form className="contact-us-form">
            <div className="contact-text-field">
                <CssTextField
                id="filled-multiline-flexible"
                label="Name"
                multiline
                fullWidth
                maxRows={4}
                variant="filled"
                required
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
        />
        </div>
       <div className="contact-text-field message-field">
       <CssTextField
          id="filled-multiline-flexible"
          label="Your message"
          fullWidth
          multiline
          rows={4}
          variant="filled"
          required
        />
       </div>
        </form>
      </CardContent>
      <CardActions>
        <Button size="small">Send message</Button>
      </CardActions>
    </Card>
    </div>
    )
}

export default Contact
