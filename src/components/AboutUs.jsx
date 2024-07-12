import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import '../styles/AboutUs.css';
import about from '../assets/555.png';
import immg from '../assets/666.png';

const AboutUs = () => {
  const [showStory, setShowStory] = useState(false);

  const handleReadStory = () => {
    setShowStory(!showStory);
  };

  return (
    <section className="about-us" id="about">
      {showStory ? (
        <div className={`story-content ${showStory ? 'show' : ''}`}>
          <h2>Our Story</h2>
          <div className='content-story-container'>
            <p>
              "Welcome to Sirius, where innovation meets usability. We specialize in crafting cutting-edge software solutions, developing dynamic web and mobile applications, and designing intuitive user interfaces. Our mission is to transform ideas into impactful digital experiences that resonate with users worldwide. With a passion for technology and a commitment to excellence, we are your trusted partner in navigating the digital landscape.<br/>Let's build the future together."
            </p>
            <img src={immg} alt="" />
          </div>
        </div>
      ) : (
        <>
          <img src={about} alt="About Us" />
          <h2>Innovation and Passion in Product Design</h2>
          <p>Guiding You Through Our Journey and Creative Evolution</p>
        </>
      )}
      <button className="read-story" onClick={handleReadStory}>
        {showStory ? 'Hide Story' : 'Read Our Story'}{' '}
        {showStory ? <FaArrowLeft className="icon" /> : <FaArrowRight className="icon" />}
      </button>
    </section>
  );
};

export default AboutUs;
