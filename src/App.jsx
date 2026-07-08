import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import VideoShowcase from './components/VideoShowcase';
import Rating from './components/Rating';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="bg-noise bg-dark min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Gallery />
      <VideoShowcase />
      <Rating />
      <Testimonials />
      <Contact />
      <CTA />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
