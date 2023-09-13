import React from 'react'
import { useStyles } from '../../GlobalStyle/ProjectsStyle';
import { Container, Grid, Typography, Hidden } from '@material-ui/core';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

const Projects = () => {
    const classes = useStyles();
    return (
        <Container id="services">
            <Grid xs={12}>
                <Hidden only={["xs", "sm", "md"]}>
                    <Grid xs={12}>
                        <Typography variant="h2" className={classes.contactBack} align="center">
                            PROJECTS
                        </Typography>
                    </Grid>
                </Hidden>
                <Hidden only={["xs", "sm", "lg", "xl"]}>
                    <Grid xs={12}>
                        <Typography variant="h2" className={classes.contactBack} align="center">
                            PROJECTS
                        </Typography>
                    </Grid>
                </Hidden>
                <Hidden only={["md", "lg", "xl"]}>
                    <Grid xs={12}>
                        <Typography variant="h3" className={classes.contactBack} align="center">
                            PROJECTS
                        </Typography>
                    </Grid>
                </Hidden>
            </Grid>
            <div className={classes.allCard}>
                <Card1 />
                <Card2 />
                <Card3 />
            </div>
        </Container>
    )
}

export default Projects
