import React from 'react';
import '../Explore/index.css';
const ExploreItem = (props) => {
  
  return (
    <div className="explore-container" >
      <img id="explore" className="explore__img " src={props.img} />
      <div className="explore__describe">
        <h5 className="explore__title">{props.title}</h5>
        <h6 className="explore__time">{props.time}</h6>
      </div>
    </div>
  );
};

export default ExploreItem;
