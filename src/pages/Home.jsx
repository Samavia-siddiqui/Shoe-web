import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import './Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  return (
    <AnimatedPage>
      <div className="home-page">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-container">
            <motion.div 
              className="hero-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.span className="badge" variants={itemVariants}>
                New Collection 2026
              </motion.span>
              <motion.h1 variants={itemVariants} className="hero-title">
                Elevate Your <br />
                <span className="text-primary">Every Step</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="hero-desc">
                Discover the perfect blend of luxury, comfort, and sustainable design. Step into the future with our exclusive emerald collection.
              </motion.p>
              <motion.div variants={itemVariants} className="hero-actions">
                <NavLink to="/shop" className="btn btn-primary">
                  Explore Collection <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                </NavLink>
                <NavLink to="/about" className="btn btn-outline">
                  Our Story
                </NavLink>
              </motion.div>
              
              <motion.div variants={itemVariants} className="hero-stats">
                <div className="stat">
                  <h4>10k+</h4>
                  <p>Happy Customers</p>
                </div>
                <div className="stat">
                  <h4>4.9/5</h4>
                  <p>
                    <Star size={16} fill="var(--primary-color)" color="var(--primary-color)" className="star-icon" />
                    Reviews
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            >
              <div className="image-backdrop"></div>
              <motion.img 
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop" 
                alt="Luxury Green Sneaker" 
                className="hero-image"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </section>

        {/* TRENDING SECTION */}
        <section className="trending">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2>Trending <span className="text-primary">Now</span></h2>
              <NavLink to="/shop" className="view-all">View All</NavLink>
            </motion.div>

            <div className="product-grid-home">
              {[
                { id: 1, name: 'Verde Apex', price: '$240', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
                { id: 2, name: 'Emerald Runner', price: '$180', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop' },
                { id: 3, name: 'Forest Classic', price: '$150', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop' }
              ].map((product, index) => (
                <motion.div 
                  className="product-card" 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} />
                    <button className="add-to-cart-quick">Quick Add</button>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="price">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default Home;
