import React from 'react';
import banner from '../../images/bannerOt.jpg'
import './Banner.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

const Banner = () => {
    return (


        <Grid item xs={12} sm={12} md={12} >
            <Card sx={{ maxWidth: '100%' }}>
                <CardMedia
                    component="img"
                    height="70%"
                    image={banner}
                    alt="green iguana"
                />
            </Card>
        </Grid>

    );
};

export default Banner;