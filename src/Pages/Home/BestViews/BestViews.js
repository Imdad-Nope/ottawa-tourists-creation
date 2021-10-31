import React, { useEffect, useState } from 'react';
import BestView from './BestView';

const BestViews = () => {
    const [views, setViews] = useState([])
    useEffect(() => {
        fetch('./view.json')
            .then(res => res.json())
            .then(data => setViews(data))
    }, [])
    return (
        <div className="container mt-5">
            <h4 className="text-warning">Tourists Most Wanted Places</h4>
            <div className="row">
                {
                    views.map(view => <BestView
                        id={view.id}
                        view={view}
                    ></BestView>)
                }
            </div>
        </div>
    );
};

export default BestViews;