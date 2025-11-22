import React from 'react';
import { Product, Partner, NavItem } from './types';
import { ShieldCheck, Truck, Users, Leaf } from 'lucide-react';

export const COMPANY_INFO = {
  name: "MSQ ENTERPRISE",
  email: "info@msqenterprise.com",
  phone: "+92 300 1234567",
  address: "Plot 123, Industrial Estate, Karachi, Pakistan",
  whatsapp: "923001234567",
  colors: {
    primary: "#173b6a"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Categories', path: '/categories' },
  { label: 'Products', path: '/products' },
  { label: 'Contact Us', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Pharma Bottles',
    category: 'Pharma',
    image: 'https://picsum.photos/600/400?random=1',
    shortDescription: 'High-quality PET & HDPE bottles for pharmaceutical use.',
    fullDescription: 'Our pharmaceutical bottles are manufactured under strict hygiene conditions ensuring safety and durability.',
    subProducts: [
      { id: 'p1-1', name: '60ml Syrup Bottle', description: 'Standard amber color' },
      { id: 'p1-2', name: '120ml Syrup Bottle', description: 'Child-resistant cap compatible' },
    ]
  },
  {
    id: '2',
    name: 'Textile Cones',
    category: 'Textile',
    image: 'https://picsum.photos/600/400?random=2',
    shortDescription: 'Durable cones and bobbins for high-speed spinning.',
    fullDescription: 'Precision engineered textile cones designed to withstand high-speed winding and prevent yarn slippage.',
    subProducts: [
      { id: 't1-1', name: '4-20 Paper Cone', description: 'Textured surface' },
      { id: 't1-2', name: 'Plastic Bobbin', description: 'High impact resistance' },
    ]
  },
  {
    id: '3',
    name: 'Caps & Closures',
    category: 'Pharma',
    image: 'https://picsum.photos/600/400?random=3',
    shortDescription: 'Secure sealing solutions.',
    fullDescription: 'A wide variety of caps including screw caps, flip-top, and child-resistant closures.',
    subProducts: [
      { id: 'c1-1', name: '28mm ROPP Cap', description: 'Tamper evident' },
    ]
  },
  {
    id: '4',
    name: 'Industrial Crates',
    category: 'General',
    image: 'https://picsum.photos/600/400?random=4',
    shortDescription: 'Heavy duty storage crates.',
    fullDescription: 'Stackable and nestable crates perfect for logistics and storage.',
    subProducts: [
      { id: 'g1-1', name: 'Vegetable Crate', description: 'Ventilated design' },
    ]
  }
];

export const PARTNERS: Partner[] = [
  { name: 'Nestle', logoUrl: 'https://picsum.photos/200/100?random=10' },
  { name: 'Coca Cola', logoUrl: 'https://picsum.photos/200/100?random=11' },
  { name: 'Abbott', logoUrl: 'https://picsum.photos/200/100?random=12' },
  { name: 'GSK', logoUrl: 'https://picsum.photos/200/100?random=13' },
  { name: 'Sapphire Textile', logoUrl: 'https://picsum.photos/200/100?random=14' },
];

export const VALUES = [
  { 
    title: 'Quality Assurance', 
    description: 'We never compromise on the quality of our raw materials and finished goods.',
    icon: <ShieldCheck className="w-12 h-12 text-white" />
  },
  { 
    title: 'Timely Delivery', 
    description: 'Our logistics network ensures your products arrive on time, every time.',
    icon: <Truck className="w-12 h-12 text-white" />
  },
  { 
    title: 'Customer Focus', 
    description: 'We build lasting relationships by understanding and meeting client needs.',
    icon: <Users className="w-12 h-12 text-white" />
  },
  { 
    title: 'Sustainability', 
    description: 'Committed to eco-friendly manufacturing processes and recycling.',
    icon: <Leaf className="w-12 h-12 text-white" />
  },
];