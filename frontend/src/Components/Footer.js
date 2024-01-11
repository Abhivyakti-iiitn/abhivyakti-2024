// components/Footer.js
import React from 'react';
import '../css/Footer.css';
import {Link} from "react-router-dom";

const Footer = () => {
  // const navigateTo = useNavigate();
  return (
    <div className="footer">

      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/signup">Register</Link></li>
            <li><Link to="/allevents">Events</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/profile">Profile Page</Link></li>
            <li ><Link to="/termsandconditions">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: abhivyakti@iiitn.ac.in</p>
          <p>Phone: +91 7058449059</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Stay connected on social media for updates and highlights!</p>
          <div className="social-icons">
            <Link to="https://www.linkedin.com/in/abhivyakti-iiitn/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            {/* <Link to="https://twitter.com/examplefest" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square"></i>
            </Link> */}
            <Link to="https://www.instagram.com/abhivyakti_iiitn/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram-square"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Abhivyakti@IITN. All rights reserved.</p>
        <p>
          Developed and Managed by
          <Link to="/students" rel="noopener noreferrer">
            __students
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
