import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import './Contact.css';

const Contact = () => {
  return (
    <AnimatedPage>
      <div className="contact-page container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Get in <span className="text-primary">Touch</span></h1>
          <p>We're here to assist you with any inquiries about our collections, sizing, or styling.</p>
        </motion.div>

        <div className="contact-layout">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact Information</h3>
            <div className="info-item">
              <div className="info-icon"><MapPin /></div>
              <div>
                <h4>Our Flagship Store</h4>
                <p>123 Luxury Avenue, Beverly Hills, CA 90210</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Phone /></div>
              <div>
                <h4>Phone</h4>
                <p>+1 (800) 123-4567</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Mail /></div>
              <div>
                <h4>Email</h4>
                <p>concierge@verdeluxury.com</p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            className="contact-form glass"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="How can we help?" required />
            </div>
            
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Your message here..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
