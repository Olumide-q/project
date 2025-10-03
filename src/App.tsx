import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Demo from './components/Demo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <FAQ />
      <Pricing />
      <Demo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;