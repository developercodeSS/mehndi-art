import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    id: 1,
    title: 'Engagement Mehndi',
    price: '2100',
    popular: false,
    features: ['Premium Organic Henna', 'Both Hands (Front & Back)', 'Elegant Fine Designs', 'Long-lasting Dark Stain'],
  },
  {
    id: 2,
    title: 'Bridal Mehndi',
    price: '3100',
    popular: true,
    features: ['Luxury Bridal Packages', 'Full Hands & Legs', 'Custom Portrait/Figures', 'Premium Aftercare Kit', 'Priority Booking'],
  },
  {
    id: 3,
    title: 'Guest Arabic Mehndi',
    price: '300',
    subtitle: 'Per Person',
    popular: false,
    features: ['Modern Arabic Patterns', 'One Side Hand Design', 'Fast Application', 'Perfect for Sangeet/Haldi'],
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden mesh-gradient">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Pricing <span className="font-serif italic text-gold-400">Packages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Transparent and affordable pricing for luxury mehndi services. Premium quality guaranteed.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative rounded-3xl p-8 backdrop-blur-xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-emerald-900/40 to-dark/80 border border-gold-500/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] md:-translate-y-4 md:scale-105 z-10' 
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-dark text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-glow">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-medium text-white mb-2">{plan.title}</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-xl text-gray-400 mb-1">₹</span>
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                </div>
                {plan.subtitle ? (
                  <div className="text-sm text-gray-400 mt-2">{plan.subtitle}</div>
                ) : (
                  <div className="text-sm text-gray-400 mt-2">Starting Price</div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gold-500/20 flex items-center justify-center text-gold-400">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="tel:7618485030" 
                className={`block w-full py-3 px-4 text-center rounded-xl font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gold-500 text-dark hover:bg-gold-400 shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
