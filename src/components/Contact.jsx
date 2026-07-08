import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-dark">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="font-serif italic text-gold-400">Touch</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg font-light leading-relaxed max-w-md">
              Book your appointment today for premium bridal mehndi. We provide home services across Udaipur city.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-1">Call Us</h4>
                  <a href="tel:7618485030" className="text-xl font-medium text-white hover:text-gold-400 transition-colors">7618485030</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-xl font-medium text-white">Surajpol Zudio<br/><span className="text-lg text-gray-400 font-normal">Udaipur, Rajasthan</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <div>
                  <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-1">Instagram</h4>
                  <a href="https://www.instagram.com/rishi_mehndi_jodhpur/" target="_blank" rel="noreferrer" className="text-xl font-medium text-white hover:text-gold-400 transition-colors">@rishi_mehndi_jodhpur</a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2">
              <iframe 
                src="https://maps.google.com/maps?q=Zudio%20Surajpole%20Udaipur&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem', filter: 'invert(90%) hue-rotate(180deg)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-900/40 rounded-full blur-2xl -z-10"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
