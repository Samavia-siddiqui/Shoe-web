import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { ShoppingBag, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container nav-container">
        <NavLink to="/" className="logo">
          <span className="logo-icon">V</span>ERDE
        </NavLink>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button className="cart-btn" aria-label="Shopping Cart">
            <ShoppingBag size={24} />
            <span className="cart-badge">2</span>
          </button>
          
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
