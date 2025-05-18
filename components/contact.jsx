import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/ContactSection.css";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p26dxf4",     // Replace with your EmailJS service ID
        "template_8yk76hu",    // Replace with your template ID
        form.current,
        "Ug2MicPvzqxaOaDOZ"      // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <p>Feel free to drop a message below!</p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
