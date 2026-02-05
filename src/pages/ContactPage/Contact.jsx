import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <p className="contact-label">~ CONTACT ME</p>

        <h2 className="contact-email">dhdbswl08@naver.com</h2>

        <div className="contact-info">
          <p>Tell: 010.2311.2560</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/yunjoh"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/yunjoh
            </a>
          </p>
        </div>
      </div>

      <div className="contact-bottom">
        <h1 className="brand-title">YUNJI DE-CODER®</h1>
        <span className="copyright">Copyright © Oh Yunji 2026</span>
      </div>
    </section>
  );
};

export default Contact;
