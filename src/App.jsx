import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Header />

      {/* Breadcrumbs / Page Title */}
      <div className="bg-gray-50 py-12 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-4">Eau De Toilette</h1>
          <p className="text-gray-500 text-sm uppercase tracking-widest">
            <span className="hover:text-brand-red cursor-pointer">Home</span> / <span>EDT</span>
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 flex-grow">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <Sidebar />

          {/* Product Grid Area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
              <span className="text-gray-500 text-sm italic">{products.length} products</span>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="text-sm border-none bg-transparent font-medium focus:ring-0 cursor-pointer hover:text-brand-red outline-none">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State / More content */}
            {products.length === 0 && (
              <div className="py-20 text-center text-gray-500">No products found.</div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
