import React from 'react';
import banner from '../../images/bannerOt.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;