import React from 'react';
import { Link } from 'react-router-dom';

const BestView = ({ view }) => {
    const { name, id, img, description } = view;
    return (
        <div className="col col-md-4 spot-section">
            <div>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <p>{description}</p>
                <Link to="/gift"><button className="bg-success text-white">Visit Here</button></Link>
            </div>
        </div>
    );
};

export default BestView;