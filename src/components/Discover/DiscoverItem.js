import React from 'react';
import '../Discover/index.css';

const DiscoverItem = (props) => {
    return (
        <>
            <div className="discover-item">
                <img src={props.url} />
                <div className="discover-item-container">
                    <h4>{props.title}</h4>
                    <p style={{color: '#343A40'}} >{props.description}</p>
                </div>
            </div>
        </>
    );
};

export default DiscoverItem;