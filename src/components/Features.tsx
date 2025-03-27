
import React, { useEffect, useRef } from 'react';
import { Zap, MapPin, Lock, Leaf } from 'lucide-react';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: 'Automated Payments',
      description: 'No more waiting in lines, no toll booths. Our system automatically processes payments as you drive through toll zones.',
      delay: 300,
    },
    {
      icon: <MapPin className="h-10 w-10 text-blue-500" />,
      title: 'Real-Time GPS Tracking',
      description: 'Advanced GPS technology calculates tolls based on actual distance traveled, ensuring you only pay for what you use.',
      delay: 500,
    },
    {
      icon: <Lock className="h-10 w-10 text-blue-500" />,
      title: 'Secure & Transparent',
      description: 'End-to-end encryption protects your data while blockchain integration ensures complete transparency in all transactions.',
      delay: 700,
    },
    {
      icon: <Leaf className="h-10 w-10 text-blue-500" />,
      title: 'Eco-Friendly',
      description: 'Reduce congestion and fuel consumption with smooth flowing traffic. No more idling in toll booth lines.',
      delay: 900,
    },
  ];

  return (
    <section className="section bg-white" id="features" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="chip mb-4 inline-flex animate-on-scroll opacity-0 transition-opacity duration-700">
            Key Benefits
          </div>
          <h2 className="text-4xl font-bold mb-6 animate-on-scroll opacity-0 transition-opacity duration-700 delay-[200ms]">
            Premium Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-opacity duration-700 delay-[400ms]">
            Our GPS-based toll collection system offers a range of benefits designed to make your travel experience smoother and more efficient.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card hover:shadow-lg animate-on-scroll opacity-0 transition-all duration-700"
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 rounded-2xl p-4 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 rounded-2xl overflow-hidden shadow-lg animate-on-scroll opacity-0 transition-opacity duration-700 delay-[1000ms] bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="p-12 md:p-16 text-white">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Experience the next generation of toll collection</h3>
                <p className="mb-8 text-blue-100">
                  Join thousands of drivers who are already enjoying the benefits of our GPS-based toll collection system. Save time, reduce stress, and enjoy a smoother driving experience.
                </p>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold mb-1">45%</div>
                      <div className="text-sm text-blue-100">Reduced Traffic</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">10M+</div>
                      <div className="text-sm text-blue-100">Toll Transactions</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">98%</div>
                      <div className="text-sm text-blue-100">Customer Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">30%</div>
                      <div className="text-sm text-blue-100">Cost Savings</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-blue-700/50 rounded-full flex items-center justify-center overflow-hidden">
                  {/* Animated Map Graphic */}
                  <div className="absolute inset-4 border-4 border-blue-200/10 rounded-full"></div>
                  <div className="absolute inset-8 border-4 border-blue-200/20 rounded-full"></div>
                  <div className="absolute inset-12 border-4 border-blue-200/30 rounded-full"></div>
                  <div className="absolute inset-16 border-4 border-blue-200/40 rounded-full"></div>
                  
                  {/* GPS Points */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <div className="absolute top-1/2 left-2/3 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                  <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '600ms' }}></div>
                  
                  {/* Car icon */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-float">
                    <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 6L17.6 10H6.4L8 6H16Z" fill="#3B82F6"/>
                      <path d="M3 14V16C3 17.1046 3.89543 18 5 18H6C6 16.8954 6.89543 16 8 16C9.10457 16 10 16.8954 10 18H14C14 16.8954 14.8954 16 16 16C17.1046 16 18 16.8954 18 18H19C20.1046 18 21 17.1046 21 16V14M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18C9 17.4477 8.55228 17 8 17C7.44772 17 7 17.4477 7 18ZM15 18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17C15.4477 17 15 17.4477 15 18Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M5 14H19L17.6 10H6.4L5 14Z" fill="#3B82F6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  {/* Route lines */}
                  <div className="absolute inset-0 z-0">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25,25 Q50,0 75,25 T75,75 T25,75 T25,25" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3,3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
