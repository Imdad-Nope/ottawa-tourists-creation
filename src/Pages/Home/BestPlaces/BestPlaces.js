import React, { useEffect, useState } from 'react';
import BestPlace from './BestPlace';

const BestPlaces = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('https://damp-bastion-12491.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div className="container">
            <h2 className="text-success">Tourists Preferred Places Are Here</h2>
            <div className="row">
                {
                    places.map(place => <BestPlace
                        place={place}
                    ></BestPlace>)

                }
            </div>
        </div >
    );
};

export default BestPlaces;