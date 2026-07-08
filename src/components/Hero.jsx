import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-aurora opacity-60"></div>
        <img 
          src="https://images.unsplash.com/photo-1596455607563-ad6193f76b11?q=80&w=2000&auto=format&fit=crop" 
          alt="Bridal Mehndi Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-900/20 rounded-full blur-3xl z-0"
      ></motion.div>
      
      <motion.div 
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-600/10 rounded-full blur-3xl z-0"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold-500/30 bg-gold-500/10 backdrop-blur-md">
            <span className="text-gold-400 text-sm font-medium tracking-widest uppercase">Professional Artist in Udaipur</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Bridal <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white text-glow">Mehndi</span> Art
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Make your special day memorable with beautiful bridal mehndi designs crafted with perfection, creativity, and elegance.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:7618485030" className="group relative px-8 py-4 bg-gold-500 text-dark font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.4)] w-full sm:w-auto text-center">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Book Now
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            
            <a href="https://wa.me/917618485030" target="_blank" rel="noreferrer" className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-gold-500/50 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2">
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent"
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
