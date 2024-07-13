import React from 'react';
import { FaPlay } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import CustomerReviews from '../components/CustomerReviews';
import hero from '../assets/333.png';
import '../styles/MainLayout.css';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer ';
import WorkExperience from '../components/WorkExperience ';

const MainLayout = () => {

  const { t } = useTranslation();

  const handleClickFeatures = () => {
    window.scrollTo({ top: document.querySelector('.work-experience').offsetTop, behavior:'smooth' });
  };

  const handleClickStart = () => {
    window.scrollTo({ top: document.querySelector('.get-started').offsetTop, behavior:'smooth' });
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero">
          <div className='hero-content'>
            <motion.button 
              className='mission-button'
              whileHover={{ scale: 1.1 }}
            >
              <FaPlay className='icon' /> {t('Find out our missions!')}
            </motion.button>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {t('Your')} <span>{t('Trusted')}</span> {t('Partner in Digital Innovation.')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {t('We blend creativity with cutting-edge technology to craft customized solutions that meet the unique needs of modern businesses. Partner with us to bring your vision to life and stay ahead in the digital landscape.')}
            </motion.p>
            <div className="hero-buttons">
              <motion.button 
                className="get-started" 
                onClick={handleClickStart}
                whileHover={{ scale: 1.1 }}
              >
                {t('Get Started')}
              </motion.button>
              <motion.button 
                className="watch-features" 
                onClick={handleClickFeatures}
                whileHover={{ scale: 1.1 }}
              >
                {t('Watch Our Features')}
              </motion.button>
            </div>
          </div>
          <motion.img 
            src={hero} 
            alt="Hero" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </section>
        <section id="about">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <AboutUs />
          </motion.div>
        </section>
        <section id="customer-reviews">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <CustomerReviews />
          </motion.div>
        </section>
        <section id="features" className="work-experience">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <WorkExperience />
          </motion.div>
        </section>
        <section id="faq">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FAQ />
          </motion.div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;
