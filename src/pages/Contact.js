import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-container">
      <h2 data-aos="fade-up">Contact Us</h2>
      <div className="contact-info" data-aos="fade-up" data-aos-delay="100">
        <p><strong>📍 Address:</strong> Kalakadian English Hub, Kalakad, Tamil Nadu, India</p>
        <p><strong>📱 WhatsApp:</strong> <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">+91 98765 43210</a></p>
        <p><strong>📧 Email:</strong> <a href="mailto:info@kalakadianenglishhub.com">info@kalakadianenglishhub.com</a></p>
      </div>
      <form className="contact-form" data-aos="fade-up" data-aos-delay="200" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <textarea 
          name="message"
          placeholder="Your Message" 
          rows="5" 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
