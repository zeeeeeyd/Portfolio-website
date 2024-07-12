import React from 'react';
import CustomerFeedback from './CustomerFeedback';
import '../styles/CustomerReviews.css';

const reviews = [
  { name: 'Sarah Parker', feedback: 'Working with Sirius has been a game-changer for our business. Their team brought our vision to life with a stunning web application that exceeded our expectations.', img: 'sarah.png' },
  { name: 'Michael Johnson', feedback: 'We partnered with Sirius for our software development needs, and they delivered beyond our expectations.', img: 'michael.png' },
  { name: 'Emily Chen', feedback: 'Their team\'s dedication to delivering top-notch solutions has helped us achieve our business goals and stay ahead in the competitive market.', img: 'emily.png' },
  { name: 'David Thompson', feedback: 'The design solutions provided by Sirius have significantly enhanced our brand\'s online presence.', img: 'david.png' }
];

const CustomerReviews = () => {
  return (
    <section className="customer-reviews">
      <div className='customer-reviews-content'>
        <h2>Hear! What Our Customers Have to Say</h2>
        <button className="more-reviews">See More Reviews</button>
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
