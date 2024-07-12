import React from 'react';
import { FaPlay } from 'react-icons/fa'; 
import Header from '../components/Header';
import AboutUs from '../components/AboutUs';
import CustomerReviews from '../components/CustomerReviews';
import hero from '../assets/333.png';
import '../styles/MainLayout.css';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer ';
import WorkExperience from '../components/WorkExperience ';

const MainLayout = () => {

  const handleClickFeatures = () => {
    window.scrollTo({ top: document.querySelector('.work-experience').offsetTop, behavior:'smooth' });
  };

  const handleClickStart = () =>{
    window.scrollTo({ top: document.querySelector('.get-started').offsetTop, behavior:'smooth' });
  }
  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero">
          <div className='hero-content'>
            <button className='mission-button'>
              <FaPlay className='icon' /> Find out our missions!
            </button>
            <h1>Your <span>Trusted</span> Partner in Digital Innovation.</h1>
            <p>We blend creativity with cutting-edge technology to craft customized solutions that meet the unique needs of modern businesses. Partner with us to bring your vision to life and stay ahead in the digital landscape.</p>
            <div className="hero-buttons">
              <button className="get-started" onClick={handleClickStart}>Get Started</button>
              <button className="watch-features" onClick={handleClickFeatures}>Watch Our Features</button>
            </div>
          </div>
          <img src={hero} alt="Hero" />
        </section>
        <section id="about"><AboutUs /></section>
        <section id="customer-reviews"><CustomerReviews /></section>
        <section id="features"><WorkExperience /></section>
        <section id="faq"><FAQ /></section>
        <Footer />
      </main>
    </div>
  );
}

export default MainLayout;
