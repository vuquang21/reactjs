import React, { Component } from 'react';
import './Style.css';


const Button = (props) => {   
    const { title } = props;
    return (
        <div className="button-container">
            <button type="button" className="button">{ title }</button>
        </div>
    );
} 



export default Button;