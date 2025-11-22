import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar for Contact Info - visible on desktop */}
      <div className="hidden lg:flex justify-end items-center bg-msq-blue text-white px-8 py-1 text-sm space-x-6">
         <div className="flex items-center space-x-2">
            <Phone size={14} />
            <span>{COMPANY_INFO.phone}</span>
         </div>
         <div className="flex items-center space-x-2">
            <Mail size={14} />
            <span>{COMPANY_INFO.email}</span>
         </div>
      </div>

      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-msq-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="text-2xl font-bold text-msq-blue tracking-wide">
                MSQ<span className="font-light">ENTERPRISE</span>
              </span>
            </Link>
          </div>

          {/* Middle: Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold uppercase tracking-wider hover:text-msq-light transition-colors ${
                  location.pathname === item.path ? 'text-msq-blue border-b-2 border-msq-blue' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA / Email (Desktop) */}
          <div className="hidden lg:flex items-center">
             <Link 
                to="/contact" 
                className="bg-msq-blue text-white px-6 py-2 rounded hover:bg-msq-light transition-colors font-semibold shadow-lg"
             >
                Get a Quote
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-msq-blue focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 mt-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium block px-2 ${
                     location.pathname === item.path ? 'text-msq-blue' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 px-2">
                 <p className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                    <Mail size={14} /> {COMPANY_INFO.email}
                 </p>
                 <Link 
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-block bg-msq-blue text-white px-6 py-2 rounded text-center w-full"
                 >
                    Contact Us
                 </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;