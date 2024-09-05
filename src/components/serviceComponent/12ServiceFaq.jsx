"use client";
import { useState } from "react";
import accordionData from "../../utils/accordionData"; // Import the data
const AccordionItem = ({ id, title, content, isOpen, onClick }) => (
  <div className={`accordionNew ${isOpen ? "active" : ""}`}>
    <div
      onClick={onClick}
      style={{ cursor: "pointer", fontWeight: "bold" }}
      className="according-heading"
    >
       {title} <span>{isOpen ? "-" : "+"}</span>
    </div>
    {isOpen && <div className="accContentMain">{content}</div>}
  </div>
);

const ServiceFaq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set the first accordion to be open by default

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="webguruz-Faq pb-5">
      <div className="container">
        <div className="row heading-main text-center">
          <h3 className="Faq-heading">FAQs</h3>
        </div>
        <div className="row">
          <div className="faq-content">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceFaq;
