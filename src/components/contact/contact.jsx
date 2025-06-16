import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

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
      <h2>Me contacter</h2>
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input type="text" name="name" placeholder="Nom" required />
        {/* facultatif : email de l'expéditeur */}
        <input type="email" name="reply_to" placeholder="Email" required />
        {/* on remplit automatiquement le champ time */}
        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <textarea name="message" placeholder="Votre message..." required />
        <button type="submit">Envoyer</button>
        {sent && <p className="successMsg">Message envoyé avec succès !</p>}
      </form>
    </section>
  );
}

export default Contact;