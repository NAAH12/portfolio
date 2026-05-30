// Project.jsx - shows my 3 projects with description and role
// requirement: at least 3 projects with image, role and outcome

import React from 'react';
import './Project.css';

export default function Project() {
  return (
    <div className="projects">

      {/* page title */}
      <h1>My <span>Projects</span></h1>
      <p className="subtitle">Some of the work I have done</p>

      {/* grid container - holds all 3 project cards */}
      <div className="projects-grid">

        {/* PROJECT 1 */}
        <div className="project-card">
          {/* project image placeholder - replace with real img when ready */}
          <div className="project-img">🖼️ Image Gallery</div>
          <div className="project-info">
            <h3>Image Gallery</h3>
            {/* my role in this project */}
            <p><strong>My Role:</strong> Frontend Developer</p>
            {/* short description */}
            <p>A responsive image gallery built with HTML, CSS and
               JavaScript. Users can browse and view images in a
               clean grid layout.</p>
            {/* outcome - what I learned */}
            <p><strong>Outcome:</strong> Learned how to manipulate
               the DOM with JavaScript and create responsive layouts.</p>
            {/* technologies used */}
            <div className="tags">
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <div className="project-img">🚌 Bus Transport App</div>
          <div className="project-info">
            <h3>Bus Transport System</h3>
            <p><strong>My Role:</strong> Software Developer</p>
            <p>A transport application that displays bus stops on a
               route and includes an alarm system that notifies users
               when their stop is approaching.</p>
            <p><strong>Outcome:</strong> Practiced object-oriented
               programming and learned how to build notification
               logic in software.</p>
            <div className="tags">
              <span>Java</span>
              <span>OOP</span>
              <span>Software Design</span>
            </div>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <div className="project-img">💼 Portfolio Site</div>
          <div className="project-info">
            <h3>Personal Portfolio Website</h3>
            <p><strong>My Role:</strong> Frontend Developer</p>
            <p>This portfolio website built with React. It includes
               6 pages with full navigation and a working contact form.</p>
            <p><strong>Outcome:</strong> Learned React components,
               React Router, useState and how to deploy a site
               to the cloud.</p>
            <div className="tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}