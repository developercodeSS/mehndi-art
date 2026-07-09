import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass-nav rounded-2xl px-6 py-4 flex items-center justify-between transition-all duration-300 ${
            isScrolled || isMobileMenuOpen ? 'shadow-glass bg-dark/90 backdrop-blur-lg border border-white/5' : 'bg-transparent border-transparent'
          }`}>
            <div className="flex flex-col">
              <div className="font-serif text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-white leading-tight">
                Rishi Mehndi
              </div>
              <div className="text-[10px] md:text-xs text-gold-500/80 uppercase tracking-widest font-medium">
                Udaipur Bridal Mehndi Art
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#about" className="hover:text-gold-400 transition-colors">About</a>
              <a href="#services" className="hover:text-gold-400 transition-colors">Services</a>
              <a href="#pricing" className="hover:text-gold-400 transition-colors">Pricing</a>
              <a href="#gallery" className="hover:text-gold-400 transition-colors">Gallery</a>
            </div>
            
            <a href="tel:7618485030" className="hidden md:block px-6 py-2 rounded-full bg-gold-600/20 text-gold-400 border border-gold-500/30 hover:bg-gold-500 hover:text-dark transition-all duration-300 font-medium">
              Book Now
            </a>
            
            <button 
              className="md:hidden text-white p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl pt-32 px-6 flex flex-col items-center gap-8 md:hidden"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-white hover:text-gold-400 transition-colors">About</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-white hover:text-gold-400 transition-colors">Services</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-white hover:text-gold-400 transition-colors">Pricing</a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-white hover:text-gold-400 transition-colors">Gallery</a>
            
            <a href="tel:7618485030" className="mt-8 px-8 py-3 rounded-full bg-gold-600/20 text-gold-400 border border-gold-500/30 font-medium">
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
