import React from 'react';
import LiveItem from './LiveItem';
import '../Live/index.css';

const Live = () => {
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
      <div className="live">
        <div className="live-container">
          <LiveItem />
        </div>
      </div>
    </>
  );
};

export default Live;
