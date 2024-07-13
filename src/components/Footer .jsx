import React from 'react';
import '../styles/Footer.css';
import { FaLinkedin, FaXing, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>{t("Let's Stay connected")}</h2>
        <div className="footer-buttons">
          <button className="get-in-touch">{t('Get in Touch')}</button>
          <button className="view-work">{t('View Work')}</button>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-logo">Sirius</h3>
          <p>{t("Join Our Sirius Community and Unlock Your Brand's Potential")}</p>
          <div className="footer-social">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaXing /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>{t('Solutions')}</h3>
          <ul>
            <li><a href="#">{t('eCommerce')}</a></li>
            <li><a href="#">{t('Software Solutions')}</a></li>
            <li><a href="#">{t('UI/UX')}</a></li>
            <li><a href="#">{t('AI Based Solution')}</a></li>
            <li><a href="#">{t('Social Media Ads')}</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t('Resources')}</h3>
          <ul>
            <li><a href="#">{t('Tutorials')}</a></li>
            <li><a href="#">{t('Blogs')}</a></li>
            <li><a href="#">{t('Community')}</a></li>
            <li><a href="#">{t('Privacy Policy')}</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t('About')}</h3>
          <ul>
            <li><a href="#">{t('Company')}</a></li>
            <li><a href="#">{t('Careers')}</a></li>
            <li><a href="#">{t('FAQ')}</a></li>
            <li><a href="#">{t('Contact Us')}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <ul>
          <li><a href="#">{t('Privacy Policy')}</a></li>
          <li><a href="#">{t('Cookies')}</a></li>
          <li><a href="#">{t('Security')}</a></li>
          <li><a href="#">{t('Legal Document')}</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
