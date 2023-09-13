import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../GlobalStyle/ServicesStyle';
import "./Card.css";
import { Hidden } from '@material-ui/core';

const Card1 = () => {
  const classes = useStyles();
  return (
    <Container className={classes.card1}>
      <Hidden only={["xs", "sm"]}>
        <Grid>
          <i className="fab fa-html5 fa-5x" />
          <Typography variant="h4" className={classes.title}>HTML</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["xs","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-html5 fa-4x" />
          <Typography variant="h4" className={classes.titleS}>HTML</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["sm","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-html5 fa-3x" />
          <Typography variant="h4" className={classes.titlexS}>HTML</Typography>
        </Grid>
      </Hidden>
    </Container>
  )
}

export default Card1
