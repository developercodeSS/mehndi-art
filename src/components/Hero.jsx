import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Sparkles, Star } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Subtle Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-aurora opacity-50 z-10"></div>
        <img 
          src="/photos collection/WhatsApp Image 2026-07-08 at 8.10.43 PM.jpeg" 
          alt="Background Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[4px] mix-blend-overlay z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/95 to-dark z-20"></div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              y: Math.random() * 100 + 100, 
              x: Math.random() * 100 - 50,
              opacity: 0,
              rotate: 0
            }}
            animate={{ 
              y: [null, Math.random() * -100 - 100],
              opacity: [0, 0.4, 0],
              rotate: [0, 180]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="text-gold-500/20" size={Math.random() * 20 + 10} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-row items-center justify-between gap-2 md:gap-8 pt-12 md:pt-0">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[55%] md:w-1/2 flex flex-col items-start text-left"
        >
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-gold-500/20 backdrop-blur-md mb-6"
          >
            <div className="flex text-gold-400">
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
              <Star size={12} fill="currentColor" />
            </div>
            <span className="text-xs text-gray-300 font-medium tracking-wider uppercase">Premium Artist in Udaipur</span>
          </motion.div>

          {/* Main Typography */}
          <h1 className="flex flex-col mb-3 md:mb-6">
            <span className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-yellow-200 leading-tight drop-shadow-sm">
              Rishi Mehndi
            </span>
            <span className="text-[0.6rem] sm:text-xs md:text-lg lg:text-2xl text-gray-300 font-light tracking-[0.15em] uppercase mt-1 md:mt-2">
              Udaipur Bridal Mehndi Art
            </span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-lg text-gray-400 mb-6 md:mb-10 max-w-lg font-light leading-relaxed hidden sm:block">
            Make your special day truly unforgettable with exquisite bridal mehndi designs crafted with flawless perfection, deep rich stains, and pure elegance.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-2 md:gap-4 w-full">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:7618485030"
              className="w-full xl:w-auto px-4 py-2.5 md:px-8 md:py-4 bg-gold-500 text-dark rounded-full font-semibold text-xs md:text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
            >
              <Phone size={14} className="md:w-5 md:h-5" />
              <span>Call Now</span>
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/917618485030"
              target="_blank"
              rel="noreferrer"
              className="w-full xl:w-auto px-4 py-2.5 md:px-8 md:py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-xs md:text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 md:w-5 md:h-5" />
              <span className="whitespace-nowrap">WhatsApp Us</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-[45%] md:w-1/2 relative h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center"
        >
          {/* Glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold-500/20 rounded-full blur-[40px] md:blur-[80px] -z-10"></div>
          
          <div className="relative w-full max-w-[200px] md:max-w-md aspect-[4/5] rounded-3xl md:rounded-[2.5rem] overflow-hidden glass-card p-1 md:p-2 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-transform duration-700 z-10">
            <img 
              src="/photos collection/WhatsApp Image 2026-07-08 at 8.06.46 PM (2).jpeg" 
              alt="Bridal Mehndi Art" 
              className="w-full h-full object-cover rounded-[1.25rem] md:rounded-[2rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent rounded-[1.25rem] md:rounded-[2rem] pointer-events-none"></div>
          </div>

          {/* Decorative smaller image floating */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute -bottom-2 -left-2 md:-bottom-6 md:-left-12 w-20 md:w-40 aspect-square rounded-xl md:rounded-3xl overflow-hidden glass-card p-0.5 md:p-1 border border-white/20 shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500 z-20"
          >
            <img 
              src="/photos collection/WhatsApp Image 2026-07-08 at 8.08.13 PM (1).jpeg" 
              alt="Mehndi Detail" 
              className="w-full h-full object-cover rounded-lg md:rounded-2xl"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
