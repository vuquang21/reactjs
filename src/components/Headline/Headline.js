import React from 'react';
import '../Headline/index.css';

const Headline = () => {
  

  return (
    <div className="headline-container">
      <div className="headline">
        <h1>
          Olimpian &
          <br />
          Paralympian
          <br /> Online <br />
          Experiences
        </h1>
       <button type="button" class="btn btn-light">Explore Now</button>
      </div>
    </div>
  );
};

export default Headline;