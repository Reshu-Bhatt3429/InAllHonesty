import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  const [filters, setFilters] = useState({
    types: [],
    minPrice: '',
    maxPrice: '',
    inStock: false
  });
  const [sortOption, setSortOption] = useState('Featured');

  // Helper to parse price string "Rs. 1,299.00" -> 1299
  const parsePrice = (priceStr) => parseInt(priceStr.replace(/[^0-9]/g, '')) / 100;

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Type
    if (filters.types.length > 0) {
      result = result.filter(p => filters.types.includes(p.type));
    }

    // Filter by Price
    if (filters.minPrice) {
      result = result.filter(p => parsePrice(p.price) >= parseInt(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter(p => parsePrice(p.price) <= parseInt(filters.maxPrice));
    }

    // Filter by Stock (Assuming all are in stock for now unless specific field added, 
    // but demonstrating logic. If we had 'inStock' field in data, we'd use it.
    // For now, let's assume all are in stock so this filter doesn't hide everything)
    if (filters.inStock) {
      // result = result.filter(p => p.inStock); 
    }

    // Sort
    if (sortOption === 'Price: Low to High') {
      result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortOption === 'Price: High to Low') {
      result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortOption === 'Best Selling') {
      // Mock sort
      result.reverse();
    }

    return result;
  }, [filters, sortOption]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />

      {/* Breadcrumbs / Page Title */}
      {/* Breadcrumbs / Page Title */}
      <div className="bg-white py-20 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 mb-6 tracking-tight">Eau De Toilette</h1>
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-medium">
            <span className="hover:text-brand-red cursor-pointer transition-colors">Home</span>
            <span className="mx-3 text-gray-300">/</span>
            <span>EDT</span>
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <Sidebar filters={filters} setFilters={setFilters} />

          {/* Product Grid Area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <span className="text-gray-500 text-sm italic">{filteredProducts.length} products</span>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  className="text-sm border-none bg-transparent font-medium focus:ring-0 cursor-pointer hover:text-brand-red outline-none"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State / More content */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center text-gray-500">No products found matching your filters.</div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
