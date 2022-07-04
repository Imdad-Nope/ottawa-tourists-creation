import React from 'react';
import './Banner.css';
import Grid from '@mui/material/Grid';
import coverImg from '../../images/cover.jpg';
import { Button, Container, Typography } from '@mui/material';
import { Bounce } from 'react-reveal';

const Banner = () => {
    return (
        <div>
            <Grid
                style={{
                    background: `url(${coverImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    width: '100%'
                }}>
                <Container>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: '105vh' }}>
                        <Grid style={{ textAlign: 'center' }}>
                            <Typography variant="h4" gutterBottom component="div" color='honeydew'>
                                <Bounce left cascade>
                                    Travel Words that Describe Wanderlust Perfectly
                                </Bounce>
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div" color='whitesmoke' >
                                <Bounce right cascade>
                                    "Travel is the one thing that help you to find inner peace"
                                </Bounce>
                            </Typography>
                            <Grid sx={{ mt: 2 }}>

                                <Bounce bottom>
                                    <Button variant="contained" sx={{ color: 'whitesmoke', borderRadius: 3 }} size="large" >About Us</Button>
                                </Bounce>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

        </div>

    );
};

export default Banner;