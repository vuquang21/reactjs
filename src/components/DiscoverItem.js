import React from "react";
import '../components/Style.css';

const DiscoverItem = (props) => {
    return (
        <>
        <div className="discover-item">
            <div className="discover-item-container">
                <img src={props.url}/>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
        </>
    );
};

export default DiscoverItem;