import React from 'react';
import '../styles/CustomerFeedback.css';

const CustomerFeedback = ({ name, feedback, img }) => {
  return (
    <div className="customer-feedback">
      <img src={img} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{feedback}</p>
    </div>
  );
};

export default CustomerFeedback;
