import React from 'react'
import { useStyles } from '../../GlobalStyle/ContactStyle';
import { TextField, Grid, Typography, Container, Button } from '@material-ui/core';


const Formfull = () => {
    const classes = useStyles();
    return (
        <Grid>
            <Container>
            <Typography variant="h6" color="textPrimary">
                Mail Us <i className="fa fa-mail-bulk"/> At pnkjbhndri9@gmail.com
            </Typography>
            <Typography variant="h5" color="secondary">
                Or Fill Form
            </Typography>
                <Typography className={classes.textInput}>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        label="Full Name"
                        fullWidth
                        required
                        noValidate
                    />
                </Typography>
            </Container>
            <Container>
                <Typography className={classes.textInput}>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        label="E-mail"
                        fullWidth
                        required
                        noValidate
                    />
                </Typography>
            </Container>
            <Container>
                <Typography className={classes.textInput}>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        label="Phone"
                        fullWidth
                        noValidate
                    />
                </Typography>
            </Container>
            <Container>
                <Typography className={classes.textInput}>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        label="Message"
                        multiline
                        rows={6}
                        fullWidth
                        required
                        noValidate
                    />
                </Typography>
            </Container>
            <Container>
                <Typography  className={classes.textInput}>
                    <Button className={classes.btnSubmit} color="secondary" variant="outlined">Send</Button>
                </Typography>
            </Container>
        </Grid>
    )
}

export default Formfull
