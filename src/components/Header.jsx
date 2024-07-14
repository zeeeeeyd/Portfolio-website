import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick = () => {
    navigate('/');
  }

  const toggleMenu = () => {
    console.log('Toggle menu called');
    setIsOpen(!isOpen);
    console.log('isOpen:', !isOpen);
  }

  return (
    <header className="header">
      <button onClick={handleClick} className="logo">Sirius</button>
      <nav className={`nav ${isOpen ? 'open' : ''}`} style={{ display: isOpen ? 'flex' : '' }}>
        <Link style={{ cursor: 'pointer' }} to="about" smooth={true} duration={500}>{t('About Us')}</Link>
        <Link style={{ cursor: 'pointer' }} to="faq" smooth={true} duration={500}>{t('FAQ')}</Link>
        <Link style={{ cursor: 'pointer' }} to="blog" smooth={true} duration={500}>{t('Blog')}</Link>
        <Link style={{ cursor: 'pointer' }} to="features" smooth={true} duration={500}>{t('Features')}</Link>
        <LanguageSwitcher />
        <button className="chat">{t("Let's Talk")}</button>
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