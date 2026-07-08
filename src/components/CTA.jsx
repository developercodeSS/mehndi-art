import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

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
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
            style={{ backgroundImage: "url('/photos collection/WhatsApp Image 2026-07-08 at 8.10.40 PM.jpeg')" }}
          ></div>
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
                <WhatsAppIcon className="w-6 h-6" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
