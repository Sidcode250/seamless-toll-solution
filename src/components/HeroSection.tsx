
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24" ref={heroRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent z-0"></div>
      
      {/* Background dots pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="chip animate-on-scroll opacity-0 transition-opacity duration-700 delay-[200ms]">
              Next Generation Toll Solution
            </div>
            
            <h1 className="animate-on-scroll opacity-0 transition-opacity duration-700 delay-[400ms] font-bold text-5xl md:text-6xl tracking-tight">
              Seamless, Smart, and Automated Toll Collection
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 animate-on-scroll opacity-0 transition-opacity duration-700 delay-[600ms]">
              Experience the future of highway travel with our GPS-based toll collection system. No more waiting in lines, no more toll booths.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-on-scroll opacity-0 transition-opacity duration-700 delay-[800ms]">
              <Link to="/dashboard" className="btn-primary">
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/how-it-works" className="btn-secondary">
                Learn More
              </Link>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 animate-on-scroll opacity-0 transition-opacity duration-700 delay-[1000ms]">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-xs text-white font-medium">
                    {i + 1}
                  </div>
                ))}
              </div>
              <span>Trusted by thousands of drivers</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-on-scroll opacity-0 transition-opacity duration-700 delay-[600ms]">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 relative overflow-hidden">
                {/* Smart Highway Illustration */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between">
                    <div className="text-white text-lg font-medium">Smart Highway</div>
                    <div className="bg-white/20 backdrop-blur-md rounded-full px-3 py-1 text-white text-xs font-medium">
                      GPS Activated
                    </div>
                  </div>
                  
                  <div className="relative">
                    {/* Highway */}
                    <div className="highway rounded-xl mb-4">
                      <div className="car">
                        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16 6L17.6 10H6.4L8 6H16Z" fill="white"/>
                          <path d="M3 14V16C3 17.1046 3.89543 18 5 18H6C6 16.8954 6.89543 16 8 16C9.10457 16 10 16.8954 10 18H14C14 16.8954 14.8954 16 16 16C17.1046 16 18 16.8954 18 18H19C20.1046 18 21 17.1046 21 16V14M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18C9 17.4477 8.55228 17 8 17C7.44772 17 7 17.4477 7 18ZM15 18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17C15.4477 17 15 17.4477 15 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M5 14H19L17.6 10H6.4L5 14Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      
                      {/* GPS Pin */}
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full animate-pulse-slow flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-200 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                    
                    <div className="flex justify-between items-end">
                      <div className="text-white">
                        <div className="text-xs font-medium opacity-80">Total Distance</div>
                        <div className="text-xl font-bold">12.5 km</div>
                      </div>
                      <div className="text-white">
                        <div className="text-xs font-medium opacity-80">Toll Fee</div>
                        <div className="text-xl font-bold">$3.50</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -z-10 top-12 -left-12 w-48 h-48 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
