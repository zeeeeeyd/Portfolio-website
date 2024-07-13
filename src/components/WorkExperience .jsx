import React from 'react';
import '../styles/WorkExperience.css';
import savdoImg from '../assets/999.jpg';
import careServiceImg from '../assets/777.png';
import marketAnalysisImg from '../assets/888.jpg';
import campaignManagementImg from '../assets/100.jpg';
import { useTranslation } from 'react-i18next';

const WorkExperience = () => {
  const { t } = useTranslation();

  const workItems = [
    {
      title: t('UI/UX Service'),
      image: savdoImg,
      description: t('Creating user-friendly interfaces and experiences.'),
      link: '#'
    },
    {
      title: t('Software Dev'),
      image: careServiceImg,
      description: t('Developing robust software solutions.'),
      link: '#'
    },
    {
      title: t('AI Based Solutions'),
      image: marketAnalysisImg,
      description: t('Leveraging AI for innovative solutions.'),
      link: '#'
    },
    {
      title: t('Social Media Ads'),
      image: campaignManagementImg,
      description: t('Managing and optimizing social media campaigns.'),
      link: '#'
    },
  ];

  return (
    <section className="work-experience" id="features">
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
              <h3>{workItems[0].title}</h3>
              <p>{workItems[0].description}</p>
              <button href={workItems[0].link} className="explore-button">{t('Explore more')}</button>
            </div>
          </div>
        </div>
        <div className="work-column center">
          <div className="work-item">
            <img src={workItems[1].image} alt={workItems[1].title} />
            <h3>{workItems[1].title}</h3>
            <div className="work-item-content">
              <h3>{workItems[1].title}</h3>
              <p>{workItems[1].description}</p>
              <button href={workItems[1].link} className="explore-button">{t('Explore more')}</button>
            </div>
          </div>
          <div className="work-item">
            <img src={workItems[2].image} alt={workItems[2].title} />
            <h3>{workItems[2].title}</h3>
            <div className="work-item-content">
              <h3>{workItems[2].title}</h3>
              <p>{workItems[2].description}</p>
              <button href={workItems[2].link} className="explore-button">{t('Explore more')}</button>
            </div>
          </div>
        </div>
        <div className="work-column right">
          <div className="work-item">
            <img src={workItems[3].image} alt={workItems[3].title} />
            <h3>{workItems[3].title}</h3>
            <div className="work-item-content">
              <h3>{workItems[3].title}</h3>
              <p>{workItems[3].description}</p>
              <button href={workItems[3].link} className="explore-button">{t('Explore more')}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
