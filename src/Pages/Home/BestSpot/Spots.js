import React from 'react';
import { Link } from 'react-router-dom';
import './Spots.css'

const Spots = ({ spot }) => {
    const { name, id, description, img } = spot;
    return (
        <div className="col col-md-4 spot-section">
            <div>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <p>{description}</p>
                <Link to="/gift"><button className="bg-success text-white">Know more</button></Link>
            </div>

        </div>
    );
};

export default Spots;