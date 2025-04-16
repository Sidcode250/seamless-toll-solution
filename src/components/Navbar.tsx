import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TollSmart
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/how-it-works" className="text-gray-600 hover:text-blue-600">
              How It Works
            </Link>
            <Link to="/features" className="text-gray-600 hover:text-blue-600">
              Features
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:block">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
