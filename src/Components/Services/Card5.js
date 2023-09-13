import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../GlobalStyle/ServicesStyle';
import { Hidden } from '@material-ui/core';
import "./Card.css";

const Card5 = () => {
  const classes=useStyles();
  return (
    <Container className={classes.card5}>
       <Hidden only={["xs", "sm"]}>
        <Grid>
          <i className="fab fa-react fa-5x" />
          <Typography variant="h4" className={classes.title}>React</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["xs","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-react fa-4x" />
          <Typography variant="h4" className={classes.titleS}>React</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["sm","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-react fa-3x" />
          <Typography variant="h4" className={classes.titlexS}>React</Typography>
        </Grid>
      </Hidden>
    </Container>
  )
}

export default Card5
