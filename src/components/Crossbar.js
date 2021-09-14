import React, { Component } from 'react'
import './Style.css';

const Crossbar = (props) => {
    return (
        <div className="crossbar-container">
            <view className="cross"  />
            <p className="crossbar__title">or</p>         
        </div>
    );
}

export default Crossbar;