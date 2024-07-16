import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Sirius_logo_typo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const navRef = useRef(null);

  const handleClick = () => {
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target) && event.target.className !== 'hamburger' && !event.target.className.includes('hamburger-line')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const generateWhatsAppLink = () => {
    const phoneNumber = '0558776385';
    const message = encodeURIComponent('Hello, I would like to talk about a Service!');
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <header className="header">
      <img onClick={handleClick} className='logo' src={logo} alt="Sirius Logo" />
      <nav ref={navRef} className={`nav ${isOpen ? 'open' : ''}`} style={{ display: isOpen ? 'flex' : '' }}>
        <Link style={{ cursor: 'pointer' }} to="about" smooth={true} duration={500}>{t('About Us')}</Link>
        <Link style={{ cursor: 'pointer' }} to="faq" smooth={true} duration={500}>{t('FAQ')}</Link>
        <Link style={{ cursor: 'pointer' }} to="blog" smooth={true} duration={500}>{t('Blog')}</Link>
        <Link style={{ cursor: 'pointer' }} to="work-experience" smooth={true} duration={500}>{t('Features')}</Link>
        <LanguageSwitcher />
        <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="chat-button">
          <button className="chat">{t("Let's Talk")}</button>
        </a>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
    </header>
  );
};

export default Header;
