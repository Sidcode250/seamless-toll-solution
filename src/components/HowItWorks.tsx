import React, { useEffect, useRef } from 'react';
import { MapPin, Navigation, CreditCard, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
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

  const steps = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      title: 'GPS Tracking in Vehicles',
      description:
        "Our system uses precise GPS technology to track your vehicle's position when you travel through toll zones.",
      delay: 200,
    },
    {
      icon: <Navigation className="w-8 h-8 text-blue-500" />,
      title: 'Automatic Toll Calculation',
      description:
        'Distance traveled and road type are automatically calculated to determine the exact toll amount.',
      delay: 400,
    },
    {
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
      title: 'Digital Payments',
      description:
        'Tolls are automatically charged to your preferred payment method, with detailed receipts sent directly to your account.',
      delay: 600,
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
      title: 'Seamless Travel',
      description:
        'Drive through toll zones without stopping. No barriers, no waiting, just smooth driving.',
      delay: 800,
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-blue-50" id="how-it-works" ref={sectionRef}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="chip mb-4 inline-flex animate-on-scroll opacity-0 transition-opacity duration-700">
            Simple Process
          </div>
          <h2 className="text-4xl font-bold mb-6 animate-on-scroll opacity-0 transition-opacity duration-700 delay-[200ms]">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-opacity duration-700 delay-[400ms]">
            Our GPS-based toll collection system makes highway travel faster, more convenient, and completely frictionless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="card-glass hover:scale-105 flex flex-col items-center text-center p-8 animate-on-scroll opacity-0 transition-all duration-700"
              style={{ transitionDelay: `${step.delay}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 animate-on-scroll opacity-0 transition-opacity duration-700 delay-[1000ms]">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gray-900 p-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="relative bg-blue-600 aspect-video overflow-hidden">
              {/* Interactive animation showing a vehicle passing through a toll zone */}
              <div className="absolute inset-0 flex flex-col">
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-white text-xl font-medium">GPS Toll Zone</div>
                </div>
                
                <div className="h-32 relative overflow-hidden">
                  {/* Toll zone indicators */}
                  <div className="absolute top-0 left-1/4 bottom-0 border-l-2 border-dashed border-white/50 flex flex-col items-center">
                    <div className="w-4 h-4 bg-white rounded-full mt-2"></div>
                    <div className="text-white text-xs mt-1">Toll Start</div>
                  </div>
                  
                  <div className="absolute top-0 right-1/4 bottom-0 border-l-2 border-dashed border-white/50 flex flex-col items-center">
                    <div className="w-4 h-4 bg-white rounded-full mt-2"></div>
                    <div className="text-white text-xs mt-1">Toll End</div>
                  </div>
                  
                  {/* Highway */}
                  <div className="highway absolute bottom-0 left-0 right-0">
                    <div className="car">
                      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 6L17.6 10H6.4L8 6H16Z" fill="white"/>
                        <path d="M3 14V16C3 17.1046 3.89543 18 5 18H6C6 16.8954 6.89543 16 8 16C9.10457 16 10 16.8954 10 18H14C14 16.8954 14.8954 16 16 16C17.1046 16 18 16.8954 18 18H19C20.1046 18 21 17.1046 21 16V14M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18C9 17.4477 8.55228 17 8 17C7.44772 17 7 17.4477 7 18ZM15 18C15 18.5523 15.4477 19 16 19C16.5523 19 17 18.5523 17 18C17 17.4477 16.5523 17 16 17C15.4477 17 15 17.4477 15 18Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 14H19L17.6 10H6.4L5 14Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* GPS Signal Animation */}
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 animate-ping"></div>
                <div className="absolute inset-0 w-6 h-6 rounded-full bg-blue-500/40 animate-ping" style={{ animationDelay: '300ms' }}></div>
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-blue-500/60 animate-ping" style={{ animationDelay: '600ms' }}></div>
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              </div>
              
              {/* Notification popup */}
              <div className="absolute top-10 right-10 glass rounded-lg p-4 max-w-xs animate-float">
                <div className="text-sm font-medium mb-1">Toll Payment Processed</div>
                <div className="text-xs text-gray-600">$2.50 charged to your account</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
