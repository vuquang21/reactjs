import React from 'react';
import './index.css';
const Hosting = () => {
    return (
        <>
            <div className="hosting">
                <div className="hosting-container">
                    <img src="https://airbnb-ish.vercel.app/images/host.jpg" />
                </div>
                <div className="hosting__headline">
                    <h2>Try hosting</h2>
                    <p>Earn extra income and unlock new oppurtunities by<br /> sharing your space.</p>
                    <button type="button" class="btn btn-light btn-border">Learn more</button>
                </div>
            </div>
        </>
    );
};

export default Hosting;
