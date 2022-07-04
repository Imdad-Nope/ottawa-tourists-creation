import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import './Booking.css';

const Booking = () => {

    const { bookId } = useParams()
    const [books, setBooks] = useState({});

    const [info, setInfo] = useState({})


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const orders = { ...info };
        orders[field] = value;
        setInfo(orders);

    }


    const handleSubmit = e => {
        e.preventDefault()

        const allOrders = {
            ...info,
            bookingInfo: books
        }

        axios.post('https://damp-bastion-12491.herokuapp.com/bidConfirm', allOrders)
            .then(res => {
                alert('Orders added successfully')
                e.target.reset()
            })

        // fetch('https://damp-bastion-12491.herokuapp.com/bidConfirm', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(allOrders)
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         alert('Successfully bid confirmed')
        //         e.target.reset()
        //     })
    }


    useEffect(() => {
        const url = `https://damp-bastion-12491.herokuapp.com/choosedPlace/${bookId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])






    return (
        <div className='bookingMain'>
            <Container>
                <Grid container direction="row"
                    justifyContent="space-around"
                    alignItems="center">
                    <Grid xs={12} sm={6}>
                        <img src={books?.img} alt="" width='100%' />

                    </Grid>
                    <Grid xs={12} sm={6} >
                        <Typography variant="h6" gutterBottom component="div">
                            To confirm your <span className='packageName'>" {books?.packageName} "</span> tour ! Please send your information.
                        </Typography>

                        <form onSubmit={handleSubmit} className='inputField'>
                            <input
                                className='field'
                                type="name"
                                name="name"
                                onBlur={handleOnBlur}
                                placeholder='Your Name'

                            />
                            <input
                                className='field'
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder='Your Email'
                            />
                            <input
                                className='field'
                                type="number"
                                name="phoneNumber"
                                onBlur={handleOnBlur}
                                placeholder='Your Number'
                            />
                            <input className='field'
                                type="submit" value="Submit" />
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Booking;