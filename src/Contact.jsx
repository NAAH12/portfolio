// Contact.jsx - contact page with my info and a form
// requirement: contact info panel + form that redirects to Home on submit

import React from 'react';

// useState - a React hook that lets me save and update data inside a component
// think of it like a variable that React watches - when it changes, the screen updates
import { useState } from 'react';

// useNavigate - a React Router hook that lets me redirect to another page from code
// without this I would have to click a link manually
import { useNavigate } from 'react-router-dom';
import './Contact.css';

export default function Contact() {

  // useNavigate gives me a function called "navigate"
  // I can call navigate('/') anywhere in the code to go to Home
  const navigate = useNavigate();

  // useState creates two things:
  // 1. "formData" - the variable that stores all form values
  // 2. "setFormData" - the function I use to UPDATE those values
  // the object inside useState() is the STARTING value - all empty strings
  const [formData, setFormData] = useState({
    firstName: '',  // will store what user types in First Name field
    lastName: '',   // will store what user types in Last Name field
    phone: '',      // will store phone number
    email: '',      // will store email
    message: ''     // will store the message
  });

  // handleChange runs EVERY TIME the user types a letter in any field
  // "e" is the event - it contains info about what just happened
  // e.target.name = the "name" attribute of the input (firstName, email, etc)
  // e.target.value = what the user just typed
  const handleChange = (e) => {
    // ...formData copies ALL existing values first (spread operator)
    // then [e.target.name]: e.target.value updates ONLY the field that changed
    // example: user types "N" in firstName → formData.firstName becomes "N"
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handleSubmit runs when user clicks the "Send Message" button
  // "e" is the submit event
  const handleSubmit = (e) => {
    // without this line, the browser would reload the page automatically
    // that's default HTML form behavior - we want to stop it
    e.preventDefault();

    // console.log prints the form data in the browser DevTools console
    // press F12 in browser → Console tab to see it
    console.log('Form submitted:', formData);

    // shows a popup message to the user
    alert('Message sent! Redirecting to Home...');

    // redirects to Home page - this is required by the assignment
    navigate('/');
  };

  return (
    <div className="contact">

      <h1>Contact <span>Me</span></h1>
      <p className="subtitle">Feel free to reach out!</p>

      <div className="contact-content">

        {/* LEFT - contact information panel */}
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <div className="info-item">
            <span>📧</span>
            <div>
              <p className="info-label">Email</p>
              <p className="info-value">nicolasariza@email.com</p>
            </div>
          </div>

          <div className="info-item">
            <span>📱</span>
            <div>
              <p className="info-label">Phone</p>
              <p className="info-value">+1 (416) 000-0000</p>
            </div>
          </div>

          <div className="info-item">
            <span>📍</span>
            <div>
              <p className="info-label">Location</p>
              <p className="info-value">Toronto, ON, Canada</p>
            </div>
          </div>

          <div className="info-item">
            <span>💼</span>
            <div>
              <p className="info-label">LinkedIn</p>
              <p className="info-value">linkedin.com/in/nicolasariza</p>
            </div>
          </div>
        </div>

        {/* RIGHT - the actual form */}
        {/* onSubmit connects the form to my handleSubmit function */}
        {/* when user clicks the button, handleSubmit runs automatically */}
        <form className="contact-form" onSubmit={handleSubmit}>

          {/* first row - two fields side by side */}
          <div className="form-row">

            <div className="form-group">
              <label>First Name</label>
              {/* type="text" = normal text input */}
              {/* name="firstName" must match the key in formData object */}
              {/* value={formData.firstName} shows the current saved value */}
              {/* onChange={handleChange} calls handleChange every time user types */}
              {/* required = browser won't submit if this is empty */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Nicolas"
                required
              />
            </div>

            <div className="form-group">
              <label>Last Name</label>
              {/* same pattern as firstName - just different name attribute */}
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Ariza"
                required
              />
            </div>
          </div>

          {/* phone field - type="tel" shows number keyboard on mobile */}
          <div className="form-group">
            <label>Contact Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (416) 000-0000"
            />
          </div>

          {/* email field - type="email" validates email format automatically */}
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nicolas@email.com"
              required
            />
          </div>

          {/* textarea is like input but for longer text - multiple lines */}
          {/* rows="5" sets the default height of the textarea */}
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="5"
              required
            />
          </div>

          {/* type="submit" connects this button to the form's onSubmit */}
          {/* clicking this button triggers handleSubmit automatically */}
          <button type="submit" className="submit-btn">
            Send Message
          </button>

        </form>
      </div>
    </div>
  )
}