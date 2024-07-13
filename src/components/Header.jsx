import React from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Header.css';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="header">
      <div className="logo">Sirius</div>
      <nav className="nav">
        <Link style={{cursor:'pointer'}} to="about" smooth={true} duration={500}>{t('About Us')}</Link>
        <Link style={{cursor:'pointer'}} to="faq" smooth={true} duration={500}>{t('FAQ')}</Link>
        <Link style={{cursor:'pointer'}} to="blog" smooth={true} duration={500}>{t('Blog')}</Link>
        <Link style={{cursor:'pointer'}} to="features" smooth={true} duration={500}>{t('Features')}</Link>
        <LanguageSwitcher />
        <button className="chat">{t("Let's Talk")}</button>
      </nav>
    </header>
  );
};

export default Header;
