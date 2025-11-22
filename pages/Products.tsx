import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const filteredProducts = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      <div className="bg-msq-blue text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-300">Precision engineered plastic solutions.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                filter === cat 
                ? 'bg-msq-blue text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products List */}
        <div className="space-y-12">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 h-64 md:h-auto relative">
                 <img 
                    src={product.image} 
                    alt={product.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                 />
              </div>
              <div className="p-8 md:w-2/3">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-msq-blue rounded-full mb-2">
                            {product.category}
                        </span>
                        <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
                    </div>
                 </div>
                 <p className="text-gray-600 mb-6">{product.fullDescription}</p>
                 
                 <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-gray-700 mb-4">Available Variants / Sub-products:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {product.subProducts.map((sub) => (
                            <li key={sub.id} className="flex items-start">
                                <div className="w-2 h-2 mt-2 bg-msq-blue rounded-full mr-3 flex-shrink-0"></div>
                                <div>
                                    <strong className="block text-gray-800 text-sm">{sub.name}</strong>
                                    <span className="text-xs text-gray-500">{sub.description}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                 </div>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
             <div className="text-center text-gray-500 py-12">No products found in this category.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;