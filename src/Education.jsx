// Education.jsx - shows my academic history
// requirement: dates, years and degrees obtained

import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <div className="education">

      {/* page title */}
      <h1>My <span>Education</span></h1>
      <p className="subtitle">My academic journey so far</p>

      {/* timeline - most recent at the top */}
      <div className="timeline">

        {/* MOST RECENT - Centennial College */}
        <div className="timeline-item">
          <div className="dot"></div>
          <div className="timeline-card">
            <span className="date">2026 – Present (Graduating 2027)</span>
            <h3>Software Engineering Diploma</h3>
            <p className="school">Centennial College – Toronto, ON, Canada</p>
            <p className="desc">
              Currently in third semester studying web development,
              databases, and software design. Courses include Web
              Application Development, Object-Oriented Programming,
              and Database Management.
            </p>
          </div>
        </div>

        {/* Coursera */}
        <div className="timeline-item">
          <div className="dot"></div>
          <div className="timeline-card">
            <span className="date">2026 – Present</span>
            <h3>AI Fundamentals Certificate</h3>
            <p className="school">Coursera – Online</p>
            <p className="desc">
              Completed a basic level Artificial Intelligence certificate.
              Currently working on additional certifications to expand
              my technical knowledge.
            </p>
          </div>
        </div>

        {/* Upper Madison College */}
        <div className="timeline-item">
          <div className="dot"></div>
          <div className="timeline-card">
            <span className="date">2025</span>
            <h3>English as a Second Language (ESL & EAP)</h3>
            <p className="school">Upper Madison College – Toronto, ON, Canada</p>
            <p className="desc">
              Completed English language training including Academic
              English Preparation (EAP) to meet college admission
              requirements in Canada.
            </p>
          </div>
        </div>

        {/* TOEFL */}
        <div className="timeline-item">
          <div className="dot"></div>
          <div className="timeline-card">
            <span className="date">May 2024</span>
            <h3>TOEFL iBT – Score 80/120</h3>
            <p className="school">ETS – English Proficiency Exam</p>
            <p className="desc">
              Achieved a score of 80 out of 120 on the TOEFL iBT,
              demonstrating English proficiency in reading, listening,
              speaking, and writing.
            </p>
          </div>
        </div>

        {/* OLDEST - High School */}
        <div className="timeline-item">
          <div className="dot"></div>
          <div className="timeline-card">
            <span className="date">Graduated December 2023</span>
            <h3>High School Diploma (Bachillerato)</h3>
            <p className="school">Agustiniano Salitre – Bogotá, Colombia</p>
            <p className="desc">
              Completed secondary education with focus on mathematics
              and sciences. Graduated in December 2023 before
              relocating to Canada to continue my studies.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}