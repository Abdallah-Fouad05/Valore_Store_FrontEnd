import React, { useState } from "react";

const faqData = [
  {
    question: "What is Valore's shipping policy?",
    answer:
      "We offer shipping across Egypt and worldwide. Local delivery usually takes 3-5 business days, while international shipping takes 7-14 business days depending on the destination.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order is shipped, you will receive an email with a tracking number. You can use it to track your shipment on the carrier’s website.",
  },
  {
    question: "What is Valore's return and exchange policy?",
    answer:
      "You can return or exchange products within 14 days of receiving your order, provided the items are in their original condition with the price tag attached and unworn.",
  },
  {
    question: "Can I modify my order after placing it?",
    answer:
      "You can modify your order within one hour of placing it. After that, you can only cancel and place a new order.",
  },
  {
    question: "What payment methods are available at Valore?",
    answer:
      "We accept cash on delivery, credit/debit cards, PayPal, and supported e-wallets.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact us via email, phone, or the contact form on the FAQ page. Our team will respond to your inquiry as soon as possible.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container container" style={{ padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center", color: "#38b6ff" }}>F.A.Q</h2>
      <p style={{ textAlign: "center", color: "#666666" }}>
        Please read the questions below. If you cannot find your answer, please
        send us your question and we will respond as soon as possible.
      </p>

      <div className="faq-accordion">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
              style={{
                cursor: "pointer",
                padding: "10px 15px",
                background: "#f5f5f5",
                marginBottom: "5px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{item.question}</span>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>
            {openIndex === index && (
              <div
                className="faq-answer"
                style={{
                  padding: "10px 15px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  marginBottom: "10px",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
