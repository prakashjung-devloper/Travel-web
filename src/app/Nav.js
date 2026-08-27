"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg px-3 navbar-dark bg-transparent">
        <div className="container">

          <Link
            className="navbar-brand fw-bold text-white fs-3"
            href="/"
          >
            🍂 Wilder<span className="text-warning">Nepal</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <div className="navbar-nav ms-auto align-items-lg-center gap-3">

              {/* Nature & Cities */}
              <div className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-white-50 px-2 bg-transparent border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nature & Cities
                </button>

                <ul
                  className="dropdown-menu dropdown-menu-dark border-0 shadow-lg p-2"
                  style={{
                    backgroundColor: "#11141a",
                    borderRadius: "12px",
                  }}
                >
                  <li>
                    <Link
                      className="dropdown-item rounded px-3 py-2 text-success fw-bold"
                      href="/nature-city?location=all"
                    >
                      All Destinations 🌍
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider border-secondary" />
                  </li>

                  <li>
                    <Link
                      className="dropdown-item rounded px-3 py-2"
                      href="/nature-city?location=kathmandu"
                    >
                      📍 Capital Shrines & Heritage
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item rounded px-3 py-2"
                      href="/nature-city?location=lumbini"
                    >
                   📍 Lumbini
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item rounded px-3 py-2"
                      href="/nature-city?location=pokhara"
                    >
                        📍 Pokhara Lakes
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item rounded px-3 py-2"
                      href="/nature-city?location=Nagarkot"
                    >
                      📍 Nagarkot Hills
                    </Link>
                  </li>

                  
                </ul>
              </div>

              {/* National Parks */}
              <div className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-white-50 px-2 bg-transparent border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  National Parks
                </button>

                <ul
                  className="dropdown-menu dropdown-menu-dark border-0 shadow-lg p-2"
                  style={{
                    backgroundColor: "#11141a",
                    borderRadius: "12px",
                  }}
                >
                  <li>
                    <Link
                      className="dropdown-item rounded px-3 py-2 text-success fw-bold"
                      href="/national-park?park=all"
                    >
                      All Protected Parks 🌍
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider border-secondary" />
                  </li>

                  <li>
                    <Link
                      className="dropdown-item rounded px-3 py-2"
                      href="/national-park?park=chitwan"
                    >
                      🦏 Chitwan Rhino Sanctuary
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item rounded px-3 py-2"
                      href="/national-park?park=bardiya"
                    >
                      🐅 Bardiya Tiger Wilderness
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item rounded px-3 py-2"
                      href="/national-park?park=himalayan"
                    >
                      🏔️ Himalayan Alpine Reserves
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Mission */}
              <Link
                className="nav-link text-white-50 px-2"
                href="/our-mission"
              >
                Our Mission
              </Link>

              {/* Book */}
              <a href="#book-now" className="text-decoration-none">
                <button className="book-btn text-white rounded-pill ms-2">
                  Book Now
                </button>
              </a>

            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}