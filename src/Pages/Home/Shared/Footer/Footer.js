import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import './Footer.css'


const Footer = () => {

    return (
        <div className='footer-section'>
            <Container className='footerContainer'>
                <Grid container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    className='footer-content'
                >
                    <Grid item xs={12} sm={4}>
                        <Grid >

                            <img src="https://i.ibb.co/jv6YTmP/30-301819-tourist-travel-icon-png.jpg" alt="" width='30%' />

                            <Grid align='left'>
                                <Typography variant="subtitle1" gutterBottom component="div" color='gainsboro'>
                                    <LocationOnIcon />   Chouddhagram, Cumilla, Bangladesh
                                </Typography>

                                <Typography variant="subtitle1" gutterBottom component="div" color='gainsboro'>
                                    <EmailIcon />  mdalauddinovi62@gmail.com
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom component="div" color='gainsboro'>
                                    <CallIcon />  Helpline: 01647541987 (Available : 10am to 11pm)
                                </Typography>
                            </Grid>


                        </Grid>

                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Link to='/' className='link'>Home</Link>
                        <br />
                        <Link to='/' className='link'>About Us</Link>
                        <br />
                        <Link to='/' className='link'>Contact Us</Link>
                        <br />
                        <Link to='/' className='link'>Cart</Link>
                        <br />
                        <Link to='/' className='link'>Policy</Link>
                    </Grid>
                    <Grid item xs={12} sm={4} className='img'>
                        <img src="https://i.ibb.co/C812P6f/payment.png" alt="" width='100%' />

                    </Grid>
                </Grid>

                <Typography variant="subtitle1" gutterBottom component="div" color='gainsboro' className='copyright'>
                    Copyright © All Reserved by Tourism Community in 2021
                </Typography>

            </Container>
        </div>
    );
};

export default Footer;