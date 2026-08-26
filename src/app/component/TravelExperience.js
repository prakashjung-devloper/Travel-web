"use client";
import React from 'react';
import { Compass, Flame, TreePine, Sparkles } from "lucide-react";

import Link from 'next/link';

const experiences = [
  {
    id: 1,
    tag: "Himalayan Treeking",
    title: "High-Altitude Basecamp Stays",
    desc: "Sleep under millions of shining stars surrounded by the world's highest frozen peaks.",
    bgImage: "himalayan.jpg",
    icon: <Flame size={22} className="text-warning" />
  },
  {
    id: 2,
    tag: "Wildlife and jungle ",
    title: "Jungle Luxury Glamping",
    desc: "Listen to the raw sounds of tigers and rhinos from a secure luxury tented oasis deep in the wild.",
    bgImage: "jungle.jpg",
    icon: <TreePine size={22} className="text-success" />
  },
  {
    id: 3,
    tag: "Cultural Insight",
    title: "Monastery Spiritual Retreats",
    desc: "Meditate alongside native monks in ancient cloisters hidden among the misty clouds.",
    bgImage: "culture.jpg",
    icon: <Compass size={22} className="text-info" />
  }
];

export default function TravelExperiences() {
  return (
    <section id="travel-experiences-section" className="py-5">
      <div className="container py-4">
        
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="text-success fw-bold text-uppercase small tracking-wider d-flex align-items-center justify-content-center mb-2">
            <Sparkles size={16} className="me-2 text-warning" /> Live The Dream
          </span>
          <h2 className="display-5 fw-bold text-white mb-3">Travel Experiences</h2>
          <p className="text-white-50 mx-auto" style={{ maxWidth: '600px' }}>
            Go beyond standard paths and collect unforgettable memories crafted by WilderNepal's native pathfinders.
          </p>
        </div>

        {/* Responsive Experiences Grid Row */}
        <div className="row g-4 justify-content-center">
          {experiences.map((exp) => (
            <div key={exp.id} className="col-12 col-md-6 col-lg-4">
              
              {/* 📸 प्रिमियम भिजुअल एक्सपिरियन्स कार्ड */}
              <div 
                className="experience-card position-relative rounded-4 overflow-hidden d-flex align-items-end p-4 shadow-lg border border-secondary border-opacity-10"
                style={{ 
                  height: '420px',
                  backgroundImage: `linear-gradient(180deg, rgba(11, 13, 17, 0.1) 0%, rgba(11, 13, 17, 0.95) 100%), url(${exp.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                
                {/* कार्डको भित्री कन्टेन्ट */}
                <div className="experience-content w-100" style={{ zIndex: 2 }}>
                  
                  {/* ट्याग र आइकन रो */}
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="badge bg-dark bg-opacity-70 border border-secondary border-opacity-25 px-3 py-2 rounded-pill small fw-semibold text-white-50">
                      {exp.tag}
                    </span>
                    <div className="exp-icon-box p-2 rounded-circle bg-dark bg-opacity-60 border border-secondary border-opacity-25 d-flex align-items-center justify-content-center">
                      {exp.icon}
                    </div>
                  </div>

                  <h4 className="h5 fw-bold text-white mb-2">{exp.title}</h4>
                  <p className="text-white-50 small mb-4" style={{ lineHeight: '1.6' }}>{exp.desc}</p>
                  
                  {/* लिङ्क बटन जो सिधै बुकिङ फर्ममा जान्छ */}
                  <Link href="/book-now" className="btn btn-sm btn-outline-success w-100 rounded-pill py-2 fw-bold text-decoration-none">
                    Experience This 🍃
                  </Link>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
