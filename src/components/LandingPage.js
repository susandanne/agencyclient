import React from 'react';
import Banner from './Banner';
import CompanyLogos from './CompanyLogos';
import Footer from './Footer';
import Navbar from './Navbar';
import ProvidedServices from './ProvidedServices';
import UserReview from './UserReview';
import Works from './Works';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="font-weight-normal">
            <div className="banner-bg">
                <div className="container">
                    <Navbar />
                    <Banner/>
                </div>
            </div>
            <div className="container">
                <CompanyLogos/>
                <ProvidedServices/>
            </div>
            <div className="work-bg">
                <div className="container">
                    <Works/>
                </div>
            </div>
            <div className="container my-5">
                    <UserReview/>
                </div>
            <div className="footer-bg">
                <div className="container">
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;