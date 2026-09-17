import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    orderId: "",
    message: "",
    help: []
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setSubmitted(false);
  };

  const handleHelpChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      help: checked
        ? [...prev.help, value]
        : prev.help.filter((item) => item !== value)
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-wrapper">
        <div className="contact-info">
          <div className="info-block">
            <div className="info-icon"><img src="/icons/chat-icon.png" /></div>

            <div>
              <h3>Chat with us</h3>
              <p>Our friendly team is here to help.</p>
              <strong>support@shopkart.com</strong>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon"><img src="/icons/contact-call.png" /></div>

            <div>
              <h3>Call us</h3>
              <p>Mon - Sat from 9AM to 6PM.</p>
              <strong>+91 98765 43210</strong>
            </div>
          </div>

          <div className="info-block">
            <div className="info-icon"><img src="/icons/location.png" /></div>

            <div>
              <h3>Visit our office</h3>
              <p>Come say hello at our office.</p>
              <strong>
                123 Shopping Street,
                <br />
                Bangalore, Karnataka 560001
              </strong>
            </div>
          </div>

          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0167361813105!2d72.94758897381992!3d19.194471348245365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b92e8437d15b%3A0x8b55216ca2b2ebe9!2sI.T.VEDANT!5e0!3m2!1sen!2sin!4v1789454072911!5m2!1sen!2sin"
              title="I.T.VEDANT location"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="social-section">
            <h3>Follow us</h3>

            <div className="social-icons">
              <span><img src="/icons/contact-facebook.png" /></span>
              <span><img src="/icons/contact-twitter.png" /></span>
              <span><img src="/icons/contact-x.png" /></span>
              <span><img src="/icons/contact-youtube.png" /></span>
              <span><img src="/icons/contact-instagram.png" /></span>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <div className="form-content">
            <h1>
              Have a question?
              <br />
              We're here for <span>you!</span>
            </h1>

            <p className="form-intro">
              Tell us more about your query, suggestion, or feedback.
              <br />
              We'd love to hear from you and get back as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Your name *</label>
                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Your email *</label>
                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
              </div>

              <div className="form-field">
                <label htmlFor="orderId">Order ID</label>
                <input id="orderId" type="text" name="orderId" value={formData.orderId} onChange={handleChange} placeholder="Enter your order ID (optional)" />
              </div>

              <div className="form-field message-field">
                <label htmlFor="message">Your message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here..." maxLength="500" required />

                <span className="character-count">{formData.message.length}/500</span>
              </div>

              <div className="help-section">
                <p>
                  How can we help you?
                  <span> Select all that apply</span>
                </p>

                <div className="help-options">
                  <label><input type="checkbox" value="Order Issue" onChange={handleHelpChange} /><span>Order Issue</span></label>
                  <label><input type="checkbox" value="Return / Refund" onChange={handleHelpChange} /><span>Return / Refund</span></label>
                  <label><input type="checkbox" value="Payment Help" onChange={handleHelpChange} /><span>Payment Help</span></label>
                  <label><input type="checkbox" value="Account Support" onChange={handleHelpChange} /><span>Account Support</span></label>
                  <label><input type="checkbox" value="Product Inquiry" onChange={handleHelpChange} /><span>Product Inquiry</span></label>
                  <label><input type="checkbox" value="Other" onChange={handleHelpChange} /><span>Other</span></label>
                </div>
              </div>

              <button type="submit" className="contact-submit">
                Send Message <span>→</span>
              </button>

              {submitted && <p className="success-message">Thanks! Your message has been submitted.</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;