import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';
import { useStyles } from '../../GlobalStyle/ServicesStyle';
import "./Card.css";

const Card4 = () => {
  const classes=useStyles();
  return (
    <Container className={classes.card4}>
      <Hidden only={["xs", "sm"]}>
        <Grid>
          <i className="fab fa-js fa-5x" />
          <Typography variant="h4" className={classes.title}>JavaScript</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["xs","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-js fa-4x" />
          <Typography variant="h4" className={classes.titleS}>JavaScript</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["sm","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-js fa-3x" />
          <Typography variant="h4" className={classes.titlexS}>JavaScript</Typography>
        </Grid>
      </Hidden>
    </Container>
  )
}

export default Card4
