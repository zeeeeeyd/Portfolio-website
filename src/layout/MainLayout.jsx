import React, { useEffect } from 'react';
import { FaPlay } from 'react-icons/fa'; 
import { motion, useMotionTemplate, useMotionValue, animate, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useTranslation } from 'react-i18next';
import '../styles/MainLayout.css';
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';
import WorkExperience from '../components/WorkExperience '
import CustomerReviews from '../components/CustomerReviews'
import Footer from '../components/Footer '

const COLORS_TOP = ["#3572EF", "#3ABEF9", "#615EFC"];

const MainLayout = () => {
  const { t } = useTranslation();
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  const handleClickFeatures = () => {
    window.scrollTo({ top: document.querySelector('.work-experience').offsetTop, behavior: 'smooth' });
  };

  const handleClickStart = () => {
    window.scrollTo({ top: document.querySelector('.get-started').offsetTop, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <motion.section
          style={{ backgroundImage }}
          className="hero"
        >
           <div className="canvas-container">
            <Canvas>
              <Stars radius={50} count={2500} factor={4} fade speed={2} />
            </Canvas>
          </div>
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
              {t('Your')} <motion.span style={{ color }}>{t('Trusted')}</motion.span> {t('Partner in Digital Innovation.')}
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
                style={{backgroundColor :color}}
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
        </motion.section>
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
        <section id="work-experience" className="work-experience">
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
