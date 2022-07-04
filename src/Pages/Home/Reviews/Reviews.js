import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import './Reviews.css';
import { Zoom } from 'react-reveal';


const Reviews = () => {
    return (
        <div className='main'>
            <Grid>
                <Zoom left cascade>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <Card className='card'>
                                <CardContent>
                                    <GroupsOutlinedIcon className='icon' />
                                    <Typography variant="h6" gutterBottom component="div" fontWeight='bold'>
                                        140 +
                                    </Typography>
                                    <Typography variant="h5" gutterBottom component="div">
                                        Tourist Instructors
                                    </Typography>
                                </CardContent>

                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className='card'>
                                <CardContent>
                                    <FamilyRestroomOutlinedIcon className='icon' />
                                    <Typography variant="h6" gutterBottom component="div" fontWeight='bold'>
                                        87000 +
                                    </Typography>
                                    <Typography variant="h5" gutterBottom component="div">
                                        Satisfied Tourists
                                    </Typography>
                                </CardContent>

                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={4}>

                            <Card className='card'>
                                <CardContent>
                                    <PlaceOutlinedIcon className='icon' />
                                    <Typography variant="h6" gutterBottom component="div" fontWeight='bold'>
                                        5000 +
                                    </Typography>
                                    <Typography variant="h5" gutterBottom component="div">
                                        Tourism Places
                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>
                    </Grid>
                </Zoom>

            </Grid>



        </div >
    );
};

export default Reviews;