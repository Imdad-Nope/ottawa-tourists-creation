import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Bounce } from 'react-reveal';
import AccordianQuestion from './AccordianQuestion/AccordianQuestion';

const AskedQuestions = () => {
    return (
        <div>
            <Container>
                <Bounce>
                    <Typography variant="h4" gutterBottom component="div" color='red'>
                        Frequently Asked Questions
                    </Typography>
                </Bounce>
                <Grid container direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={12}
                >

                    <Grid item xs={12} sm={6}>
                        <img src="https://i.ibb.co/Tt3SPXz/Questions-bro.png" alt="" width='100%' />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <AccordianQuestion />
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default AskedQuestions;