import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../languageContext.jsx";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const { t } = useLanguage();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.company.value.trim() !== "") {
      setStatus("sent");
      form.current.reset();
      return;
    }

    emailjs.sendForm(
      "service_96fhtaa",
      "template_u6cnmln",
      form.current,
      "_f8iAsdDs2tKQUa35"
    )
    .then(() => {
      setStatus("sent");
      form.current.reset();
    }, (error) => {
      console.error(error.text);
      setStatus("error");
    });
  };

  return (
    <section className="contactSection" id="contact">
      <div className="contactInner">
        <h2>{t("contactTitle")}</h2>
        <p className="contactSubtitle">{t("contactSubtitle")}</p>

        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <div className="contactField">
            <label htmlFor="contactName">{t("labelName")}</label>
            <input
              type="text"
              id="contactName"
              name="name"
              placeholder={t("yourName")}
              autoComplete="name"
              maxLength={80}
              required
            />
          </div>

          <div className="contactField">
            <label htmlFor="contactEmail">{t("labelEmail")}</label>
            <input
              type="email"
              id="contactEmail"
              name="reply_to"
              placeholder={t("yourEmail")}
              autoComplete="email"
              maxLength={120}
              required
            />
          </div>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <div className="contactHoneypot" aria-hidden="true">
            <label htmlFor="contactCompany">Société</label>
            <input
              type="text"
              id="contactCompany"
              name="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="contactField">
            <label htmlFor="contactMessage">{t("labelMessage")}</label>
            <textarea
              id="contactMessage"
              name="message"
              rows="5"
              placeholder={t("yourMessage")}
              maxLength={2000}
              required
            />
          </div>

          <button type="submit">{t("sendMessage")}</button>

          <p className="contactStatus" role="status" aria-live="polite">
            {status === "sent" && (
              <span className="successMsg">{t("messageSent")}</span>
            )}
            {status === "error" && (
              <span className="errorMsg">{t("messageError")}</span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
