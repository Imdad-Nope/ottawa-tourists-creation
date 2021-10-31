import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spots from './Spots';

const BestSpot = () => {
    const [spots, setSpots] = useState([])
    useEffect(() => {
        fetch('./spot.json')
            .then(res => res.json())
            .then(data => setSpots(data))
    }, [])
    return (
        <div className="container mt-5">
            <h3 className="text-info">Preferable Spots</h3>
            <div className="row">
                {
                    spots.map(spot => <Spots
                        id={spot.id}
                        spot={spot}
                    ></Spots>)
                }

            </div>
        </div>
    );
};

export default BestSpot;