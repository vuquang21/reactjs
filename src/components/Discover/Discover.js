import React from 'react';
import DiscoverItem from './DiscoverItem';
import '../Discover/index.css';

const Discover = () => {
    const discovers = [
        {
            title: "Featured collection: Wanderlust",
            description: "Travel from home with Online Experiences.",
            url: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fdiscover%2F1.jpg&w=256&q=75",
        },
        {
            title: "Online Experiences",
            description: "Live, interactive activities led by Hosts.",
            url: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fdiscover%2F2.jpg&w=256&q=75",
        },
        {
            title: "Experiences",
            description: "Find unforgettable activities near you.",
            url: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fdiscover%2F3.jpg&w=256&q=75",
        },
    ];
    return (
        <>
            <div className="discover">
                <div className="discover-container">
                    <h1 style={{ color: '#343A40' }} >Discover things to do</h1>
                    <div className="DiscoverItem">
                        <DiscoverItem
                            title={discovers[0].title}
                            description={discovers[0].description}
                            url={discovers[0].url}
                        />
                        <DiscoverItem
                            title={discovers[1].title}
                            description={discovers[1].description}
                            url={discovers[1].url}
                        />
                        <DiscoverItem
                            title={discovers[2].title}
                            description={discovers[2].description}
                            url={discovers[2].url}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Discover;
