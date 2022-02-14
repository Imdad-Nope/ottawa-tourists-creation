import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import BestView from './BestView';

const BestViews = () => {
    const [views, setViews] = useState([])
    useEffect(() => {
        fetch('./view.json')
            .then(res => res.json())
            .then(data => setViews(data))
    }, [])
    return (
        <Container sx={{ flexGrow: 1, mt: 4 }}>
            <Typography variant="h5" component="div" sx={{ color: 'green' }}>
                Tourists Most Wanted Places
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    views.map(view => <BestView
                        view={view}
                    ></BestView>)
                }
            </Grid>
        </Container>
    );
};

export default BestViews;