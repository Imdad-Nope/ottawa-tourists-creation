import React, { useEffect, useState } from 'react';
import Spots from './Spots';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const BestSpot = () => {
    const [spots, setSpots] = useState([])
    useEffect(() => {
        fetch('./spot.json')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])
    return (
        <Container sx={{ flexGrow: 1, mt: 4 }}>
            <Typography variant="h5" component="div" sx={{ color: 'green' }}>
                Preferable Places
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    spots.map(spot => <Spots
                        spot={spot}
                    ></Spots>)
                }
            </Grid>
        </Container>
    );
};

export default BestSpot;