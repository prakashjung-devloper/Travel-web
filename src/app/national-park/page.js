"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const parkPackages = [
  { id: 1, park: 'chitwan', title: 'Chitwan One-Horned Rhino Safari', price: 'NPR 14,000', image: 'Rhino-img.jpg', desc: 'Ride elephants or jeeps deep into tropical forests to spot rare rhinos and crocodiles [travel].' },
  { id: 2, park: 'bardiya', title: 'Bardiya Deep Tiger Tracking Tour', price: 'NPR 18,500', image: 'tiger-img.jpg', desc: 'Walk safely inside undisturbed wild grasslands to witness the majestic Royal Tiger [travel].' },
  { id: 3, park: 'himalayan', title: 'Sagarmatha Alpine Wildlife Trek', price: 'NPR 45,000', image: 'sagarmatha-img.jpg', desc: 'Explore high-altitude ecosystems, musk deer habitats, and breathtaking Everest snow peaks [travel].' }
];

function ParkFilteredContent() {
  const searchParams = useSearchParams();
  const selectedPark = searchParams.get('park') || 'all';

  const filteredParks = selectedPark === 'all' 
    ? parkPackages 
    : parkPackages.filter(pkg => pkg.park === selectedPark);

  return (
    <div className="container" style={{ paddingTop: '50px' }}>
      
      {/* Title Header */}
      <div className="text-center mb-5">
        <span className="text-success fw-bold text-uppercase small tracking-wider d-block mb-2">🌿 Protected Wilderness</span>
        <h2 className="display-6 fw-bold text-white text-capitalize">
          {selectedPark === 'all' ? 'All National Park Expeditions' : `${selectedPark} Safari Packages`}
        </h2>
        <p className="text-muted mx-auto" style={{ maxWidth: '500px' }}>
          Journey safely into Nepal’s dense reserves and high alpine sanctuary networks [travel].
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {filteredParks.map((pkg) => (
          <div key={pkg.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            
            <div className="card h-100 w-100 border-0 shadow" style={{ backgroundColor: '#11141a', color: '#fff', borderRadius: '16px', overflow: 'hidden' }}>
              <img src={pkg.image} className="card-img-top" alt={pkg.title} style={{ height: '210px', objectFit: 'cover' }} />
              
              <div className="card-body p-4 d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-success mb-3 text-uppercase px-3 py-2 rounded-pill" style={{ fontSize: '0.7rem' }}>
                    🐾 {pkg.park} park
                  </span>
                  <h5 className="card-title fw-bold text-white mb-2" style={{ fontSize: '1.2rem' }}>{pkg.title}</h5>
                  <p className="card-text text-white-50 small" style={{ lineHeight: '1.6' }}>{pkg.desc}</p>
                </div>
                
                <div className="mt-4 pt-3 border-top border-secondary d-flex justify-content-between align-items-center">
                  <span className="fw-bold text-warning fs-5">{pkg.price}</span>

                  <Link 
                    href="/book-now" 
                    className="btn btn-outline-success btn-sm rounded-pill px-3 fw-bold text-decoration-none"
                  >
                    Book This Safari 🍃
                  </Link>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default function NationalParkPage() {
  return (
    <div className="py-5" style={{ backgroundColor: '#0b0d11', minHeight: '100vh', color: '#fff', paddingTop: '120px' }}>
      <Suspense fallback={<div className="text-center py-5"><h5>Loading National Parks...</h5></div>}>
        <ParkFilteredContent />
      </Suspense>
    </div>
  );
}
