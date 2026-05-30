// About.jsx - this page shows personal info about me
// requirements: legal name, photo, short bio, link to PDF resume

// need this to use JSX
import React from 'react';

// bringing in the styles for this page
import './About.css';

export default function About() {
  return (
    <div className="about">

      {/* page title */}
      <h1>About <span>Me</span></h1>

      {/* two column layout - photo on left, info on right */}
      <div className="about-content">

        {/* LEFT COLUMN - photo and resume button */}
        <div className="about-left">

          {/* my profile photo - file must be inside the public/ folder */}
          {/* public/ folder files are accessed with "/" directly */}
          <img src="/foto.jpg" alt="Nicolas Ariza" className="profile-photo" />

          {/* link to my PDF resume - also stored in public/ folder */}
          {/* target="_blank" opens it in a new tab */}
          <a href="/CVNicolasAriza.pdf" className="resume-btn" target="_blank">
            Download My Resume
          </a>

        </div>

        {/* RIGHT COLUMN - my personal information */}
        <div className="about-right">

          {/* legal full name - required by the assignment */}
          <h2>Nicolas Andres Ariza Homez</h2>

          {/* my role/title */}
          <p className="role">Software Engineering Student at Centennial College</p>

          {/* short paragraph about who I am */}
          <p className="bio">
            Hi! I am a Software Engineering student in my third semester
            at Centennial College. I enjoy learning how to build websites
            and applications using modern technologies like React and JavaScript.
            I am motivated, eager to learn, and always looking to improve
            my coding skills.
          </p>

          <p className="bio">
            Outside of coding, I enjoy reading, playing soccer and riding
            my bike. I am looking forward to applying my skills in
            real world projects and growing as a developer.
          </p>

        </div>
      </div>
    </div>
  )
}