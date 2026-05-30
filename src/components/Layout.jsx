import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div className="navbar">
      <div className="logo">
        {/* Describtion of the logo */}
        <div className="logo-icon">NA</div>
        <span>Nicolas Ariza</span>
      </div>

      {/* Nav links */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/project">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}