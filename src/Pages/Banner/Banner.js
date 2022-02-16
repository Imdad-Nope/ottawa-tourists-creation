import React from 'react';
import banner from '../../images/bannerOt.jpg'
import './Banner.css';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
const Banner = () => {
    return (
        <Grid spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Card>
                <img
                    style={{ width: '100%' }}
                    src={banner} alt="" />
            </Card>
        </Grid>

    );
};

export default Banner;