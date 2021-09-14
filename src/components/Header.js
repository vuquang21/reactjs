import React, { Component } from 'react';
import './Style.css';

const Header = (props) => {
    return (
        <div className="header-container">
            <span class="header__title">freeCodeCamp</span>
            <i class="fab fa-free-code-camp"></i>
        </div>
    );
}

export default Header;