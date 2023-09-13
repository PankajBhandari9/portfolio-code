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
    <Container className={classes.card6}>
       <Hidden only={["xs", "sm"]}>
        <Grid>
          <i className="fab fa-angular fa-5x angularIcon" />
          <Typography variant="h4" className={classes.title}>Angular</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["xs","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-angular fa-4x" />
          <Typography variant="h4" className={classes.titleS}>Angular</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["sm","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-angular fa-3x" />
          <Typography variant="h4" className={classes.titlexS}>Angular</Typography>
        </Grid>
      </Hidden>
    </Container>
  )
}

export default Card5
