import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { id: 1, src: '/gallery/ada9d35e-b6ed-4e78-939c-62954b46b9b5.jpg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 2, src: '/gallery/b1e39281-c243-4bb1-83f9-81c175d22b94.jpg', category: 'Arabic', height: 'h-48 md:h-64' },
  { id: 3, src: '/gallery/c6d3c3f6-67e5-470f-844d-6bffabfe8d7d.jpg', category: 'Back Hand', height: 'h-80 md:h-96' },
  { id: 4, src: '/gallery/d3e30ea2-5207-40ce-be59-8d650f9299ed.jpg', category: 'Engagement', height: 'h-64 md:h-80' },
  { id: 5, src: '/gallery/de705d00-244c-4cbf-81f8-e5b8410e82a1.jpg', category: 'Leg Mehndi', height: 'h-80 md:h-96' },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our <span className="font-serif italic text-gold-400">Masterpieces</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-lg"
            >
              A glimpse into our premium bridal and traditional mehndi designs.
            </motion.p>
          </div>
          
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://www.instagram.com/rishi_mehndi_jodhpur/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors"
          >
            View More on Instagram
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </motion.a>
        </div>

        {/* Masonry-like Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.height} w-full break-inside-avoid glass-card p-1`}
              onClick={() => setSelectedImg(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.category} 
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl m-1 flex flex-col justify-end p-6">
                <span className="text-gold-400 font-medium mb-1">{img.category}</span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mt-2">
                  <ZoomIn size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImg} 
              alt="Enlarged Mehndi" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
