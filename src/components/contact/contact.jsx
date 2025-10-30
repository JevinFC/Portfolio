import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../languageContext.jsx";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_96fhtaa",      // à remplacer
      "template_u6cnmln",     // à remplacer
      form.current,
      "_f8iAsdDs2tKQUa35"       // à remplacer
    )
    .then(() => {
      setSent(true);
      form.current.reset();
    }, (error) => {
      console.error(error.text);
    });
  };

  return (
    <section className="contactSection" id="contact">
      <h2>{t("contactTitle")}</h2>
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input type="text" name="name" placeholder={t("yourName")} required />
        {/* facultatif : email de l'expéditeur */}
        <input type="email" name="reply_to" placeholder={t("yourEmail")} required />
        {/* on remplit automatiquement le champ time */}
        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <textarea name="message" placeholder={t("yourMessage")} required />
        <button type="submit">{t("sendMessage")}</button>
        {sent && <p className="successMsg">{t("messageSent")}</p>}
      </form>
    </section>
  );
}

export default Contact;