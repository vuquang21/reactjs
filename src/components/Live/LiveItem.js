import React from 'react';
import '../Live/index.css';

const LiveItem = (props) => {
  const liveItems = [
    {
      title: "Outdoor getways",
      url: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Flive%2F1.jpg&w=256&q=75",
    },
    {
      title: "Unique stays",
      url: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Flive%2F2.jpg&w=256&q=75",
    },
    {
      title: "Entire homes",
      url: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Flive%2F3.jpg&w=256&q=75",
    },
    {
      title: "Pets allowed",
      url: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Flive%2F4.jpg&w=256&q=75",
    },
  ];
  return (
    <>
      <div className="live-item">
        <h2 style={{ color: "black" }}>Live anywhere</h2>
        <div className="live-item--container">
          <ul>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                <img className="live__img" src={liveItems[0].url} />
                <h4>{liveItems[0].title}</h4>
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                <img className="live__img" src={liveItems[1].url} />
                <h4>{liveItems[1].title}</h4>
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                <img className="live__img" src={liveItems[2].url} />
                <h4>{liveItems[2].title}</h4>
              </a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: "none" }}>
                <img className="live__img" src={liveItems[3].url} />
                <h4>{liveItems[3].title}</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LiveItem;
