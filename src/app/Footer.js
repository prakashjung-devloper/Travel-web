"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section py-5 border-top border-secondary border-opacity-10" style={{ backgroundColor: '#090b0e' }}>
      <div className="container pt-4">
        
        <div className="row g-4 justify-content-between">
          
          {/* Column 1: Brand Info */}
          <div className="col-12 col-md-4">
            <Link className="navbar-brand fw-bold text-white fs-3 d-block mb-3 text-decoration-none" href="/">
              🍂 Wild<span className="text-warning">Nepal</span>
            </Link>
            <p className="text-white-50 small" style={{ lineHeight: '1.7', maxWidth: '320px' }}>
              Pioneering responsible eco-tourism and sacred pilgrimage expeditions across Nepal's undisturbed wilderness and ancient heritage sanctuaries [travel].
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-6 col-md-3">
            <h5 className="text-white fw-bold mb-3 small text-uppercase tracking-wider">Quick Exploration</h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.9rem' }}>
              <li>
                <Link href="/nature-city?location=all" className="footer-link text-white-50 text-decoration-none">
                  Spiritual Shrines 🛕
                </Link>
              </li>
              <li>
                <Link href="/national-park?park=all" className="footer-link text-white-50 text-decoration-none">
                  Protected Safaris 🐾
                </Link>
              </li>
              <li>
                <Link href="/our-mission" className="footer-link text-white-50 text-decoration-none">
                  Our Green Mission 🍃
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Info */}
          <div className="col-6 col-md-3">
            <h5 className="text-white fw-bold mb-3 small text-uppercase tracking-wider">Wilderness Support</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 text-white-50" style={{ fontSize: '0.9rem' }}>
              <li className="d-flex align-items-center gap-2">📍 Bardiya, Nepal</li>
              <li className="d-flex align-items-center gap-2">✉️ jungprakash426@gmail.com</li>
              <li>
                <Link href="/book-now" className="btn btn-sm btn-outline-warning rounded-pill px-3 mt-2 fw-semibold">
                  Instant Ledger 📑
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom CopyRight Bar */}
        <div className="mt-5 pt-4 border-top border-secondary border-opacity-10 text-center">
          <p className="text-white-50 m-0" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
            © {currentYear} <span className="text-white fw-bold">WilderNepal</span> Ecosystem. Crafted with Passion by <a href="https://prakashjung-devloper.github.io/My-Portfolio-website" className="text-warning text-decoration-none fw-semibold">Prakash.dev</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
