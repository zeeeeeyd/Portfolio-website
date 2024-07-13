import React from 'react';
import CustomerFeedback from './CustomerFeedback';
import michael from '../assets/pic1.jpg';
import sarah from '../assets/sarah.jpg';
import emily from '../assets/emily.jpg';
import david from '../assets/david.jpg';
import { useTranslation } from 'react-i18next';
import '../styles/CustomerReviews.css';

const reviews = [
  { name: 'Sarah Parker', feedback: 'Working with Sirius has been a game-changer for our business. Their team brought our vision to life with a stunning web application that exceeded our expectations.', img: sarah },
  { name: 'Michael Johnson', feedback: 'We partnered with Sirius for our software development needs, and they delivered beyond our expectations.', img: michael },
  { name: 'Emily Chen', feedback: 'Their team\'s dedication to delivering top-notch solutions has helped us achieve our business goals and stay ahead in the competitive market.', img: emily },
  { name: 'David Thompson', feedback: 'The design solutions provided by Sirius have significantly enhanced our brand\'s online presence.', img: david }
];

const CustomerReviews = () => {
  const { t } = useTranslation();
  
  return (
    <section className="customer-reviews">
      <div className='customer-reviews-content'>
        <h2>{t('Hear! What Our Customers Have to Say')}</h2>
        <button className="more-reviews">{t('See More Reviews')}</button>
      </div>
      <div className="reviews">
        {reviews.map((review, index) => (
          <CustomerFeedback 
            key={index}
            name={review.name}
            feedback={review.feedback}
            img={review.img}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
