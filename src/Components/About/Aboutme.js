import { Grid, Typography, Hidden, Fab } from '@material-ui/core';
import React from 'react';
import { useStyle } from '../../GlobalStyle/AboutStyle';
import '../../GlobalStyle/About.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

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
                        PROFESSIONAL SYNOPSIS
                    </Typography>
                </Hidden>
                <Hidden only={["md", "lg", "xl"]}>
                    <Typography variant="h4" className={classes.headingBig}>
                        PROFESSIONAL SYNOPSIS
                    </Typography>
                </Hidden>
                <Typography variant="body1" className={classes.aboutDetails}>
                    Highly skilled and motivated Angular/React developer with 2 years of experience in designing, developing, and implementing robust software solutions.
                    Seeking a challenging position as a <i className="fab fa-angular fa-2x" style={{ color: "#c3002f", background: "white", borderRadius: "50%" }} />Angular/<i className="fab fa-react fa-2x" style={{ color: "#4dcbff" }} />React developer at Trianz to utilize my expertise in problem solving skills to contribute to the development of cutting-edge applications and provide exceptional user experiences.S
                </Typography>
                <Typography variant="body1" className={classes.aboutDetails}>
                    Committed to staying updated with the latest industry trends and technologies to deliver efficient and scalable solutions that exceed client expectations.
                </Typography>
                <Typography variant="h5" className={classes.aboutDetails}>Social Media Handles</Typography>
                <hr />
                <a href="https://www.instagram.com/_thepankajbhandari_/" target='_blank' className="linkIcon">
                    <InstagramIcon color='white' />
                </a>
                <a href="https://www.linkedin.com/in/pankaj-bhandari-251063202/" target='_blank' className="linkIcon">
                    <LinkedInIcon color='white' />
                </a>
                <a href="https://github.com/PankajBhandari9" target='_blank' className="linkIcon">
                    <GitHubIcon color='white' />
                </a>
                <hr />
            </Grid>
        </Grid>
    )
}
export default Aboutme
