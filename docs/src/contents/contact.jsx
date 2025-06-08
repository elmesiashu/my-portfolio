import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3kzt4of',
      'template_t1bpr5k',
      form.current,
      'tkPbDRnMGFT4ye8Zw'
    ).then((result) => {
      console.log(result.text);
      setSent(true);
      e.target.reset();
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-row">
          <input type="text" name="user_name" placeholder="Full Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
        </div>
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">SEND</button>
        {sent && <p className="success-message">Thank you — your message was sent!</p>}
      </form>
    </section>
  );
}
