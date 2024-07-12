import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaXing, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Let's Stay connected</h2>
        <div className="footer-buttons">
          <button className="get-in-touch">Get in Touch</button>
          <button className="view-work">View Work</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Sirius</h3>
          <p>Join Our Sirius Community and Unlock Your Brand's Potential</p>
          <div className="footer-social">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaXing /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Solutions</h3>
          <ul>
            <li><a href="#">eCommerce</a></li>
            <li><a href="#">Software Solutions</a></li>
            <li><a href="#">UI/UX</a></li>
            <li><a href="#">AI Based Solution</a></li>
            <li><a href="#">Social Media Ads</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Legal Document</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
