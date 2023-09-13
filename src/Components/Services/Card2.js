import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';
import { useStyles } from '../../GlobalStyle/ServicesStyle';
import "./Card.css";

const Card2 = () => {
  const classes=useStyles();
  return (
    <Container className={classes.card2}>
      <Hidden only={["xs", "sm"]}>
        <Grid>
          <i className="fab fa-css3 fa-5x" />
          <Typography variant="h4" className={classes.title}>CSS</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["xs","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-css3 fa-4x" />
          <Typography variant="h4" className={classes.titleS}>CSS</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["sm","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-css3 fa-3x" />
          <Typography variant="h4" className={classes.titlexS}>CSS</Typography>
        </Grid>
      </Hidden>
    </Container>
  )
}

export default Card2
