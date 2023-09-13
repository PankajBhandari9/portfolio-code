import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import React from 'react'
import Typical from 'react-typical';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyle } from '../GlobalStyle/HomeStyle';
import '../GlobalStyle/Home.css';

const FirstPage = () => {
    const classes = useStyle();

    return (
        <Container id="home">
            <Grid container className='mainPage'>
                <Grid item md={12} sm={12} xs={12} className='animationBack'>
                    <ul className='boxArea'>
                        <img className="img1" src="https://retro-show-r3tr0.vercel.app/static/a7bb949e6d0d488a85cb39612f19aecb/f1913/1.png" alt="img" />
                        <img className="img2" src="https://retro-show-r3tr0.vercel.app/static/556c1746a1f0e3ede5b29ce5282a8410/6f0bd/2.png" alt="img" />
                        <img className="img3" src="https://retro-show-r3tr0.vercel.app/static/f297f859f749ae544e59a4914ceeefd9/f1913/3.png" alt="img" />
                        <img className="img4" src="https://retro-show-r3tr0.vercel.app/static/ad8cd4b553efa809d197aadf994cff55/f1913/4.png" alt="img" />
                        <img className="img5" src="https://retro-show-r3tr0.vercel.app/static/ee0f2ee1da7023a95bdaec5dcc8fb4fc/f1913/5.png" alt="img" />
                        <img className="img6" src="https://retro-show-r3tr0.vercel.app/static/85e073d211cb9af83ccc592733d9b264/f1913/6.png" alt="img" />
                        <img className="img7" src="https://retro-show-r3tr0.vercel.app/static/cb8939dde0a808f387fea7be78a1c8b2/f1913/7..png" alt="img" />
                        <img className="img8" src="https://retro-show-r3tr0.vercel.app/static/78893cb2b3ed4a16e83c80c7b1539bcc/8752b/8.png" alt="img" />
                        <img className="img9" src="https://retro-show-r3tr0.vercel.app/static/f4ec350feb3583c8a1c09fc6d8d878ba/a079b/9.png" alt="img" />
                        <img className="img10" src="https://retro-show-r3tr0.vercel.app/static/64163140e3dc3c1aad4243465e50acd4/b6970/10.png" alt="img" />
                        <img className="img11" src="https://retro-show-r3tr0.vercel.app/static/ee0f2ee1da7023a95bdaec5dcc8fb4fc/f1913/5.png" alt="img" />
                        <img className="img12" src="https://retro-show-r3tr0.vercel.app/static/85e073d211cb9af83ccc592733d9b264/f1913/6.png" alt="img" />
                        <img className="img13" src="https://retro-show-r3tr0.vercel.app/static/cb8939dde0a808f387fea7be78a1c8b2/f1913/7..png" alt="img" />
                        <h4 className="heading">Hello, I'm</h4>
                        <p className="glitch"><span aria-hidden="true">Pankaj Bhandari</span> Pankaj Bhandari <span aria-hidden="true">Pankaj Bhandari</span></p>
                        <Typography variant="h3">
                            <div className="iKnow">
                                I know 
                            </div>
                            <Typical
                                className="typingText"
                                loop={Infinity}
                                steps={[
                                    'HTML', 2000,
                                    'CSS', 2000,
                                    'JavaScript', 2000,
                                    'Bootstrap', 2000,
                                    'Angular', 2000,
                                    'React', 2000,
                                    'Angular Material', 2000,
                                    'React MUI', 2000,
                                ]}
                            />
                        </Typography>
                        <a href="https://drive.google.com/file/d/1O5MXcOoBDIskoVCSptyT5iITrmUk1gR-/view?usp=sharing" target="_blank" className={classes.link}>
                            <Button variant='contained' className={classes.btn}>Download CV</Button>
                        </a>
                    </ul>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FirstPage
