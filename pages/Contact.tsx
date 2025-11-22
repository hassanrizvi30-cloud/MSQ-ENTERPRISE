import React from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <div className="bg-msq-blue text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-gray-300">We are here to assist you.</p>
            </div>
        </div>

        <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Info Side */}
                <div>
                    <h2 className="text-3xl font-bold text-msq-blue mb-8">Get in Touch</h2>
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-msq-blue flex-shrink-0">
                                <MapPin />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg">Our Office</h3>
                                <p className="text-gray-600">{COMPANY_INFO.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-msq-blue flex-shrink-0">
                                <Phone />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg">Phone Number</h3>
                                <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-msq-blue flex-shrink-0">
                                <Mail />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 text-lg">Email Address</h3>
                                <p className="text-gray-600">{COMPANY_INFO.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 p-6 bg-green-50 border border-green-200 rounded-lg">
                         <h3 className="font-bold text-green-800 mb-2 flex items-center">
                             <MessageCircle className="mr-2" /> Quick Chat
                         </h3>
                         <p className="text-green-700 text-sm mb-4">
                             Need an instant response? Chat with our sales team directly on WhatsApp.
                         </p>
                         <a 
                            href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition"
                         >
                            Open WhatsApp
                         </a>
                    </div>
                </div>

                {/* Form Side */}
                <div className="bg-white p-8 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
                    <ContactForm />
                </div>
            </div>
        </div>

        {/* Map placeholder */}
        <div className="h-96 bg-gray-200 w-full">
             <iframe 
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6302710465!2d66.5949955172273!3d25.1932023917193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0dd!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" 
                className="w-full h-full border-0" 
                loading="lazy"
             ></iframe>
        </div>
    </div>
  );
};

export default Contact;