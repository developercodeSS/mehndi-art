import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-900/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 relative z-10">
              <img 
                src="https://plus.unsplash.com/premium_photo-1670745084868-7b4f727cc934?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Beautiful Mehndi Design" 
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent rounded-2xl pointer-events-none"></div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 glass-card p-6 pr-8 z-20"
            >
              <div className="text-4xl font-serif text-gold-400 mb-1 text-glow">500+</div>
              <div className="text-sm text-gray-300 font-medium">Happy Brides</div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold-500"></div>
              <span className="text-gold-400 font-medium tracking-widest uppercase text-sm">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white">Elegance</span> For Your Special Day
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed font-light">
              We specialize in premium bridal mehndi, engagement mehndi, Arabic mehndi, guest mehndi, and customized traditional designs tailored perfectly to your style.
            </p>
            
            <p className="text-gray-400 mb-10 leading-relaxed font-light">
              Our goal is to make every bride feel special with unique, handcrafted mehndi designs. We believe in perfection, hygiene, and using the finest quality organic henna for a rich, dark stain.
            </p>
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="bg-gold-500/20 p-3 rounded-full text-gold-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Home Service Available</h4>
                <p className="text-sm text-gray-400">Enjoy luxury mehndi services in the comfort of your home anywhere across Udaipur City.</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
