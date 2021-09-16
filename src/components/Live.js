import React from "react";
import LiveItem from "./LiveItem";
import "../components/Style.css";

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
        <div className="live__headline">
          <h2 style={{color: "black"}}>Live anywhere</h2>
        </div>
        <div className="live-container">
          <LiveItem className="LiveItem" title={liveItems[0].title} url={liveItems[0].url} />
          <LiveItem className="LiveItem" title={liveItems[1].title} url={liveItems[1].url} />
          <LiveItem className="LiveItem" title={liveItems[2].title} url={liveItems[2].url} />
          <LiveItem className="LiveItem" title={liveItems[3].title} url={liveItems[3].url} />
        </div>
      </div>
    </>
  );
};

export default Live;
