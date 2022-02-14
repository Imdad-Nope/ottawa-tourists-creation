import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NewExperience = ({ place }) => {
    const { name, description, img } = place;
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
                        <Link to="/home"><Button className="bg-success text-white">Go Back</Button></Link>
                    </CardActions>
                </Container>
            </Card>
        </Grid>
    );
};

export default NewExperience;