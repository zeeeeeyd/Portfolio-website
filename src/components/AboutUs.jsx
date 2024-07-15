import React, { useState , useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion , useMotionValue, animate } from 'framer-motion';
import '../styles/AboutUs.css';
import { useTranslation } from 'react-i18next';
import about from '../assets/555.png';
import immg from '../assets/666.png';

const COLORS_TOP = ["#3572EF", "#3ABEF9", "#615EFC"];

const AboutUs = () => {

  const color = useMotionValue(COLORS_TOP[0]);
  const [showStory, setShowStory] = useState(false);
  const { t } = useTranslation();

  const handleReadStory = () => {
    setShowStory(!showStory);
  };

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <section className="about-us" id="about">
      {showStory ? (
        <div className={`story-content ${showStory ? 'show' : ''}`}>
          <h2>{t('Our Story')}</h2>
          <div className='content-story-container'>
            <p>
              {t("Welcome to Sirius, where innovation meets usability. We specialize in crafting cutting-edge software solutions, developing dynamic web and mobile applications, and designing intuitive user interfaces. Our mission is to transform ideas into impactful digital experiences that resonate with users worldwide. With a passion for technology and a commitment to excellence, we are your trusted partner in navigating the digital landscape.Let's build the future together.")}
            </p>
            <img src={immg} alt="" />
          </div>
        </div>
      ) : (
        <>
          <img src={about} alt="About Us" />
          <h2>{t('Innovation and Passion in Product Design')}</h2>
          <p>{t('Guiding You Through Our Journey and Creative Evolution')}</p>
        </>
      )}
      <motion.button className="read-story" onClick={handleReadStory} style={{ backgroundColor: color }}>
        {showStory ? t('Hide Story') : t('Read Our Story')}{' '}
        {showStory ? <FaArrowLeft className="icon" /> : <FaArrowRight className="icon" />}
      </motion.button>
    </section>
  );
};

export default AboutUs;
