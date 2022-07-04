import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Activity from './Activity/Activity';

const activities = [
    {
        name: 'Kannan Varman',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaPvpc6izDrjrFTtjysUJWPwuWms298yiLQ&usqp=CAU',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Kevin',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Currumbin_Beach%2C_Queensland%2C_Australia.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Kelvin',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzeD_ywPDiJeZlYs4bUkDLlrPn9WavhQzzUQ&usqp=CAU',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Henna',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://images.creativemarket.com/0.1.0/ps/4279169/1820/1213/m1/fpnw/wm1/oadmejx6zxis77rvcjnmytwzqyfc6tnjfcijoklsrpi3xcwxfhisbmv3xprnbop2-.jpg?1523517858&s=0315a3921884f88dac0dc53146762b75',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Guys',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/1624826157268-12HKMV7366GWHXUUIXQ7/Different+Types+of+Tourists.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Vibes',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://images.squarespace-cdn.com/content/v1/5beb0a44f2e6b1113f9519d9/1624825711989-AZ0B7ZXSY8RFZ8WC5XYP/Different+Types+of+Tourists.jpg?format=1500w',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Buddies',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://s.hdnux.com/photos/01/17/24/30/20792871/3/rawImage.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Brothers',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://static01.nyt.com/images/2021/10/29/reader-center/29clemence_1/29clemence_1-mobileMasterAt3x.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Dudes',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'http://images.huffingtonpost.com/2016-04-08-1460150057-1527896-hope552925_1920.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Dudes',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://img.etimg.com/thumb/msid-87301012,width-1200,height-900/magazines/travel/from-singapore-to-sydney-indian-tourists-eye-international-travel.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Dudes',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'http://ocdn.eu/images/pulscms/NDY7MDA_/b9d2c069c597647c43f670d73fb95cd0.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Dudes',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFO1DJkCGgP5b8RsfxmYBO9dmnHFSSN717YA&usqp=CAU',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
]

const Activities = () => {
    return (
        <div style={{ marginTop: '5%' }}>
            <Container sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="div" sx={{ my: 4, color: 'green' }}>
                    Tourists' Monthly visited Places
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        activities.map(activity => <Activity
                            activity={activity}
                        ></Activity>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Activities;