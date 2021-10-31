import React from 'react'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div>
            <img src="https://i.ibb.co/f0rP5gz/404-img.jpg" alt="" />

            <br />
            <Link to="/home"><button>Go back</button></Link>
        </div>
    );
};

export default NotFound;