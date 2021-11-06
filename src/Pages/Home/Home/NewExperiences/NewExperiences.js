import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewExperiences = () => {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
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
                            className="d-block w-100"
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
                            className="d-block w-100"
                            src="https://i.ibb.co/N1DSPKq/carousal1.webp"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
                    <div className="container-md justify-content-center">
                        <h3 className="text-white">Get New Experiences By Reading Our Daily Blog</h3>
                    </div>
                </nav>
            </div>
            <div className="mt-5 container col col-md-12">
                <div className=" spot-section">
                    <h3 className="text-info">A number of places you will find more interesting to roame the whole country of Canada.....</h3>
                    <br />
                    <Link to="/home">  <span className="fs-5">Ottawa</span></Link>
                    <img className="w-100" src="https://images.thrillophilia.com/image/upload/s--9r_uUfJX--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/371/212/original/1617967031_151a3d5b8e9bc7ac853833483064.jpg.jpg" alt="" />
                    <br />
                    <p>The Capital City of Canada is one of the most important Tourist places in Canada to visit. It has famous architectures with historical significance. The giant Victorian style architecture is notable to appreciate. The city has a National Canadian museum which has many galleries comprising with Canadian arts and artifacts that would draw the attention of every tourist.

                        One of the famous landmarks of this place is Rideau Canal which offers you boat riding during summer and ice skating during winter making this a perfect getaway for holidays.

                        Location: East of southern Ontario, near the city of Montréal and the U.S. border
                    </p>
                    <br />
                    <Link to="/home">  <span className="fs-5">Winnipeg</span></Link>

                    <img src="https://images.thrillophilia.com/image/upload/s--LQ-BkLmf--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/371/213/original/1617967291_athabasca-gletscher.jpg.jpg" alt="" />
                    <br />
                    <p>The Capital City of Canada is one of the most important Tourist places in Canada to visit. It has famous architectures with historical significance. The giant Victorian style architecture is notable to appreciate. The city has a National Canadian museum which has many galleries comprising with Canadian arts and artifacts that would draw the attention of every tourist.

                        One of the famous landmarks of this place is Rideau Canal which offers you boat riding during summer and ice skating during winter making this a perfect getaway for holidays.

                        Location: East of southern Ontario, near the city of Montréal and the U.S. border

                        Highlights: Victorian style architecture</p>

                    <br />
                    <Link to="/home">  <span className="fs-5"> Athabasca Glacier</span></Link>

                    <img src="https://images.thrillophilia.com/image/upload/s--LQ-BkLmf--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/371/213/original/1617967291_athabasca-gletscher.jpg.jpg" alt="" />
                    <br />
                    <p>Athabasca is one of the most beautiful landmarks with massive glaciers all covering all around. It is one of the most visited spots containing National Parks and glacial bodies for ice skating. It is an absolutely magnificent landmark for sightseeing of the stunning icy landscapes.

                        Location: Icefield in Canada Rockies

                        Highlights: National Parks and glacial bodies</p>
                    <br />
                    <Link to="/home">  <span className="fs-5">   Peggy’s Cove</span></Link>

                    <img src="https://images.thrillophilia.com/image/upload/s--dt75Zocp--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/371/216/original/1617968533_HgWEe4.jpg.jpg" alt="" />
                    <br />
                    <p>Peggy's Cove is one of the popular Tourist places in Canada for its breathtaking views and picturesque landscape. This place is composed of some local fishing communities making it a significant place. It has one of the popular attractions, Peggy's Point, that owns a red and white lighthouse.

                        Location: Eastern shore of St. Margarets Bay in Nova Scotia's Halifax Regional Municipality

                        Highlights: Home to local fishing communities</p>
                </div>
            </div>
        </>
    );
};

export default NewExperiences;