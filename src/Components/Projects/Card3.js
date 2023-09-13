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
import trendingSS from '../../images/reactSS.png';


export default function Card3() {
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
            image={trendingSS}
            title="trendingSS"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Trending Series
            </Typography>
            <Typography variant="body1" component="p">
              Different Web series that are trending on Differnet platforms. With HTML, CSS and ReactJs.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Tilt>
      <CardActions>
        <a href="https://github.com/PankajBhandari9/reactwebappsorcecode" target='_blank' className={classes.link}>
          <Button size="small" className={classes.btnSource} variant='outlined'>
            source code
          </Button>
        </a>
        <a href="https://pankajbhandari9.github.io/reactwebapp/" target='_blank' className={classes.link}>
          <Button size="small" className={classes.btnVisit}>
            visit site
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}