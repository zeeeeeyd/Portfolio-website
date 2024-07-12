import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Sirius</div>
      <nav className="nav">
        <Link style={{cursor:'pointer'}} to="about" smooth={true} duration={500}>About Us</Link>
        <Link style={{cursor:'pointer'}} to="faq" smooth={true} duration={500}>FAQ</Link>
        <Link style={{cursor:'pointer'}} to="blog" smooth={true} duration={500}>Blog</Link>
        <Link style={{cursor:'pointer'}} to="features" smooth={true} duration={500}>Features</Link>
        <button className="chat">Let's Talk</button>
      </nav>
    </header>
  );
};

export default Header;
