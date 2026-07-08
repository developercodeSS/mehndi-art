import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Heart, Users, Home, CalendarHeart, Sparkles, Gem, Paintbrush } from 'lucide-react';

const services = [
  { id: 1, title: 'Bridal Mehndi', icon: <Heart size={24} />, desc: 'Intricate and traditional designs tailored perfectly for your big day.' },
  { id: 2, title: 'Engagement Mehndi', icon: <Gem size={24} />, desc: 'Elegant patterns to celebrate your ring ceremony beautifully.' },
  { id: 3, title: 'Arabic Mehndi', icon: <Palette size={24} />, desc: 'Bold, flowing floral patterns with modern spacing and shading.' },
  { id: 4, title: 'Guest Mehndi', icon: <Users size={24} />, desc: 'Fast yet beautiful designs for your family and wedding guests.' },
  { id: 5, title: 'Home Service', icon: <Home size={24} />, desc: 'Professional service delivered right to your doorstep in Udaipur.' },
  { id: 6, title: 'Wedding Functions', icon: <CalendarHeart size={24} />, desc: 'Special packages for Haldi, Sangeet, and other pre-wedding events.' },
  { id: 7, title: 'Festival Mehndi', icon: <Sparkles size={24} />, desc: 'Celebrate Karwa Chauth, Teej, and Diwali with stunning henna.' },
  { id: 8, title: 'Custom Designs', icon: <Paintbrush size={24} />, desc: 'Bring your own ideas or portraits, and we will bring them to life.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-gold-500"></div>
            <span className="text-gold-400 font-medium tracking-widest uppercase text-sm">Our Expertise</span>
            <div className="h-[1px] w-8 bg-gold-500"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Premium <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Services</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id} 
              variants={cardVariants}
              className="glass-card p-8 group hover:bg-gradient-to-br hover:from-white/10 hover:to-transparent"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gold-300 transition-colors">{service.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
