"use client";
import React from 'react';
import Link from 'next/link';
import { section } from 'lucide-react';

const missionPillars = [
  {
    id: 1,
    title: "100% Plastic-Free Treks",
    desc: "We ensure all our Himalayan basecamp expeditions are completely plastic-free, preserving pristine alpine water resources [travel].",
    iconClass: "bi bi-recycle text-success fs-3"
  },
  {
    id: 2,
    title: "Wildlife Conservation",
    desc: "A significant percentage of our jungle safari bookings directly funds anti-poaching patrol networks in Chitwan and Bardiya [travel].",
    iconClass: "bi bi-shield-shaded text-warning fs-3"
  },
  {
    id: 3,
    title: "Empowering Native Guides",
    desc: "We hire 100% local sherpas and indigenous jungle trackers, keeping your travel revenue inside the village communities [travel].",
    iconClass: "bi bi-people text-info fs-3"
  }
];

export default function OurMissionPage() {
  return (
    <section id="our-mission">
    <div className="our-mission-wrapper py-5" style={{ backgroundColor: '#0b0d11', minHeight: '100vh', color: '#fff', paddingTop: '120px' }}>
      <div className="container py-4">
        
        <div className="row align-items-center g-5 mb-5">
          
          <div className="col-12 col-lg-6">
            <span className="text-success fw-bold text-uppercase small tracking-wider mb-2 d-block">
              🌿 Driven By Purpose
            </span>
            <h1 className="display-4 fw-bold text-white mb-4">
              Our Mission for <br />
              <span className="text-warning">Sustainable Travel</span>
            </h1>
            <p className="lead text-white-50 mb-4" style={{ lineHeight: '1.8' }}>
              At WilderNepal, we believe travel should change you, not the destination. Our mission is to pioneer responsible eco-tourism that protects Nepal’s delicate ecosystems while empowering indigenous mountain guides.
            </p>
          </div>

          <div className="col-12 col-lg-6">
            {/* Right Side Video/Image Graphic Box */}
            <div 
              className="mission-hero-box position-relative rounded-4 overflow-hidden border border-secondary border-opacity-10 d-flex align-items-center justify-content-center"
              style={{ 
                height: '350px',
                backgroundImage: `linear-gradient(rgba(11, 13, 17, 0.2), rgba(11, 13, 17, 0.7)), url("ne.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-center p-4" style={{ zIndex: 2 }}>
                <h4 className="fw-bold text-white mb-2">Preserving Nepal's Heritage

                </h4>
                <p className="text-white-50 small max-width-sm">Every booking supports sustainable forestry initiatives.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Row 2: 3 Core Pillars Cards */}
        <div className="row g-4 pt-4 justify-content-center">
          {missionPillars.map((pillar) => (
            <div key={pillar.id} className="col-12 col-md-6 col-lg-4">
              
              {/* Luxury Minimalist Mission Card */}
              <div className="mission-card p-4 rounded-4 h-100 border border-secondary border-opacity-10">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon-box-mission p-2 bg-dark bg-opacity-50 rounded-3 border border-secondary border-opacity-10 d-flex align-items-center justify-content-center" >
                    <i className={pillar.iconClass}></i>
                  </div>
                  <h4 className="h5 fw-bold text-white m-0">{pillar.title}</h4>
                </div>
                <p className="text-white-50 small m-0" style={{ lineHeight: '1.6' }}>{pillar.desc}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Final Call to Action Link Underneath Cards */}
        <div className="text-center mt-5 pt-4">
          <Link href="/book-now" className="btn btn-warning btn-lg px-5 rounded-pill fw-bold shadow">
            Join Our Green Mission 🍃
          </Link>
        </div>

      </div>
    </div>
    </section>
  );
}
