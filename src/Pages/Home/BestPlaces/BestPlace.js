import React from 'react';
import './BesPlace.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
const BestPlace = ({ place }) => {
    // const element = <FontAwesomeIcon icon={faStar} />

    const { signInUsingGoogle, setUser } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const uri = location.state?.from || "gift"


    const handleGoogleSign = () => {
        signInUsingGoogle().then(result => {
            setUser(result.user)
            history.push(uri)
        })
            .catch((error) => {
                console.log(error)
            })
    }

    const { _id, name, img, price } = place;
    return (
        <div className="col col-md-4 section">
            <div>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <span>A charming place</span>
                <br />

                <small>$ {price} with couple</small>
                <button className="mx-5 btns" onClick={handleGoogleSign}>Send Enquery</button>
            </div>
        </div>
    );
};

export default BestPlace;