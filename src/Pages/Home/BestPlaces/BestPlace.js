import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';


const BestPlace = ({ place }) => {
    const { _id, name, img, price } = place;
    return (

        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <Container>
                    <CardMedia
                        component="img"
                        height="340"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2">
                            ${price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={`/booking/${_id}`}> <Button className="mx-5 btns bg-success text-white">Send Enquery</Button>
                        </Link >
                    </CardActions>
                </Container>
            </Card>
        </Grid>

    );
};


export default BestPlace;