import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <NavLink to="/" className="logo">
            <span className="logo-icon">V</span>ERDE
          </NavLink>
          <p className="footer-desc">
            Redefining luxury footwear with sustainable practices and modern aesthetics. Step into the future.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Facebook">FB</a>
          </div>
        </div>

        <div className="footer-links-group">
          <div className="footer-links">
            <h3>Shop</h3>
            <NavLink to="/shop">All Collections</NavLink>
            <NavLink to="/shop">New Arrivals</NavLink>
            <NavLink to="/shop">Best Sellers</NavLink>
            <NavLink to="/shop">Accessories</NavLink>
          </div>

          <div className="footer-links">
            <h3>Company</h3>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <a href="#">Careers</a>
            <a href="#">Sustainability</a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>Join our newsletter for exclusive releases and insider-only discounts.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" aria-label="Subscribe">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Verde Luxury Footwear. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
