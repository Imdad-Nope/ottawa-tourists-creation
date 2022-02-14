import { Box } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import NewExperience from './NewExperience/NewExperience';

const places = [
    {
        name: 'Ottawa',
        description: 'A beautiful country with beautiful memories to cherished forever, Canada had lots of scenic beauty and man-made attractions which were truly worth-seeing at lease once in life if you get a chance to travel in such a country like this. Our trip was amazing!!! our guide was extremely helpful took us to all places to see that fit our personalities!!! The agents who help me with the',
        img: 'https://images.thrillophilia.com/image/upload/s--9r_uUfJX--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/371/212/original/1617967031_151a3d5b8e9bc7ac853833483064.jpg.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Ottawa',
        description: 'The Capital City of Canada is one of the most important Tourist places in Canada to visit. It has famous architectures with historical significance. The giant Victorian style architecture is notable to appreciate. The city has a National Canadian museum which has many galleries comprising with Canadian arts and artifacts that would draw the attention of every tourist.',
        img: 'https://images.thrillophilia.com/image/upload/s--LQ-BkLmf--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/371/213/original/1617967291_athabasca-gletscher.jpg.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Ottawa',
        description: 'The Capital City of Canada is one of the most important Tourist places in Canada to visit. It has famous architectures with historical significance. The giant Victorian style architecture is notable to appreciate. The city has a National Canadian museum which has many galleries comprising with Canadian arts and artifacts that would draw the attention of every tourist.',
        img: 'https://images.thrillophilia.com/image/upload/s--LQ-BkLmf--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/371/213/original/1617967291_athabasca-gletscher.jpg.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Ottawa',
        description: 'Peggys Cove is one of the popular Tourist places in Canada for its breathtaking views and picturesque landscape. This place is composed of some local fishing communities making it a significant place. It has one of the popular attractions, Peggys Point, that owns a red and white lighthouse',
        img: 'https://images.thrillophilia.com/image/upload/s--LQ-BkLmf--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/371/213/original/1617967291_athabasca-gletscher.jpg.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Ottawa',
        description: 'Peggys Cove is one of the popular Tourist places in Canada for its breathtaking views and picturesque landscape. This place is composed of some local fishing communities making it a significant place. It has one of the popular attractions, Peggys Point, that owns a red and white lighthouse.',
        img: 'https://images.thrillophilia.com/image/upload/s--dt75Zocp--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/371/216/original/1617968533_HgWEe4.jpg.jpg',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
    {
        name: 'Ontario',
        description: 'Peggys Cove is one of the popular Tourist places in Canada for its breathtaking views and picturesque landscape. This place is composed of some local fishing communities making it a significant place. It has one of the popular attractions, Peggys Point, that owns a red and white lighthouse.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGi7Z_7lb0Ky4fKPPPDf9jc047l5SuUz77rQ&usqp=CAU',
        packages: '7 Days Canada Tour Package 2021 | Flat 20% off Excellent'
    },
]

const NewExperiences = () => {
    return (
        <>
            <Typography sx={{ my: 4 }} variant='h6' color="red" gutterBottom>
                Read our daily blogs
            </Typography>
            <Box sx={{ maxHeight: '100%', flexGrow: 1 }}>
                <Carousel className="height 70%" >
                    <Carousel.Item>
                        <img
                            className=""
                            src="https://i.ibb.co/HYN4bT7/carousal3.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" "
                            src="https://i.ibb.co/f0wh4xc/carousal2.webp"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=""
                            src="https://i.ibb.co/N1DSPKq/carousal1.webp"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Box>
            <Container sx={{ flexGrow: 1, mt: 4 }}>
                <Typography variant="h5" component="div" sx={{ color: 'green', my: 3 }}>
                    Tourists Most Wanted Places
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        places.map(place => <NewExperience
                            place={place}
                        ></NewExperience>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default NewExperiences;