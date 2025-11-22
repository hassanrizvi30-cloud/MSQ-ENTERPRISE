import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';
import { PRODUCTS, PARTNERS, VALUES, COMPANY_INFO } from '../constants';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Excellence in Pharma Packaging",
      subtitle: "High-grade PET & HDPE solutions ensuring safety and compliance.",
      image: "https://picsum.photos/1920/1080?random=20",
      cta: "View Pharma Products",
      link: "/products"
    },
    {
      id: 2,
      title: "Innovation in Textile Components",
      subtitle: "Precision-engineered cones and bobbins for modern spinning.",
      image: "https://picsum.photos/1920/1080?random=21",
      cta: "View Textile Products",
      link: "/products"
    }
  ];

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-msq-blue/90 to-transparent z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-100 font-light">
                  {slide.subtitle}
                </p>
                <div className="flex space-x-4">
                  <Link
                    to={slide.link}
                    className="bg-white text-msq-blue px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center"
                  >
                    {slide.cta} <ArrowRight className="ml-2" size={20} />
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-bold text-msq-blue mb-6">Welcome to MSQ Enterprise</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
                We are a pioneering plastic manufacturing company in Pakistan, dedicated to providing top-tier solutions for the Pharmaceutical and Textile industries. With state-of-the-art machinery and a commitment to quality, we transform raw materials into precision products that power your business.
            </p>
        </div>
      </section>

      {/* Product Categories & Flip Cards */}
      <section className="py-20 relative bg-gray-100">
        {/* Fixed Background Logo Effect */}
        <div 
            className="absolute inset-0 z-0 opacity-5 bg-fixed bg-center bg-no-repeat bg-contain pointer-events-none"
            style={{ backgroundImage: `url('https://picsum.photos/200/200?random=99')` }} // Simulating logo watermark
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-msq-blue">Our Product Categories</h2>
            <div className="w-20 h-1 bg-msq-blue mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.id} className="group h-80 perspective-1000 cursor-pointer">
                <div className="relative h-full w-full transition-all duration-700 preserve-3d group-hover:rotate-y-180 shadow-xl rounded-lg">
                  
                  {/* Front */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-lg overflow-hidden">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-6 flex flex-col items-center justify-center">
                        <h3 className="text-xl font-bold text-msq-blue mb-2">{product.name}</h3>
                        <p className="text-gray-500 text-sm text-center">{product.category}</p>
                        <div className="mt-4 text-msq-blue font-semibold text-sm flex items-center">
                            View Details <ChevronRight size={16} />
                        </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-msq-blue text-white rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                    <p className="text-sm mb-6 text-gray-200">
                      {product.shortDescription}
                    </p>
                    <Link 
                        to="/products" 
                        className="bg-white text-msq-blue px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Explore More
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
              <Link to="/categories" className="inline-block border-2 border-msq-blue text-msq-blue px-8 py-3 rounded hover:bg-msq-blue hover:text-white transition font-semibold">
                  View All Categories
              </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-msq-blue text-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold">Our Core Values</h2>
                <p className="mt-4 text-gray-300">The principles that drive our excellence.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {VALUES.map((value, idx) => (
                    <div key={idx} className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition duration-300 text-center">
                        <div className="mb-6 flex justify-center">
                            {value.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="text-gray-300 text-sm">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-gray-400 mb-12 uppercase tracking-widest">Trusted by Industry Leaders</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {PARTNERS.map((partner, idx) => (
                    <div key={idx} className="w-32 md:w-40 text-center">
                        <img src={partner.logoUrl} alt={partner.name} className="max-w-full h-auto hover:scale-110 transition-transform" />
                        <p className="mt-2 text-sm font-semibold text-gray-500">{partner.name}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Home Contact Section */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-msq-blue mb-6">Get In Touch With Us</h2>
                    <p className="text-gray-600 mb-8">Have a query about our products or need a custom quote? Fill out the form and our team will get back to you shortly.</p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center text-gray-700">
                            <CheckCircle className="text-green-500 mr-3" />
                            <span>24/7 Customer Support</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <CheckCircle className="text-green-500 mr-3" />
                            <span>Custom Manufacturing Orders</span>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <CheckCircle className="text-green-500 mr-3" />
                            <span>International Export Quality</span>
                        </div>
                    </div>

                    <a 
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition shadow-lg"
                    >
                        Chat on WhatsApp
                    </a>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <ContactForm />
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;