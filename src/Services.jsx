// Services.jsx - list of services I offer
// requirement: short list of services with images/icons

import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <div className="services">

      {/* page title */}
      <h1>My <span>Services</span></h1>
      <p className="subtitle">What I can help you with</p>

      {/* grid of 6 service cards */}
      <div className="services-grid">

        {/* each card has an emoji as icon, title and description */}
        <div className="service-card">
          <div className="service-icon">🌐</div>
          <h3>Web Development</h3>
          <p>Building clean and responsive websites using HTML, CSS and JavaScript.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">⚛️</div>
          <h3>React Applications</h3>
          <p>Developing single-page applications using React with components and routing.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3>Responsive Design</h3>
          <p>Making websites look great on phones, tablets and desktops using CSS.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">☕</div>
          <h3>Java Programming</h3>
          <p>Building software applications using Java and object-oriented programming.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🗄️</div>
          <h3>Database Basics</h3>
          <p>Working with databases, writing SQL queries and connecting to a backend.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">🐙</div>
          <h3>Version Control</h3>
          <p>Managing code with Git and GitHub, creating repos and making commits.</p>
        </div>

      </div>
    </div>
  )
}