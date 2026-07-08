import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride',
    text: 'The most beautiful mehndi I have ever seen! The color came out so dark and the design was exactly what I wanted for my wedding day. Highly recommended!',
  },
  {
    id: 2,
    name: 'Anjali Verma',
    role: 'Bride',
    text: 'Very professional and polite. They came to my house on time and did an amazing job with my engagement mehndi. The organic henna smells wonderful.',
  },
  {
    id: 3,
    name: 'Neha Gupta',
    role: 'Sister of Bride',
    text: 'Booked them for my sister\'s wedding. The entire team is so talented. They managed 20+ guests with such beautiful and fast Arabic designs.',
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Bride <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-200">Diaries</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-12 md:-left-24 -translate-y-1/2 z-20">
            <button onClick={prev} className="p-3 rounded-full bg-white/5 hover:bg-gold-500/20 text-white hover:text-gold-400 transition-colors border border-white/10 backdrop-blur-md hidden md:block">
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-12 md:-right-24 -translate-y-1/2 z-20">
            <button onClick={next} className="p-3 rounded-full bg-white/5 hover:bg-gold-500/20 text-white hover:text-gold-400 transition-colors border border-white/10 backdrop-blur-md hidden md:block">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="relative h-[300px] md:h-[250px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="glass-card p-8 md:p-12 text-center w-full relative">
                  <div className="absolute top-6 left-6 text-gold-500/20">
                    <Quote size={60} />
                  </div>
                  <p className="text-lg md:text-xl text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                    "{testimonials[current].text}"
                  </p>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h4 className="text-gold-400 font-semibold text-lg">{testimonials[current].name}</h4>
                    <span className="text-sm text-gray-500 uppercase tracking-widest">{testimonials[current].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {testimonials.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-gold-400 w-6' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
