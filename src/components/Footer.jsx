import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-dark pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-white mb-4">
              Rishi Mehndi Udaipur
            </h3>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Professional Bridal Mehndi Artist delivering premium, intricate, and traditional mehndi designs across Udaipur.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-gold-400 transition-colors">Pricing</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-gold-400 transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Phone: <a href="tel:7618485030" className="hover:text-gold-400 transition-colors">7618485030</a></li>
              <li className="text-gray-400">Surajpol Zudio,<br/>Udaipur, Rajasthan</li>
              <li><a href="https://www.instagram.com/rishi_mehndi_jodhpur/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gold-400 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Rishi Mehndi Udaipur. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm">
            Premium Web Design
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
