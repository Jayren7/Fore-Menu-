import React, { useState, useEffect } from 'react';

import Header from './Header';
import Hero from './Hero';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import Modal from './Modal';
import Footer from './Footer';

import { menuData } from '../data/menuData';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Americano Series');

  const scrollToCategory = (categoryName) => {
    setActiveCategory(categoryName);
    const element = document.getElementById(categoryName);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Prevent scroll saat modal terbuka
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      <div className="max-w-6xl mx-auto px-8 pt-4 pb-8">
        <div className="flex gap-12">
          <Sidebar
            categories={menuData}
            activeCategory={activeCategory}
            onCategoryChange={scrollToCategory}
          />

          {/* Main content */}
          <main className="flex-1 max-w-3xl">
            {menuData.map((category, catIndex) => (
              <div
                key={catIndex}
                id={category.category}
                className="mb-20"
              >
                {/* JUDUL KATEGORI - DIBESARIN */}
                <h2 className="text-3xl font-black mb-10 uppercase tracking-wider text-gray-900">
                  {category.category}
                </h2>

                {/* Grid 2 kolom */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {category.items.map((item) => (
                    <ProductCard
                      key={item.id}
                      product={item}
                      onClick={() => setSelectedProduct(item)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>

      <Modal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <Footer />
    </div>
  );
}

export default App;