import React from 'react';
import './CanadianPlaces.css';

const CanadianPlaces = () => {
    return (

        <>
            <div>
                <h3 className="float-start mx-5 mt-5">Tourist Places in Canada </h3>
            </div>
            <div className="wrap-collabsible">
                <input id="collapsible" className="toggle" type="checkbox" />
                <label for="collapsible" className="lbl-toggle">More Info</label>
                <div className="collapsible-content">
                    <div className="content-inner">
                        <p>Niagara Falls, Jasper National Park, Banff National Park, Vancouver, Montreal, Quebec City, Gros Morne National Park, Toronto, Churchill, Whitehorse, Okanagan Valley, Ottawa, Athabasca Glacier, Winnipeg,Glacier National Park, Peggy’s Cove, and many more.

                            The mesmerizing places to visit in Canada offer the visitors a newfangled experience of holidaymaking. Dotted with some of the alluring national parks, full of heritage hotspots, brimming with relics exhibition halls, the places in Canada will embrace you and take you far away from your regular life. These places to visit will not only give you insights about the bygone era but they will also add a pinch of adventure to your life. You will definitely be stunned observing the architectural marvels of the past times.

                            While heading out on an exploration tour of the best places to visit in Canada, you will be visiting Jasper National park which is famed for its adventurous activities and spectacular viewpoints and Banff  National Park which promises you to offer sights of wildlife species and experience adventurous activities. Visiting Niagara Falls lets you marvel at the stunning natural beauty and Quebec City lets you enjoy snow activities.

                            The best tourist places in Canada give you a wholesome experience of heritage and adventure. You will surely cherish the moments spent in Canada all through your life.</p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default CanadianPlaces;