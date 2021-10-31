import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    const element = <FontAwesomeIcon icon={faGlobe} />
    return (
        <div className="footer-section mt-5">
            <br />

            <div class="separator">
                <div class="line"></div>
                <a className="text-white" href="Thrillophilia.com">ThrilloPhila.com</a>
                <div class="line"></div>
            </div>
            <br />
            <h4 className="text-white">Social links</h4>
            <span className="text-white">{element}</span>

            <p><small className="text-white">The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</small></p>
            <hr />
            <small className="text-white ">© 2021 Thrillophilia.com All rights reserved.</small>
        </div>
    );
};

export default Footer;