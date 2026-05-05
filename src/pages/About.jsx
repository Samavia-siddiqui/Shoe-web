import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import './About.css';

const About = () => {
  return (
    <AnimatedPage>
      <div className="about-page">
        <section className="about-hero container">
          <motion.div 
            className="about-hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our <span className="text-primary">Heritage</span></h1>
            <p>Founded on the principles of luxury, sustainability, and unmatched comfort. Verde is more than a shoe—it's a step into the future of footwear.</p>
          </motion.div>
          <motion.div 
            className="about-hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop" alt="Shoe making process" />
          </motion.div>
        </section>

        <section className="values-section">
          <div className="container">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
            >
              Core <span className="text-primary">Values</span>
            </motion.h2>

            <div className="values-grid">
              {[
                { title: 'Innovation', desc: 'Pushing the boundaries of sneaker technology to provide ultimate comfort and performance.' },
                { title: 'Sustainability', desc: 'Crafting our products using recycled materials and eco-friendly processes.' },
                { title: 'Elegance', desc: 'A minimalist yet striking design language that stands out in any crowd.' }
              ].map((value, index) => (
                <motion.div 
                  className="value-card" 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="value-icon">0{index + 1}</div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default About;
