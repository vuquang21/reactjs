import React from 'react';
import FooterItem from './FooterItem';
import '../Footer/index.css';


const Footer = () => {
    const about = {
        key: 0,
        headline: 'ABOUT',
        titles: [
            'How Airbnb works',
            'Newsroom',
            'Airbnb 2021',
            'Investors',
            'Airbnb Plus',
            'Airbnb Luxe',
        ],
    }
    const community = {
        key: 1,
        headline: 'COMMUNITY',
        titles: [
            'Diversity & Belonging',
            'Accessibility',
            'Airbnb Associates',
            'Frontline Stays',
            'Guest Referrals',
            'Airbnb.org',
        ],
    }
    const host = {
        key: 2,
        headline: 'HOST',
        titles: [
            'Host your home',
            'Host an Online Experience',
            'Host an Experience',
            'Responsible hosting',
            'Resource Centre',
            'Community Centre',
        ],
    }
    const support = {
        key: 3,
        headline: 'SUPPORT',
        titles: [
            'Our COVID-19 Response',
            'Help Centre',
            'Cancellation options',
            'Neighbourhood Support',
            'Trust & Safety',
        ],
    };

    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="FooterItem">
                        <FooterItem items={about} />
                        <FooterItem items={community} />
                        <FooterItem items={host} />
                        <FooterItem items={support} />
                    </div>
                    <div className="footer__dash">
                        <div className="footer__dash--container">
                            
                            <div className="footer__dash--headline">
                                <span>2021</span>
                                <a href="#">Dash Santosh</a>
                            </div>

                            <div className="footer__dash--contact">
                                <i class="fa fa-globe">English</i>
                                <i class="fa fa-usd">USD</i>
                                <i class="fab fa-facebook" />
                                <i class="fab fa-twitter" />
                                <i class="fab fa-instagram" />
                            </div>

                            <div className="footer__change-color">
                                <span>Switch Theme</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
