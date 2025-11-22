import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const FloatingWhatsApp = () => {
    return (
        <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
            title="Chat on WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    )
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="font-sans text-gray-800 antialiased">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  );
};

export default App;