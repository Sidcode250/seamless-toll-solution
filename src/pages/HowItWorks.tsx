import React from 'react';
import { motion } from 'framer-motion';
import { Car, CreditCard, Shield } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: 'GPS Tracking',
      description: 'Our system uses advanced GPS technology to track your vehicle\'s location in real-time as you travel through toll zones.'
    },
    {
      icon: <CreditCard className="w-12 h-12 text-blue-600" />,
      title: 'Automatic Payment',
      description: 'Tolls are automatically calculated based on distance traveled and charged to your registered payment method.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Secure & Reliable',
      description: 'Your data is protected with bank-level security, and you receive instant notifications for all transactions.'
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
            How It Works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience seamless toll collection with our innovative GPS-based system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Animation Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-20 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            See It In Action
          </h2>
          <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
            {/* Placeholder for interactive animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500">
                Interactive animation coming soon...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks; 