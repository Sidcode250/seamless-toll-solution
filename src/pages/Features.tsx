import React from 'react';
import { motion } from 'framer-motion';
import { Zap, MapPin, Shield, Leaf } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'Automated Payments',
      description: 'Say goodbye to toll booths and waiting in line. Our system automatically processes payments as you drive through toll zones.'
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: 'Real-Time GPS Tracking',
      description: 'Advanced GPS technology ensures accurate distance-based toll calculation and real-time vehicle tracking.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Secure & Transparent',
      description: 'Bank-level security and blockchain integration ensure your transactions are safe and transparent.'
    },
    {
      icon: <Leaf className="w-12 h-12 text-blue-600" />,
      title: 'Eco-Friendly',
      description: 'Reduce congestion and fuel consumption by eliminating the need to stop at toll booths.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our GPS-based toll collection system revolutionizes your travel experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            Additional Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support for all your queries</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Detailed Reports</h3>
              <p className="text-gray-600">Access comprehensive travel and payment reports</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Multiple Payment Options</h3>
              <p className="text-gray-600">Support for various payment methods including UPI, cards, and wallets</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features; 