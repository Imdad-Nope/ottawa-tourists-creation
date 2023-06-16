import React, { useEffect, useState } from 'react';
import BestPlace from './BestPlace';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const BestPlaces = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('https://ottawa-tourists-server.vercel.app/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Typography variant="h4" component="div" sx={{ color: '#16a085', mb: 2 }}>
                Best Places
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