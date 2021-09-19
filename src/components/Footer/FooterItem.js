import React, { Children } from 'react';
import '../Footer/index.css';

const FooterItem = (props) => {
    const { items } = props;
    const listTitle = items.titles;
    return (
        <>
            <div className="footer-item">
                <div className="footer-item--container">
                    <div className="footer-item__headline">
                        <h5>{items.headline}</h5>
                    </div>
                    <div className="footer__title">
                        <ul>
                            {/* <li style={{color: 'black'}}>{items.titles.map()}</li><br /> */}
                            {/* <li>{listTitle.forEach(element => {element})}</li> */}
                            {listTitle.map((title, index) => (
                                <li><a href="#" key={index} style={{color: '#8B8B9C'}}>{title}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FooterItem;
