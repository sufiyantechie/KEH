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
      <h2 data-aos="fade-up" data-aos-duration="1000">Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info" data-aos="fade-right" data-aos-delay="200">
          <div className="info-card">
            <div className="info-item">
              <div className="icon">📍</div>
              <div className="info-text">
                <h4>Address</h4>
                <p>Kalakadian English Hub<br/>Kalakad, Tamil Nadu, India</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">📱</div>
              <div className="info-text">
                <h4>WhatsApp</h4>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                  +91 98765 43210
                </a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <a href="mailto:info@kalakadianenglishhub.com">
                  info@kalakadianenglishhub.com
                </a>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">🕒</div>
              <div className="info-text">
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 7:00 PM<br/>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        <form className="contact-form" data-aos="fade-left" data-aos-delay="400" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="6" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;