import { useState, useRef, useEffect } from "react";
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
    answerRefs.current.forEach((ref, idx) => {
      if (ref) {
        ref.style.maxHeight = openIndex === idx ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <section className="faqSection" id="faq" aria-labelledby="faqTitle">
      <h2 className="faqTitle" id="faqTitle">{t("faqTitle")}</h2>
      <div className="faqContainer"> 
        {t("faq").map((item, index) => (
          <div
            key={index}
            className={`faqItem ${openIndex === index ? "open" : ""}`}
          >
            <button
              type="button"
              className="faqQuestion"
              onClick={() => toggle(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faqAnswer-${index}`}
            >
              <span className="faqQuestionText">{item.question}</span>
              <span className="arrow" aria-hidden="true">
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            <div
              className="faqAnswer"
              id={`faqAnswer-${index}`}
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
