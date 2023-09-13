import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../GlobalStyle/ProjectsStyle';
import Tilt from 'react-parallax-tilt'
import tinDog from '../../images/tinder.png';

export default function Card2() {
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
            image={tinDog}
            title="tinDog"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              tinDog
            </Typography>
            <Typography variant="body1" component="p">
              Tinder for dogs, With the help of HTML, CSS and Bootstrap we have created this landing page.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Tilt>
      <CardActions>
        <a href="https://github.com/PankajBhandari9/tindog" target='_blank' className={classes.link}>
          <Button size="small" variant='outlined' className={classes.btnSource}>
            Source code
          </Button>
        </a>
        <a href="https://pankajbhandari9.github.io/tindog/" target='_blank' className={classes.link}>
          <Button size="small" className={classes.btnVisit}>
            Visit site
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}