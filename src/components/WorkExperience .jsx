import React, { useEffect } from 'react';
import '../styles/WorkExperience.css';
import savdoImg from '../assets/999.jpg';
import careServiceImg from '../assets/777.png';
import marketAnalysisImg from '../assets/888.jpg';
import campaignManagementImg from '../assets/100.jpg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'; 
import { motion, useMotionTemplate, useMotionValue, animate, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const COLORS_TOP = ["#3572EF", "#3ABEF9", "#615EFC"];

const WorkExperience = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #020617 50%, ${color})`;


  const handleUiuxClick = () => {
    navigate('/UI-UX');
  };

  const handleSoftwareDevClick = () => {
    navigate('/software-development');
  };

  const handleAIBasedSolutionsClick = () => {
    navigate('/ai-based-solutions');
  };

  const handleSocialMediaAdsClick = () => {
    navigate('/social-media-ads');
  };

  const workItems = [
    {
      title: t('UI/UX Service'),
      image: savdoImg,
      description: t('Creating user-friendly interfaces and experiences.'),
      link: '#',
      onClick: handleUiuxClick 
    },
    {
      title: t('Software Dev'),
      image: careServiceImg,
      description: t('Developing robust software solutions.'),
      link: '#',
      onClick: handleSoftwareDevClick
    },
    {
      title: t('AI Based Solutions'),
      image: marketAnalysisImg,
      description: t('Leveraging AI for innovative solutions.'),
      link: '#',
      onClick: handleAIBasedSolutionsClick 
    },
    {
      title: t('Social Media Ads'),
      image: campaignManagementImg,
      description: t('Managing and optimizing social media campaigns.'),
      link: '#',
      onClick: handleSocialMediaAdsClick 
    },
  ];

  return (
    <motion.section
          style={{ backgroundImage}}
          className="work-experience"
          // id="work-experience"
    >
      <div className="work-header">
        <h2>{t('Our Work Experience')}</h2>
        <p>{t('Journey Through Development : Unveiling Our Work Experience. A Comprehensive Exploration of our dev Journey and Professional Evolution.')}</p>
      </div>
      <div className="work-grid">
        <div className="work-column left">
          <div className="work-item">
            <img src={workItems[0].image} alt={workItems[0].title} />
            <h3>{workItems[0].title}</h3>
            <div className="work-item-content">
              <p>{workItems[0].description}</p>
              <button onClick={workItems[0].onClick} className="explore-button">{t('Explore more')}</button>
            </div>
          </div>
        </div>
        <div className="work-column center">
          <div className="work-item">
            <img src={workItems[1].image} alt={workItems[1].title} />
            <h3>{workItems[1].title}</h3>
            <div className="work-item-content">
              <p>{workItems[1].description}</p>
              <button onClick={workItems[1].onClick} className="explore-button">{t('Explore more')}</button>
            </div>
          </div>
          <div className="work-item">
            <img src={workItems[2].image} alt={workItems[2].title} />
            <h3>{workItems[2].title}</h3>
            <div className="work-item-content">
              <p>{workItems[2].description}</p>
              <button onClick={workItems[2].onClick} className="explore-button">{t('Explore more')}</button>
            </div>
          </div>
        </div>
        <div className="work-column right">
          <div className="work-item">
            <img src={workItems[3].image} alt={workItems[3].title} />
            <h3>{workItems[3].title}</h3>
            <div className="work-item-content">
              <p>{workItems[3].description}</p>
              <button disabled onClick={workItems[3].onClick} className="explore-button">{t('Explore more')}</button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
