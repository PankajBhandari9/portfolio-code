import { Typography } from '@material-ui/core';
import React from 'react'
import "../GlobalStyle/Footer.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {

    const myDate = new Date().getFullYear();
    
    return (
        <Typography className="footer" align="center">
            &#169; 2020-{myDate} Pankaj Portfolio All Rights Reserved
            <hr />
            <a href="https://www.instagram.com/_thepankajbhandari_/" target='_blank' className="linkIcon">
                <InstagramIcon color='white'/>
            </a>
            <a href="https://www.linkedin.com/in/pankaj-bhandari-251063202/" target='_blank' className="linkIcon">
                <LinkedInIcon color='white'/>
            </a>
            <a href="https://github.com/PankajBhandari9" target='_blank' className="linkIcon">
                <GitHubIcon color='white'/>
            </a>
        </Typography>
    )
}

export default Footer
