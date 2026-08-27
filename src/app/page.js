
import React from 'react';
import Link from 'next/link';
import WhyExplore from "./component/WhyExplore";
import FeaturedDestinations from './component/FeaturedDestinations';
import TravelExperience from './component/TravelExperience';
import OurMissionPage from './our-mission/page';
import BookNowPage from './book-now/page';
import Footer from './Footer';


export default function Hero() {
   
  return (

    <>
    <div className="hero-banner-container position-relative d-flex align-items-center justify-content-center text-center">
      
      <div className="container px-4 hero-content-wrapper">
        
        <p className="hero-subtitle text-warning fw-semibold text-uppercase tracking-wider">
          The land of nature and Mountains
        </p>
        
        <h1 className="hero-main-title display-1 fw-black text-white">
          NEPAL
        </h1>
        
        <p className="hero-paragraph lead text-white-50 mx-auto">
          Explore the beauty beyond the ordinary. Go deep into dense national parks, track exotic wildlife, and witness majestic Himalayan ranges through sustainable eco-tourism.
        </p>

        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <a href="#book-now" className="btn btn-warning btn-lg px-4 fw-bold rounded-pill shadow">
            Book A Trip Now 🍃
          </a>
<a
  href="#featured-destinations" 
  className="btn btn-outline-light btn-lg px-4 rounded-pill text-decoration-none"
>
  View Destinations
</a>

        </div>

      </div>

      <div className="hero-bottom-fade position-absolute bottom-0 start-0 w-100"></div>
 
    </div>

    <WhyExplore/>
    <FeaturedDestinations/>
<TravelExperience/>
<OurMissionPage/>
<BookNowPage/>
<Footer/>
    </>
  );
}
