import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../languageContext";
import "./faq.scss";

function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    // met à jour max-height dynamiquement pour l'animation
    answerRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.maxHeight = openIndex === idx ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <section className="faqSection" id="faq">
      <h2 className="faqTitle">{t("faqTitle")}</h2>
      <div className="faqContainer">
        {t("faq").map((item, index) => (
          <div
            key={index}
            className={`faqItem ${openIndex === index ? "open" : ""}`}
          >
            <button className="faqQuestion" onClick={() => toggle(index)}>
              {item.question}
              <span className="arrow">{openIndex === index ? "▲" : "▼"}</span>
            </button>
            <div
              className="faqAnswer"
              ref={(el) => (answerRefs.current[index] = el)}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
