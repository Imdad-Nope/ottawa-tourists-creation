import React from 'react';
import banner from '../../images/bannerOt.jpg'
import './Banner.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const Banner = () => {
    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardMedia
                component="img"
                height="70%"
                image={banner}
                alt="green iguana"
            />
        </Card>
    );
};

export default Banner;