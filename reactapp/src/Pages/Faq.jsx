import React, { useState } from 'react';
import '../Assets/Faq.css'; // Include your CSS file for styling

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How do I place an order?',
      answer:
        'To place an order, simply browse our website or mobile app, select the products you want to purchase, add them to your cart, and proceed to checkout. Follow the on-screen instructions to complete your order.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can contact our customer support team by emailing woodenarts@gmail.com.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        'Yes, we offer refunds within 30 days of purchase. Please visit our Refund Policy page for more details.',
    },
    {
      question: 'Is hhere any limitation on the quantity?',
      answer:
        'The quantity that you can buy is depending on the available stock of the online purchase.',
    },
    {
      question: 'What if I receive damaged or incorrect items?',
      answer:
        'If you receive damaged or incorrect items, please contact our customer support team immediately. We will arrange for a replacement or refund as per our policies.',
    },
  ];

  const defaultQuestion = '';
  const defaultAnswer = 'Please select a question to view the answer.';

  return (
    <div className='faq'>
      <h1>Frequently Asked Questions</h1>

      {faqData.map((item, index) => (
        <div className='faq-section' key={index}>
          <h2 onClick={() => toggleAnswer(index)} className={activeIndex === index ? 'active' : ''}>
            {item.question}
          </h2>
          {activeIndex === index && <p>{item.answer}</p>}
        </div>
      ))}

      <div className='faq-section'>
        <h2 onClick={() => setActiveIndex(null)} className={activeIndex === null ? 'active' : ''}>
          {defaultQuestion}
        </h2>
        {activeIndex === null && <p>{defaultAnswer}</p>}
      </div>
    </div>
  );
}

export default Faq;
