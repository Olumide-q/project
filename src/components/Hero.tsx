import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-coffee-50 to-coffee-100 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Proof */}
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-center space-x-1 mb-8">
            <div className="flex items-center space-x-1" role="img" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-coffee-600 ml-2">Trusted by 500+ hotels worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-coffee-800 mb-6 leading-tight">
            Streamline Your
            <span className="text-coffee-500 block">Hotel Operations</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-coffee-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            The complete hotel management solution that helps you increase efficiency, 
            boost revenue, and deliver exceptional guest experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToDemo}
              className="bg-coffee-500 text-white px-8 py-4 rounded-full hover:bg-coffee-600 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Start your free trial of HotelPro"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              className="text-coffee-600 hover:text-coffee-500 font-semibold text-lg border-2 border-coffee-300 px-8 py-4 rounded-full hover:bg-coffee-50 transition-all duration-300"
              aria-label="Watch HotelPro demo video"
            >
              Watch Demo
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <article className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-coffee-700 mb-2">Real-time Analytics</h3>
              <p className="text-coffee-600">Monitor occupancy, revenue, and performance metrics in real-time</p>
            </article>
            <article className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-coffee-700 mb-2">Seamless Integration</h3>
              <p className="text-coffee-600">Connect with existing PMS, booking engines, and payment systems</p>
            </article>
            <article className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-coffee-700 mb-2">24/7 Support</h3>
              <p className="text-coffee-600">Expert support team available around the clock for your success</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;