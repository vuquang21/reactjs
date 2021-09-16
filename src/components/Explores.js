import React from "react";
import ExploreItem from "./ExploreItem";
import '../components/Style.css';

const Explores = (props) => {
    const explores = [
        {
            time: "3-hour drive",
            title: "Bengaluru",
            img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F1.jpg&w=128&q=75",
        },
        {
            time: "3-hour drive",
            title: "Puducherry",
            img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F2.jpg&w=128&q=75",
        },
        {
            time: "3.5-hour drive",
            title: "Kodaikannal",
            img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F3.jpg&w=128&q=75",
        },
        {
            time: "4-hour drive",
            title: "Mysuru",
            img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F4.jpg&w=128&q=75",
        },
        {
            time: "4.5-hour drive",
            title: "Chennai",
            img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F5.jpg&w=128&q=75",
        },
        {
            time: "6-hour drive",
            title: "Kochi",
            img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F6.jpg&w=128&q=75",
        },
        {
            title: "Ooty",
            time: "3.5-hour drive",
            img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F7.jpg&w=128&q=75",
        },
        {
            time: "7.5-hour drive",
            title: "Trivandrum",
            img: "https://airbnb-ish.vercel.app/_next/image?url=%2Fimages%2Fexplore%2F8.jpg&w=128&q=75",
        },
    ];
    // var rows = [];
    // for (var i = 0; i < explores.length; i++) {
    //     rows.push(
    //         <ExploreItem
    //             className="explore-item"
    //             img={explores[i].img}
    //             time={explores[i].title}
    //             title={explores[i].time}
    //         />
    //     );
    // }

    return (
        <div className="explores">
            <h2>Explore nearby</h2>
            <div className="explore__items" id="items--1">
                <ExploreItem
                    className="explore-item"
                    img={explores[0].img}
                    title={explores[0].title}
                    time={explores[0].time}
                />
                <ExploreItem
                    className="explore-item"
                    img={explores[1].img}
                    title={explores[1].title}
                    time={explores[1].time}
                />
                <ExploreItem
                    className="explore-item"
                    img={explores[2].img}
                    title={explores[2].title}
                    time={explores[2].time}
                />
                <ExploreItem
                    className="explore-item"
                    img={explores[3].img}
                    title={explores[3].title}
                    time={explores[3].time}
                />
            </div>
            <div className="explore__items" id="items--2">
                <ExploreItem
                    className="explore-item"
                    img={explores[4].img}
                    title={explores[4].title}
                    time={explores[4].time}
                />
                <ExploreItem
                    className="explore-item"
                    img={explores[5].img}
                    title={explores[5].title}
                    time={explores[5].time}
                />
                <ExploreItem
                    className="explore-item"
                    img={explores[6].img}
                    title={explores[6].title}
                    time={explores[6].time}
                />
                <ExploreItem
                    className="explore-item"
                    img={explores[7].img}
                    title={explores[7].title}
                    time={explores[7].time}
                />
            </div>
        </div>
        // <div className="explores">
        //     <h2>Explore nearby</h2>
        //     {rows.map(() => <ExploreItem className="explore-item" img={rows.values.img} time={rows.time} title={rows.title} />)}
        // </div>
    );
};

export default Explores;
