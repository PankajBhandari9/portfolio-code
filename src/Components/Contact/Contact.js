import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../../GlobalStyle/ContactStyle';
import '../../GlobalStyle/Contact.css'
import { Container, Hidden } from '@material-ui/core';
import Formfull from './Formfull';


const Contact = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container id="contact">
                <Hidden only={["xs", "sm", "md"]}>
                    <Grid xs={12}>
                        <Typography variant="h2" className={classes.contactBack} align="center">
                            CONTACT
                        </Typography>
                    </Grid>
                </Hidden>
                <Hidden only={["xs", "sm", "lg", "xl"]}>
                    <Grid xs={12}>
                        <Typography variant="h2" className={classes.contactBack} align="center">
                            CONTACT
                        </Typography>
                    </Grid>
                </Hidden>
                <Hidden only={["md", "lg", "xl"]}>
                    <Grid xs={12}>
                        <Typography variant="h3" className={classes.contactBack} align="center">
                            CONTACT
                        </Typography>
                    </Grid>
                </Hidden>

{/* forms begnning */}
                <Grid md={6} xs={12} sm={12}>
                <Typography variant="h5"><h4 className="headingContact">Get in Touch</h4></Typography>
                        <Formfull/>
                </Grid>
                {/* form end */}
                <Grid md={6} xs={12}>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19529.59347615653!2d78.25935369145999!3d30.083387631797947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA0JzUzLjIiTiA3OMKwMTYnMjMuOSJF!5e0!3m2!1sen!2sin!4v1626172683383!5m2!1sen!2sin" style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                className={classes.mapFull} 
                />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact
