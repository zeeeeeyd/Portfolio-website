import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const faqs = [
    {
      question: 'Questions 1',
      answer: 'Response 1',
    },
    {
      question: 'Questions 1',
      answer: 'Response 1',
    },
    {
      question: 'Questions 1',
      answer: 'Response 1',
    },
    {
      question: 'Questions 1',
      answer: 'Response 1',
    },
    {
      question: 'Questions 1',
      answer: 'Response 1',
    },
    {
      question: 'Questions 1',
      answer: 'Response 1',
    },
    {
      question: 'Questions 1',
      answer: 'Response 1',
    },
    {
      question: 'Questions 1',
      answer: 'Response 1',
    },
  ];

  return (
    <div className="faq" id='faq'>
      <h1>Frequently Asked Questions</h1>
      <p>Navigating Common Queries to Ensure a Seamless Experience with Sirius</p>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${selected === index ? 'active' : ''}`}
            key={index}
            onClick={() => toggle(index)}
          >
            <div className={`faq-question ${selected === index ? 'active' : ''}`}>
              <h2>{faq.question}</h2>
              <span>{selected === index ? '-' : '+'}</span>
            </div>
            <div className="faq-answer" style={{ maxHeight: selected === index ? '200px' : '0' }}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
