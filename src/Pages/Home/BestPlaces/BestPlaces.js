import React, { useEffect, useState } from 'react';
import BestPlace from './BestPlace';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const BestPlaces = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('https://damp-bastion-12491.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="div" sx={{ color: 'green' }}>
                Best Places are here
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    places.map(place => <BestPlace
                        place={place}
                    ></BestPlace>)
                }
            </Grid>
        </Container>
    );
};

export default BestPlaces;