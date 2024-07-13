import React, { useState } from 'react';
import '../styles/FAQ.css';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const [selected, setSelected] = useState(null);
  const { t } = useTranslation();

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const faqs = [
    {
      question: t("What's Sirius?"),
      answer: t("Sirius is a dynamic team of software developers based in Mostaganem. We specialize in creating innovative mobile and web applications, as well as software solutions using a variety of technologies. We also design intuitive UI/UX interfaces and develop AI-based applications."),
    },
    {
      question: t('Why should I work with Sirius?'),
      answer: t("Working with Sirius means partnering with a team dedicated to transforming your ideas into impactful digital experiences. Our commitment to excellence, innovative approach, and expertise in multiple technologies ensure that we deliver top-notch solutions tailored to your needs."),
    },
    {
      question: t('What services does Sirius provide?'),
      answer: t("Sirius provides a wide range of services, including software development, mobile and web application development, UI/UX design, and AI-based solutions. We are equipped to handle projects of varying complexities and deliver solutions that meet your business requirements."),
    },
    {
      question: t('How can I contact customer support?'),
      answer: t("You can contact our customer support by visiting the Contact Us page on our website or by emailing us at support@sirius.com. We are here to assist you with any queries or support you may need."),
    },
  ];

  return (
    <div className="faq" id='faq'>
      <h1>{t('Frequently Asked Questions')}</h1>
      <p>{t('Navigating Common Queries to Ensure a Seamless Experience with Sirius')}</p>
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
