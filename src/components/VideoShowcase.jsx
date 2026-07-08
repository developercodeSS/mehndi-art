import React from 'react';
import { motion } from 'framer-motion';

const VideoShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-gold-600/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-gold-500"></div>
            <span className="text-gold-400 font-medium tracking-widest uppercase text-sm">Experience the Art</span>
            <div className="h-[1px] w-8 bg-gold-500"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Cinematic <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white">Showcase</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="aspect-[9/16] md:aspect-[16/9] rounded-3xl overflow-hidden glass-card p-2 relative z-10">
            <video 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              autoPlay 
              loop 
              muted 
              playsInline
              controls
            >
              <source src="/video/WhatsApp Video 2026-07-08 at 8.06.44 PM.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Elegant overlay for the top section of the video (optional styling) */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-dark/60 to-transparent rounded-t-2xl pointer-events-none"></div>
          </div>
          
          {/* Decorative elements behind the video */}
          <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-emerald-900/30 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-gold-600/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
