import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyle } from '../../GlobalStyle/AboutStyle';
import Aboutme from './Aboutme';
import '../../GlobalStyle/About.css';

const About = () => {
    const classes = useStyle();
    return (
        <Container id="about">
            <Grid container>
                <Aboutme/>
                <Grid item md={6} sm={12} className={classes.stats}>
                   <Typography variant="h5"><h4 className="headingAbout">My Education</h4></Typography> 
                    <Container>
                        <Typography variant="body1" className={classes.aboutDetails}>
                            <li>Passed Higher Secondary From C.B.S.E Board in 2014 with 79.55%.</li>
                        </Typography>
                        <Typography variant="body1" className={classes.aboutDetails}>
                            <li>Passed Senior Secondary From C.B.S.E Board in 2016 with 72.20%.</li>
                        </Typography>
                        <Typography variant="body1" className={classes.aboutDetails}>
                            <li>Passed Bachelor of Computer Application (BCA) with 75.5%</li>
                        </Typography>
                        <Typography variant="body1" className={classes.aboutDetails}>
                            <li> Pursuing Master of Computer Application (MCA) with 8.8 CGPA.</li>
                        </Typography>
                    </Container>
                    <Typography variant="h5"><h4 className="headingAbout">My Achivements</h4></Typography>
                    <Container>
                        <Typography variant="body1" className={classes.aboutDetails}>
                            <li>Played Football at regional level in school.</li>
                        </Typography>
                        <Typography variant="body1" className={classes.aboutDetails}>
                            <li>Group Singing at regional level in school.</li>
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About