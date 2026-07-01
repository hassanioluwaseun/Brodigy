import { useState } from "react";
import "../styles/Contact.css";

import {
  FaXTwitter,
  FaFacebookF,
  FaTiktok,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

import { MdEmail } from "react-icons/md";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // show success message
    setSent(true);

    // auto hide after 5 seconds (optional)
    setTimeout(() => {
      setSent(false);
    }, 5000);
  };

  return (
    <section className="contact-page">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="contact-row">

              <div className="input-group">
                <label>Name</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" />
              </div>

            </div>

            <div className="input-group message-group">
              <label>Message</label>
              <textarea rows="8"></textarea>
            </div>

            <button type="submit" className="contact-btn">
              SEND MESSAGE
            </button>

          </form>

          {/* SUCCESS MESSAGE */}
          {sent && (
            <div className="contact-success">
              Thank you for leaving us a message. You can follow up with us on WhatsApp.
            </div>
          )}

        </div>

        {/* Divider */}
        <div className="contact-divider"></div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          <a href="https://x.com/brodigyofficial" className="social-item">
            <div className="social-icon"><FaXTwitter /></div>
            <span>@brodigyofficial</span>
          </a>

          <a href="#" className="social-item">
            <div className="social-icon"><FaFacebookF /></div>
            <span>brodigyofficial</span>
          </a>

          <a href="#" className="social-item">
            <div className="social-icon"><FaTiktok /></div>
            <span>@brodigyofficial</span>
          </a>

          <a href="#" className="social-item">
            <div className="social-icon"><FaInstagram /></div>
            <span>@brodigyofficial</span>
          </a>

          <a href="#" className="social-item">
            <div className="social-icon"><FaLinkedinIn /></div>
            <span>brodigyofficial</span>
          </a>

          <a href="https://wa.me/2348080003123" className="social-item">
            <div className="social-icon"><FaWhatsapp /></div>
            <span>WhatsApp</span>
          </a>

          <a href="mailto:brodigyofficial@gmail.com" className="social-item">
            <div className="social-icon"><MdEmail /></div>
            <span>Email</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;