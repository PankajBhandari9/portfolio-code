import { Grid, Typography, Hidden, Fab } from '@material-ui/core';
import React from 'react';
import { useStyle } from '../../GlobalStyle/AboutStyle';
import '../../GlobalStyle/About.css';

const Aboutme = () => {

    return (
        <>
            <Content />
        </>
    )
}

function Content() {
    const classes = useStyle();
    return (
        <Grid item md={6}>
            <Grid>
                <Typography variant="h5"><h4 className="headingAbout">About Me</h4></Typography>
                <Hidden only={["xs", "sm"]}>
                    <Typography variant="h3" className={classes.headingBig}>
                        I'm a Front End Web Developer
                    </Typography>
                </Hidden>
                <Hidden only={["md", "lg", "xl"]}>
                    <Typography variant="h4" className={classes.headingBig}>
                        I'm a Front End Web Developer
                    </Typography>
                </Hidden>
                <Typography variant="body1" className={classes.aboutDetails}>
                    I love to make web layout that are eye pleasing and are responsive in nature. My goal is to make such layouts that everybody loves from Amatures to Professionals.
                </Typography>
                <Typography variant="body1" className={classes.aboutDetails}>
                    I take pride what I do, So as a result I have to make sure that everythings is fine from my side in web designing and developement.
                </Typography>
                <Typography variant="h5" className={classes.aboutDetails}>Social Media Handles</Typography>
                <hr />
                <a href="https://www.instagram.com/_thepankajbhandari_/" target='_blank' className="linkIcon">
                    <i className="fab fa-instagram icons" />
                </a>
                <a href="https://www.linkedin.com/in/pankaj-bhandari-251063202/" target='_blank' className="linkIcon">
                    <i className="fab fa-linkedin icons" />
                </a>
                <a href="https://github.com/PankajBhandari9" target='_blank' className="linkIcon">
                    <i className="fab fa-github icons" />
                </a>
                <hr />
            </Grid>
        </Grid>
    )
}
export default Aboutme
