import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import './Places.css'
import { Bounce } from 'react-reveal';


const BestPlace = ({ place }) => {
    const { _id, packageName, img, price } = place;
    return (

        <Grid item xs={4} sm={4} md={4}>
            <Container className='mainContainer'>
                <Card className='card'>
                    <Bounce left cascade>

                        <img src={img} alt="" width='100%' height='250px' />
                    </Bounce>
                    <Bounce right cascade>
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {packageName}
                            </Typography>
                            <Typography variant="body2">
                                ${price}
                            </Typography>
                        </CardContent>
                    </Bounce>
                    <Bounce top>
                        <CardActions className='cardAction'>
                            <Link to={`/booking/${_id}`} className='link'> <Button variant="outlined" className="button">Send Enquery</Button>
                            </Link >
                        </CardActions>
                    </Bounce>
                </Card>
            </Container>
        </Grid>

    );
};


export default BestPlace;