import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';


const BestPlace = ({ place }) => {
    const { _id, name, img, price } = place;
    return (
        <div className="col col-md-4">
            <div className="spot-section">
                <img src={img} alt="" />
                <h5>{name}</h5>
                <small>$ {price}</small>
                <span>with couple</span>
                {/* <span><small>{_id}</small></span> */}
                <Link to={`/booking/${_id}`}> <button className="mx-5 btns bg-success text-white">Send Enquery</button></Link>
            </div>
        </div>
    );
};

export default BestPlace;