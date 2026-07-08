import React from 'react';
import { motion } from 'framer-motion';
import { Home, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const featuredServices = [
  { 
    id: 1, 
    title: 'Bridal Mehndi Art', 
    price: 'Starting ₹3100',
    desc: 'Intricate and traditional bridal designs tailored perfectly for your big day.',
    image: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.13 PM (1).jpeg',
    className: 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto min-h-[400px]'
  },
  { 
    id: 2, 
    title: 'Engagement Mehndi', 
    price: 'Starting ₹2100',
    desc: 'Elegant patterns to celebrate your ring ceremony beautifully.',
    image: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.14 PM.jpeg',
    className: 'col-span-1 aspect-square'
  },
  { 
    id: 3, 
    title: 'Guest Arabic Mehndi', 
    price: '₹300 Per Person',
    desc: 'Bold, flowing floral Arabic patterns for guests and family members.',
    image: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.42 PM (1).jpeg',
    className: 'col-span-1 aspect-square'
  }
];

const otherServices = [
  { id: 4, title: 'Free Home Service', icon: <Home size={20} />, desc: 'Personal booking available. Free home service anywhere in Udaipur City.' },
  { id: 5, title: 'Contact Us', icon: <Phone size={20} />, desc: 'Call 7618485030 to book your appointment today.' },
  { id: 6, title: 'Visit Us', icon: <MapPin size={20} />, desc: 'Located near Surajpol Zudio, Udaipur.' }
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-8 bg-gold-500"></div>
              <span className="text-gold-400 font-medium tracking-widest uppercase text-sm">Our Expertise</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Signature <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-white">Services</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-sm md:text-right font-light"
          >
            Discover our premium mehndi packages designed specifically for brides and wedding guests in Udaipur.
          </motion.p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {featuredServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${service.className}`}
            >
              {/* Image Background */}
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/40 to-dark/95 group-hover:to-dark transition-colors duration-500"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex justify-between items-end gap-4 transform lg:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 font-serif tracking-wide group-hover:text-gold-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base font-light opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">
                      {service.desc}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 group-hover:bg-gold-500 group-hover:text-dark transition-colors duration-300">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Smaller Services List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherServices.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              className="glass-card p-6 flex flex-col justify-between group hover:border-gold-500/30 transition-colors bg-white/5 backdrop-blur-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-lg font-medium text-white mb-2">{service.title}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
