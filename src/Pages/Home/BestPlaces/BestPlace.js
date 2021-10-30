import React from 'react';
import './BesPlace.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
const BestPlace = ({ place }) => {
    // const element = <FontAwesomeIcon icon={faStar} />
    const { _id, name, img, price, rating } = place;
    return (
        <div className="col col-md-4 section">
            <div>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <span>A charming place</span>
                <br />

                <small>$ {price} with couple</small>
                < button className="mx-5 btns" > Send Enquery</button>
            </div>
        </div>
    );
};

export default BestPlace;