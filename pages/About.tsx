import React from 'react';
import { Target, Eye, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       <div className="bg-msq-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300">Building the future with precision and quality.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-msq-blue text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-msq-blue rounded-full mb-6">
                    <Eye size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                    To be the leading plastic manufacturing enterprise in the region, recognized for innovation, quality excellence, and sustainable practices that contribute to the growth of the pharmaceutical and textile sectors.
                </p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-msq-blue text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-msq-blue rounded-full mb-6">
                    <Target size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                    To deliver superior quality plastic products through advanced technology and rigorous quality control, ensuring customer satisfaction while maintaining high ethical standards and environmental responsibility.
                </p>
            </div>
        </div>

        {/* Chairman's Note */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gray-200 min-h-[300px]">
                <img 
                    src="https://picsum.photos/500/600?grayscale" 
                    alt="Chairman" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="md:w-2/3 p-10 md:p-16 flex flex-col justify-center">
                <div className="mb-6">
                    <Award className="text-msq-blue w-12 h-12 mb-4" />
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Chairman's Note</h2>
                    <div className="h-1 w-20 bg-msq-blue"></div>
                </div>
                <blockquote className="text-lg text-gray-600 italic mb-8">
                    "At MSQ Enterprise, we believe that quality is not just a standard, but a culture. Since our inception, we have strived to support Pakistan's growing industries with reliable and durable plastic components. Our journey is defined by our commitment to our partners and our relentless pursuit of manufacturing excellence."
                </blockquote>
                <div>
                    <p className="font-bold text-gray-900 text-lg">Mr. Muhammad Siddique</p>
                    <p className="text-gray-500">Chairman, MSQ Enterprise</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;