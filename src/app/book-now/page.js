"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function BookNowPage() {
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    select_trip: "Capital Sacred Shrines", 
    booking_date: "",
    user_message: ""
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    const SERVICE_ID = "service_jpz4iwm";     // इमेल सेवा कोड
    const TEMPLATE_ID = "template_qu2bgxv";   // इमेल ढाँचा कोड
    const PUBLIC_KEY = "mM6hQNHHPtnJ8CnaA";     // अकाउन्ट साँचो

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setStatusMessage("✅ Success! Your booking request has been securely sent to Prakash.dev!");
        setFormData({ user_name: "", user_email: "", select_trip: "Capital Sacred Shrines", booking_date: "", user_message: "" });
      }, (error) => {
        setIsSending(false);
        setStatusMessage("❌ Connection Failed. Please verify your API Keys inside page.js.");
        console.error("EmailJS Error Log:", error);
      });
  };

  return (
    <div className="py-5" style={{ backgroundColor: '#0b0d11', minHeight: '100vh', color: '#fff', paddingTop: '120px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            
            {/* Enterprise Glassmorphism Card */}
            <div className="p-4 p-sm-5 rounded-4 shadow-lg border border-secondary border-opacity-10" style={{ backgroundColor: '#11141a' }}>
              
              <div className="text-center mb-4">
                <span className="text-success fw-bold text-uppercase small tracking-wider mb-2 d-block">🍃 Secure Booking Ledger</span>
                <h1 className="h2 fw-bold text-white">Book Your Custom Journey</h1>
                <p className="text-white-50 small">Fill out your details to secure your specialized slot with WilderNepal [travel].</p>
              </div>

              {/* Status Alert Dynamic Notification Box */}
              {statusMessage && (
                <div className={`alert ${statusMessage.includes('Success') ? 'alert-success bg-success bg-opacity-10 text-success' : 'alert-danger bg-danger bg-opacity-10 text-danger'} border-0 rounded-3 mb-4`} role="alert">
                  {statusMessage}
                </div>
              )}

              {/* Secure Booking Form */}
              <form ref={formRef} onSubmit={handleBookingSubmit}>
                
                {/* Field 1: Full Name */}
                <div className="mb-3">
                  <label className="form-label text-white-50 small fw-semibold">Your Full Name</label>
                  <input 
                    type="text" name="user_name" required value={formData.user_name} onChange={handleChange}
                    className="form-control bg-dark border-secondary border-opacity-25 text-white p-3" 
                    placeholder="e.g. Prabin Jung Kadayat" style={{ borderRadius: '10px' }}
                  />
                </div>

                {/* Field 2: Email Address */}
                <div className="mb-3">
                  <label className="form-label text-white-50 small fw-semibold">Email Address</label>
                  <input 
                    type="email" name="user_email" required value={formData.user_email} onChange={handleChange}
                    className="form-control bg-dark border-secondary border-opacity-25 text-white p-3" 
                    placeholder="name@example.com" style={{ borderRadius: '10px' }}
                  />
                </div>

                {/* Field 3: Cultural & Sanctuary Selection Dropdown */}
                <div className="mb-3">
                  <label className="form-label text-white-50 small fw-semibold">Select Heritage / Wildlife Expedition</label>
                  <select 
                    name="select_trip" value={formData.select_trip} onChange={handleChange}
                    className="form-select bg-dark border-secondary border-opacity-25 text-white p-3" 
                    style={{ borderRadius: '10px' }}
                  >
                    <option value="Capital Sacred Shrines">🛕 Capital Sacred Shrines (Kathmandu)</option>
                    <option value="Lumbini Peaceful Shrines">☸️ Lumbini Peaceful Shrines</option>
                    <option value="Muktinath Alpine Pilgrimage">🏔️ Muktinath Alpine Pilgrimage</option>
                    <option value="Chitwan Rhino Safari">🦏 Chitwan Rhino Sanctuary</option>
                    <option value="Bardiya Tiger Wilderness">🐅 Bardiya Tiger Wilderness</option>
                    <option value="Himalayan Alpine Reserves">🏔️ Himalayan Alpine Reserves</option>
                  </select>
                </div>

                {/* Field 4: Target Date Calendar */}
                <div className="mb-3">
                  <label className="form-label text-white-50 small fw-semibold">Target Departure Date</label>
                  <input 
                    type="date" name="booking_date" required value={formData.booking_date} onChange={handleChange}
                    className="form-control bg-dark border-secondary border-opacity-25 text-white p-3" 
                    style={{ borderRadius: '10px' }}
                  />
                </div>

                {/* Field 5: Requirements Message Box */}
                <div className="mb-4">
                  <label className="form-label text-white-50 small fw-semibold">Special Requirements / Message</label>
                  <textarea 
                    name="user_message" rows="4" value={formData.user_message} onChange={handleChange}
                    className="form-control bg-dark border-secondary border-opacity-25 text-white p-3" 
                    placeholder="Tell us about food habits, physical constraints or custom routes..." style={{ borderRadius: '10px' }}
                  ></textarea>
                </div>

                {/* Action Submission Button */}
                <button 
                  type="submit" disabled={isSending}
                  className="btn btn-warning w-100 py-3 fw-bold rounded-pill text-dark shadow"
                >
                  {isSending ? "Processing Safe Connection..." : "Confirm Eco-Trip Booking 🍃"}
                </button>

              </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
