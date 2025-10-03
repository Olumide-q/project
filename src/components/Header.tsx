import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-coffee-500" aria-hidden="true" />
            <span className="text-2xl font-bold text-coffee-700">HotelPro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <button
              onClick={() => scrollToSection('home')}
              className="text-coffee-700 hover:text-coffee-500 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-coffee-700 hover:text-coffee-500 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-coffee-700 hover:text-coffee-500 transition-colors font-medium"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-coffee-700 hover:text-coffee-500 transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-coffee-700 hover:text-coffee-500 transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="bg-coffee-500 text-white px-6 py-2 rounded-full hover:bg-coffee-600 transition-colors font-medium"
            >
              Book Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-coffee-700"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-coffee-100 py-4 px-6">
            <nav className="flex flex-col space-y-4" role="navigation" aria-label="Mobile navigation">
              <button
                onClick={() => scrollToSection('home')}
                className="text-coffee-700 hover:text-coffee-500 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-coffee-700 hover:text-coffee-500 transition-colors font-medium text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-coffee-700 hover:text-coffee-500 transition-colors font-medium text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-coffee-700 hover:text-coffee-500 transition-colors font-medium text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-coffee-700 hover:text-coffee-500 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="bg-coffee-500 text-white px-6 py-2 rounded-full hover:bg-coffee-600 transition-colors font-medium w-fit"
              >
                Book Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;