import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../GlobalStyle/ProjectsStyle';
import Tilt from 'react-parallax-tilt';
import watch from '../../images/watch.jpg'


export default function Card1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Tilt
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={watch}
            title="Product Landing Page"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Product Landing Page
            </Typography>
            <Typography variant="body1" component="p">
              Showing the product that contains the watches, With the help of HTML and CSS only.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Tilt>
      <CardActions>
        <a href="https://github.com/PankajBhandari9/productshowcasepage" target='_blank' className={classes.link}>
          <Button size="small" className={classes.btnSource} variant='outlined'>
            Source code
          </Button>
        </a>
        <a href="https://pankajbhandari9.github.io/productshowcasepage/" target='_blank' className={classes.link}>
          <Button size="small" className={classes.btnVisit}>
            Visit site
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}