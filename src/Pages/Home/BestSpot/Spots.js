import React from 'react';
import { Link } from 'react-router-dom';
import './Spots.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid, Container } from '@mui/material';

const Spots = ({ spot }) => {
    const { name, id, description, img } = spot;
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <Container>
                    <CardMedia
                        component="img"
                        height="194"
                        image={img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant='h6' color="text.secondary" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="body2">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/gift"><Button className="bg-success text-white">Know more</Button></Link>
                    </CardActions>
                </Container>
            </Card>
        </Grid>
    );
};

export default Spots;
