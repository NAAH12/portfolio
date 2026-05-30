// Home.jsx - this is the first page users see when they visit "/"

// need this to use JSX syntax
import React from 'react';

// Link lets me navigate between pages without reloading - like <a> but for React
import { Link } from 'react-router-dom';

// bringing in the styles for this page
import './Home.css';

// export default so other files can import this component
// the function name matches the file name - good practice
export default function Home() {

  // everything inside return() is what shows up on screen
  // this is JSX - looks like HTML but it's actually JavaScript
  return (

    // in React we use className instead of class
    // because "class" is already a JavaScript keyword
    <div className="home">

      {/* main title - span gives a different color to my name */}
      <h1>Hi, I'm <span>Nicolas Ariza</span> 👋</h1>

      {/* subtitle - smaller and lighter than h1 */}
      <h2>Software Engineering Student at Centennial College</h2>

      {/* mission statement - who I am and what I want to do */}
      <p className="mission">
        I'm a passionate Software Engineering student learning to build
        modern websites and applications. My goal is to create clean,
        functional, and user-friendly digital experiences that make
        a real impact.
      </p>

      {/* buttons container - holds both navigation buttons */}
      <div className="home-buttons">

        {/* to="/about" takes the user to the About page - no page reload */}
        <Link to="/about" className="btn-main">About Me</Link>

        {/* takes the user to the Projects page */}
        <Link to="/project" className="btn-outline">My Projects</Link>

      </div>

    </div>
  )
}