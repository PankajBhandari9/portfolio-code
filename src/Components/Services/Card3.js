import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../GlobalStyle/ServicesStyle';
import { Hidden } from '@material-ui/core';
import "./Card.css";

const Card3 = () => {
  const classes=useStyles();
  return (
    <Container className={classes.card3}>
      <Hidden only={["xs", "sm"]}>
        <Grid>
          <i className="fab fa-bootstrap fa-5x" />
          <Typography variant="h4" className={classes.title}>BootStrap</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["xs","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-bootstrap fa-4x" />
          <Typography variant="h4" className={classes.titleS}>BootStrap</Typography>
        </Grid>
      </Hidden>
      <Hidden only={["sm","md", "lg", "xl"]}>
        <Grid>
          <i className="fab fa-bootstrap fa-3x" />
          <Typography variant="h4" className={classes.titlexS}>BootStrap</Typography>
        </Grid>
      </Hidden>
    </Container>
  )
}

export default Card3
