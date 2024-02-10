import React, { useEffect } from "react";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <div className="contactForm">
      <p style={{ fontSize: "2rem", paddingTop: "1rem", paddingLeft: "1rem" }}>
        Get in touch. Feel free to contact me if you have any questions!
      </p>
      <p style={{ fontSize: "1.2rem", paddingLeft: "2rem" }}>
        Email: boyofpopsicle@gmail.com
      </p>
      <p style={{ fontSize: "1.2rem", paddingLeft: "2rem" }}>
        Phone: 703-472-8000
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
