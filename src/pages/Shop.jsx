import React from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import './Shop.css';

const products = [
  { id: 1, name: 'Verde Apex', price: '$240', category: 'Running', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'Emerald Runner', price: '$180', category: 'Training', image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'Forest Classic', price: '$150', category: 'Casual', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'Neon Sprint', price: '$210', category: 'Running', image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'Mint Urban', price: '$130', category: 'Casual', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop' },
  { id: 6, name: 'Jade Elevate', price: '$280', category: 'Basketball', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop' },
];

const Shop = () => {
  return (
    <AnimatedPage>
      <div className="shop-page container">
        <div className="shop-header">
          <h1>All <span className="text-primary">Collections</span></h1>
          <p>Discover our full range of luxury, high-performance footwear.</p>
        </div>

        <div className="shop-layout">
          {/* Filters Sidebar */}
          <aside className="shop-sidebar">
            <div className="filter-group">
              <h3><Filter size={18} /> Filters</h3>
              
              <div className="filter-section">
                <h4>Category <ChevronDown size={16} /></h4>
                <label className="checkbox-label"><input type="checkbox" /> Running</label>
                <label className="checkbox-label"><input type="checkbox" /> Training</label>
                <label className="checkbox-label"><input type="checkbox" /> Casual</label>
                <label className="checkbox-label"><input type="checkbox" /> Basketball</label>
              </div>
              
              <div className="filter-section">
                <h4>Price <ChevronDown size={16} /></h4>
                <label className="checkbox-label"><input type="checkbox" /> Under $150</label>
                <label className="checkbox-label"><input type="checkbox" /> $150 - $200</label>
                <label className="checkbox-label"><input type="checkbox" /> Over $200</label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="shop-content">
            <div className="shop-controls">
              <span>Showing {products.length} Results</span>
              <select className="sort-select">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>

            <div className="product-grid">
              {products.map((product, index) => (
                <motion.div 
                  className="product-card" 
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} />
                    <button className="add-to-cart-quick">Add to Cart</button>
                  </div>
                  <div className="product-info">
                    <span className="category-label">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p className="price">{product.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Shop;
