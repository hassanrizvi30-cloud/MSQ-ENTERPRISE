import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Categories: React.FC = () => {
  // Group products by category for display purposes, or just show distinct categories
  const uniqueCategories = Array.from(new Set(PRODUCTS.map(p => p.category)));

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-20">
      {/* Header */}
      <div className="bg-msq-blue text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Categories</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our diverse range of plastic manufacturing solutions tailored for various industrial sectors.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uniqueCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
               <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {/* Using the image of the first product in this category as a thumbnail */}
                  <img 
                    src={PRODUCTS.find(p => p.category === category)?.image} 
                    alt={category}
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="p-8">
                  <h3 className="text-2xl font-bold text-msq-blue mb-4">{category} Sector</h3>
                  <p className="text-gray-600 mb-6">
                    Specialized high-quality plastic components designed specifically for the {category.toLowerCase()} industry needs.
                  </p>
                  <Link 
                    to="/products" 
                    className="text-msq-blue font-semibold flex items-center hover:text-msq-light"
                  >
                    View Products <ArrowRight size={18} className="ml-2"/>
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;