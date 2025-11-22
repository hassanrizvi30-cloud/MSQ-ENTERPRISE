import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Facebook, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-msq-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Company Logo & About */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-msq-blue font-bold text-xl">
                M
              </div>
              <span className="text-2xl font-bold text-white tracking-wide">
                MSQ<span className="font-light">ENTERPRISE</span>
              </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            A premier plastic manufacturing company dedicated to serving the Pharmaceutical and Textile industries with high-quality precision products.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-gray-300 hover:text-white transition"><Facebook size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white transition"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-300 hover:text-white transition"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="md:text-center">
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-500 inline-block pb-1">Quick Links</h3>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-gray-300 hover:text-white transition text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Contact Info */}
        <div className="md:text-right">
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-500 inline-block pb-1">Contact Info</h3>
          <ul className="space-y-4">
             <li className="flex md:justify-end items-start space-x-3">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">{COMPANY_INFO.address}</span>
             </li>
             <li className="flex md:justify-end items-center space-x-3">
                <Mail size={18} />
                <span className="text-gray-300 text-sm">{COMPANY_INFO.email}</span>
             </li>
             <li className="flex md:justify-end items-center space-x-3">
                <Phone size={18} />
                <span className="text-gray-300 text-sm">{COMPANY_INFO.phone}</span>
             </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-xs">
        <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;