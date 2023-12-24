// components/Footer.js
import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Teams</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/sponsors">Sponsors</a></li>
            <li><a href="/about">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: abhivyakti@iiitn.ac.in</p>
          <p>Phone: +91 9969696969</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected on social media for updates and highlights!</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/examplefest" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com/examplefest" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://www.instagram.com/examplefest" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Abhivyakti@IITN. All rights reserved.</p>
        <p>
          Developed and Managed by
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            __students
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
