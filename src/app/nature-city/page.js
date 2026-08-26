"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const cityPackages = [
  { 
    id: 1, 
    city: 'kathmandu', 
    title: 'Pashupatinath & Swayambhunath Tour', 
    price: 'NPR 4,500', 
    image: 'pashupatinath.webp', 
    desc: 'Explore the ancient, sacred Hindu temple of Pashupatinath and the historic Swayambhunath Stupa inside Kathmandu Valley [travel].' 
  },
  { 
    id: 2, 
    city: 'lumbini', 
    title: 'Lumbini Sacred Birthplace Expedition', 
    price: 'NPR 15,000', 
    image: 'lumbini.jpg', 
    desc: 'Visit the  Mayadevi Temple in Lumbini, the official birthplace of Lord Buddha, and explore international monasteries [travel].' 
  },
  { 
    id: 3, 
    city: 'Pokhara', 
    title: 'Pokhara: The City of Lakes', 
    price: 'NPR 38,000', 
    image: 'pokhara.jpg', 
    desc: 'It is one of Nepal’s most popular destinations for nature and travel lovers. [travel].' 
  },

   { 
    id: 4, 
    city: 'Nagarkot', 
    title: 'Nagarkot: A Himalayan Sunrise Paradise', 
    price: 'NPR 38,000', 
    image: 'nagarkot.webp', 
    desc: 'It is a perfect place to relax, enjoy nature, and experience the beauty of Nepal’s countryside. [travel].' 
  },

 { 
    id: 5, 
    city: 'Api base camp', 
    title: 'Api Base Camp: Into the Wild Himalayas', 
    price: 'NPR 38,000', 
    image: 'api.jpg', 
    desc: 'Surrounded by rugged peaks and untouched natural beauty, it is an ideal destination for trekkers seeking adventure, solitude, and a deeper connection with nature. [travel].' 
  }

];

function FilteredContent() {
  const searchParams = useSearchParams();
  const selectedLocation = searchParams.get('location') || 'all';

  const filteredPackages = selectedLocation === 'all' 
    ? cityPackages 
    : cityPackages.filter(pkg => pkg.city === selectedLocation);

  return (
    <div className="container">
      
      {/*  Titles */}
      <div className="text-center mb-5">
        <span className="text-success fw-bold text-uppercase small tracking-wider d-block mb-2">🌿 Spiritual Heritage</span>
        <h2 className="display-6 fw-bold text-white text-capitalize">
          {selectedLocation === 'all' ? 'All Spiritual & Cultural Sites' : `${selectedLocation} Heritage Packages`}
        </h2>
        <p className="text-white-50 mx-auto" style={{ maxWidth: '500px' }}>
          Explore Nepal's most revered temples and ancient pilgrimage routes safely mapped for you [travel].
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <div key={pkg.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              

              <div className="card h-100 w-100 border-0 shadow" style={{ backgroundColor: '#11141a', color: '#fff', borderRadius: '16px', overflow: 'hidden' }}>
                <img src={pkg.image} className="card-img-top" alt={pkg.title} style={{ height: '210px', objectFit: 'cover' }} />
                
                <div className="card-body p-4 d-flex flex-column justify-content-between">
                  <div>
                    <span className="badge bg-success mb-3 text-uppercase px-3 py-2 rounded-pill" style={{ fontSize: '0.7rem' }}>
                      🛕 {pkg.city}
                    </span>
                    <h5 className="card-title fw-bold text-white mb-2" style={{ fontSize: '1.2rem' }}>{pkg.title}</h5>
                    <p className="card-text text-white-50 small" style={{ lineHeight: '1.6' }}>{pkg.desc}</p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-top border-secondary d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-warning fs-5">{pkg.price}</span>
                    <Link href="/book-now" className="btn btn-outline-success btn-sm rounded-pill px-3 fw-bold text-decoration-none">
                      Book This Tour 🍃
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          ))
        ) : (
          <div className="text-center text-muted py-5">
            <h5>No spiritual tours found for this location.</h5>
          </div>
        )}
      </div>

    </div>
  );
}

export default function NatureCityPage() {
  return (
    <div className="py-5" style={{ backgroundColor: '#0b0d11', minHeight: '100vh', color: '#fff', paddingTop: '120px' }}>
      <Suspense fallback={<div className="text-center py-5"><h5>Loading Spiritual Destinations...</h5></div>}>
        <FilteredContent />
      </Suspense>
    </div>
  );
}



