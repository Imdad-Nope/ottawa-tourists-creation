import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ManIcon from '@mui/icons-material/Man';
import BackpackIcon from '@mui/icons-material/Backpack';
import { Bounce } from 'react-reveal';

const YourOrders = ({ order, handleDelete }) => {

    const { name, email, phoneNumber, bookingInfo } = order;
    const { img, packageName, price } = bookingInfo;

    return (
        <div style={{ marginTop: '10%' }}>
            <Container>
                <Grid container direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Bounce cascade left>
                            <img src={img} alt="" width='100%' />
                            <Grid align='justify'>
                                <Typography variant='h6' gutterBottom component="div" color='teal' fontWeight='bold'>Toast of Packages <BackpackIcon fontSize='large' /></Typography>
                                <Typography variant='h6' gutterBottom component="div" color='green'>Package: {packageName}</Typography>
                                <Typography variant="subtitle1" gutterBottom component="div" color='tomato'>
                                    Price: ${price}
                                </Typography>
                            </Grid>
                        </Bounce>
                        <Grid>
                            <hr style={{
                                width: '170vh', color: '#333', padding: '1px'
                            }} />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Bounce right cascade>
                            <Typography variant='h4' gutterBottom component="div" color='teal' fontWeight='bold'>About You <ManIcon fontSize='large' /></Typography>
                            <Typography variant='h5' gutterBottom component="div" color='green'>Name: {name}</Typography>
                            <Typography variant="subtitle1" gutterBottom component="div" color='blue'>Email: {email}</Typography>
                            <Typography variant="subtitle1" gutterBottom component="div" color='gray'>Contact: {phoneNumber}</Typography>

                            <Button variant='outlined' onClick={() => handleDelete(order._id)}>Delete</Button>
                        </Bounce>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default YourOrders;