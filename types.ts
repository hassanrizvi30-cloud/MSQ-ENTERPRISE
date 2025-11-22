import React from 'react';

export interface SubProduct {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Pharma' | 'Textile' | 'General';
  image: string;
  shortDescription: string;
  fullDescription: string;
  subProducts: SubProduct[];
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Partner {
  name: string;
  logoUrl: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}