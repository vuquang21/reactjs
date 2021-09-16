import React from 'react';
import '../components/Style.css';

const LiveItem = (props) => {
    return (
        <>
        <div className="live-item">
            <div className="live-item--container">
                <img className="live__img"src= {props.url} />
                <h4>{props.title}</h4>
            </div>
        </div>
        </>
    );
}

export default LiveItem;