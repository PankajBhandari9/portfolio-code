import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import React from 'react'
import '../../GlobalStyle/Services.css';
import Aos from 'aos';
import Typography from '@material-ui/core/Typography';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';
import { Hidden } from '@material-ui/core';
import { useStyles } from '../../GlobalStyle/ServicesStyle';

const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const classes = useStyles();
    return (
        <Container id="services" style={{ position: 'relative' }}>
            <Hidden only={["xs", "sm"]} >
                <Grid style={{ marginBottom: '5rem' }}>
                </Grid>
            </Hidden>
            <Hidden only={["xs", "sm"]} >
                <Grid style={{ position: 'relative', top: 0 }}>
                    <Typography variant="h5"><h4 className="headingServices">My Skills</h4></Typography>
                    <Hidden only={["xs", "sm"]}>
                        <Typography variant="h2" className={classes.headingBig}>
                            What I Know
                        </Typography>
                    </Hidden>
                    <Hidden only={["md", "lg", "xl"]}>
                        <Typography variant="h4" className={classes.headingBig}>
                            What I Know
                        </Typography>
                    </Hidden>
                    <Grid className={classes.flexCard}>
                        <div data-aos="fade-right"><Card1 /></div>
                        <div data-aos="fade-up-left"><Card2 /></div>
                        <div data-aos="fade-right"><Card3 /></div>
                        <div data-aos="zoom-in-up"><Card4 /></div>
                        <div data-aos="fade-up-left"><Card5 /></div>
                        <div data-aos="fade-left"><Card6 /></div>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden only={["md", "lg", "xl"]} >
                <Grid>
                    <h4 className="headingServices">My Skills</h4>
                    <Hidden only={["xs", "sm"]}>
                        <Typography variant="h2" className={classes.headingBig}>
                            What I Know
                        </Typography>
                    </Hidden>
                    <Hidden only={["md", "lg", "xl"]}>
                        <Typography variant="h4" className={classes.headingBig}>
                            What I Know
                        </Typography>
                    </Hidden>
                    <Grid className={classes.flexCard}>
                        <div data-aos="fade-right"><Card1 /></div>
                        <div data-aos="fade-up-right"><Card2 /></div>
                        <div data-aos="fade-left"><Card3 /></div>
                        <div data-aos="zoom-in-up"><Card4 /></div>
                        <div data-aos="fade-up-left"><Card5 /></div>
                        <div data-aos="fade-left"><Card6 /></div>
                    </Grid>
                </Grid>
            </Hidden>
        </Container>
    )
}

export default Projects
