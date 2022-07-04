import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import './Activity.css';

const Activity = ({ activity }) => {
    const { name, description, packages, img } = activity;
    return (

        <Grid item xs={4} sm={4} md={4} className='activityMain'>
            <Card sx={{ minWidth: 275 }}>
                <Container>
                    <CardMedia
                        component="img"
                        // height="20%"
                        width="100%"
                        image={img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant='h6' color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="body1">
                            {description}
                        </Typography>
                        <Typography variant="body2">
                            <span style={{ color: 'red' }}>Packages: </span>  {packages}
                        </Typography>
                    </CardContent>
                    <CardActions className='btnAction'>
                        <Link to="/gift" className='link'>
                            <Button variant='outlined'>Know more</Button>
                        </Link>
                    </CardActions>
                </Container>
            </Card>
        </Grid>

    );
};

export default Activity;