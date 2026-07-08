import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Rating = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-dark to-emerald-950/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex flex-col items-center justify-center p-12 rounded-[3rem] glass-card relative overflow-hidden"
        >
          {/* Decorative blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold-500/10 blur-[50px] z-0 pointer-events-none"></div>
          
          <div className="relative z-10 flex gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
                initial={{ opacity: 0, y: -20, rotate: -30 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: star * 0.1, type: "spring", stiffness: 200 }}
              >
                <Star className="text-gold-400 fill-gold-400" size={40} />
              </motion.div>
            ))}
          </div>
          
          <div className="relative z-10 font-serif text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2">
            4.9<span className="text-4xl text-gray-500">/5</span>
          </div>
          
          <div className="relative z-10 text-xl text-gold-400 font-medium tracking-wide mb-6">
            Google Rating
          </div>
          
          <div className="relative z-10 flex items-center gap-4 text-gray-300">
            <div className="flex -space-x-4">
              <img src="https://i.pravatar.cc/100?img=1" alt="Customer" className="w-12 h-12 rounded-full border-2 border-dark" />
              <img src="https://i.pravatar.cc/100?img=5" alt="Customer" className="w-12 h-12 rounded-full border-2 border-dark" />
              <img src="https://i.pravatar.cc/100?img=9" alt="Customer" className="w-12 h-12 rounded-full border-2 border-dark" />
              <div className="w-12 h-12 rounded-full border-2 border-dark bg-emerald-900 flex items-center justify-center text-xs font-bold text-white">+500</div>
            </div>
            <div className="text-left leading-tight">
              <div className="font-semibold text-white">500+</div>
              <div className="text-sm">Happy Brides</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rating;
