import React from 'react';

const Flexible = (props) => {
    const text = "I'm flexible";
    return (
        <div className="flexible">
            <div className="flexible-container">
                <h1>Not sure where to go?<br />Perfect.</h1>
                <button type="button" class="btn btn-light btn-border">{text}</button>
            </div>
        </div>
    );
};

export default Flexible;