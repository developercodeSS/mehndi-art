import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center bg-emerald-950/40 border border-emerald-900/50 shadow-2xl"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596455607563-ad6193f76b11?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white leading-tight">
              Book Your Bridal Mehndi Today
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
              Free Home Service Available in Udaipur City
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="tel:7618485030" className="group px-8 py-5 bg-gold-500 text-dark font-bold text-lg rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                Call 7618485030
              </a>
              <a href="https://wa.me/917618485030" target="_blank" rel="noreferrer" className="group px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
