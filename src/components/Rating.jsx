import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const reviews = [
  {
    name: "Anjali Sharma",
    date: "2 weeks ago",
    text: "Absolutely loved my bridal mehndi! The design was incredibly intricate and the stain came out so dark. Highly professional and patient."
  },
  {
    name: "Priya Rajput",
    date: "1 month ago",
    text: "Best mehndi artist in Udaipur! He customized the design exactly how I wanted. The color lasted for weeks. Strongly recommend!"
  }
];

const Rating = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[2.5rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center border border-gold-500/20 relative overflow-hidden"
        >
          {/* Subtle Glow Background */}
          <div className="absolute -top-[20%] -right-[10%] w-3/4 h-3/4 bg-gold-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-1/2 h-1/2 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>

          {/* Left Column: Overall Rating */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 mb-8 shadow-xl"
            >
              <GoogleIcon />
              <span className="text-white font-semibold tracking-wide text-sm">Google Reviews</span>
            </motion.div>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-serif text-7xl lg:text-8xl font-bold text-gold-400 drop-shadow-md">
                4.9
              </span>
              <span className="text-3xl lg:text-4xl text-gray-400 font-medium">
                / 5
              </span>
            </div>

            <div className="flex gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ opacity: 0, y: -20, rotate: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: star * 0.1, type: "spring", stiffness: 200 }}
                >
                  <Star className="text-gold-400 fill-gold-400 drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]" size={36} />
                </motion.div>
              ))}
            </div>

            <p className="text-gray-400 text-lg max-w-sm">
              Trusted by <strong className="text-white font-semibold">500+</strong> happy brides across Rajasthan and beyond for their special day.
            </p>
          </div>

          {/* Right Column: Review Cards */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6 z-10">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 relative hover:bg-white/10 transition-colors duration-300 group"
              >
                <Quote className="absolute top-6 right-8 text-gold-500/20 group-hover:text-gold-500/30 transition-colors w-12 h-12 rotate-180" />
                
                <div className="flex flex-col mb-4">
                  <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="text-gold-400 fill-gold-400 w-3 h-3" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{review.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 italic leading-relaxed text-sm md:text-base">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Rating;
