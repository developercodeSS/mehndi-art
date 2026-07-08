import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const images = [
  { id: 1, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.35 PM (1).jpeg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 2, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.35 PM (2).jpeg', category: 'Arabic', height: 'h-48 md:h-64' },
  { id: 3, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.35 PM.jpeg', category: 'Back Hand', height: 'h-80 md:h-96' },
  { id: 4, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.36 PM (1).jpeg', category: 'Engagement', height: 'h-64 md:h-80' },
  { id: 5, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.36 PM (2).jpeg', category: 'Leg Mehndi', height: 'h-80 md:h-96' },
  { id: 6, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.36 PM.jpeg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 7, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.37 PM.jpeg', category: 'Arabic', height: 'h-48 md:h-64' },
  { id: 8, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.44 PM (1).jpeg', category: 'Back Hand', height: 'h-80 md:h-96' },
  { id: 9, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.44 PM.jpeg', category: 'Engagement', height: 'h-64 md:h-80' },
  { id: 10, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.45 PM.jpeg', category: 'Leg Mehndi', height: 'h-80 md:h-96' },
  { id: 11, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.46 PM (2).jpeg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 12, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.46 PM.jpeg', category: 'Arabic', height: 'h-48 md:h-64' },
  { id: 13, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.47 PM.jpeg', category: 'Back Hand', height: 'h-80 md:h-96' },
  { id: 14, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.06.48 PM.jpeg', category: 'Engagement', height: 'h-64 md:h-80' },
  { id: 15, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.10 PM (1).jpeg', category: 'Leg Mehndi', height: 'h-80 md:h-96' },
  { id: 16, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.10 PM.jpeg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 17, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.11 PM (1).jpeg', category: 'Arabic', height: 'h-48 md:h-64' },
  { id: 18, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.11 PM.jpeg', category: 'Back Hand', height: 'h-80 md:h-96' },
  { id: 19, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.12 PM (1).jpeg', category: 'Engagement', height: 'h-64 md:h-80' },
  { id: 20, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.12 PM (2).jpeg', category: 'Leg Mehndi', height: 'h-80 md:h-96' },
  { id: 21, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.12 PM.jpeg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 22, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.13 PM (1).jpeg', category: 'Arabic', height: 'h-48 md:h-64' },
  { id: 23, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.13 PM (2).jpeg', category: 'Back Hand', height: 'h-80 md:h-96' },
  { id: 24, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.13 PM.jpeg', category: 'Engagement', height: 'h-64 md:h-80' },
  { id: 25, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.14 PM (2).jpeg', category: 'Leg Mehndi', height: 'h-80 md:h-96' },
  { id: 26, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.14 PM.jpeg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 27, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.15 PM (1).jpeg', category: 'Arabic', height: 'h-48 md:h-64' },
  { id: 28, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.15 PM (2).jpeg', category: 'Back Hand', height: 'h-80 md:h-96' },
  { id: 29, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.15 PM.jpeg', category: 'Engagement', height: 'h-64 md:h-80' },
  { id: 30, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.08.16 PM.jpeg', category: 'Leg Mehndi', height: 'h-80 md:h-96' },
  { id: 31, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.40 PM.jpeg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 32, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.41 PM (1).jpeg', category: 'Arabic', height: 'h-48 md:h-64' },
  { id: 33, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.41 PM.jpeg', category: 'Back Hand', height: 'h-80 md:h-96' },
  { id: 34, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.42 PM (1).jpeg', category: 'Engagement', height: 'h-64 md:h-80' },
  { id: 35, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.42 PM.jpeg', category: 'Leg Mehndi', height: 'h-80 md:h-96' },
  { id: 36, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.43 PM (1).jpeg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 37, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.43 PM.jpeg', category: 'Arabic', height: 'h-48 md:h-64' },
  { id: 38, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.44 PM (1).jpeg', category: 'Back Hand', height: 'h-80 md:h-96' },
  { id: 39, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.44 PM (2).jpeg', category: 'Engagement', height: 'h-64 md:h-80' },
  { id: 40, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.44 PM (3).jpeg', category: 'Leg Mehndi', height: 'h-80 md:h-96' },
  { id: 41, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.45 PM (1).jpeg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 42, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.45 PM (2).jpeg', category: 'Arabic', height: 'h-48 md:h-64' },
  { id: 43, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.45 PM.jpeg', category: 'Back Hand', height: 'h-80 md:h-96' },
  { id: 44, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.46 PM (1).jpeg', category: 'Engagement', height: 'h-64 md:h-80' },
  { id: 45, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.46 PM (2).jpeg', category: 'Leg Mehndi', height: 'h-80 md:h-96' },
  { id: 46, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.46 PM.jpeg', category: 'Bridal', height: 'h-64 md:h-80' },
  { id: 47, src: '/photos collection/WhatsApp Image 2026-07-08 at 8.10.47 PM (2).jpeg', category: 'Arabic', height: 'h-48 md:h-64' },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 12);
  };

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
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.slice(0, visibleCount).map((img, index) => (
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

        {/* View More Button */}
        {visibleCount < images.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleViewMore}
              className="px-10 py-4 rounded-full border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-dark font-semibold tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
            >
              Load More Masterpieces
            </button>
          </div>
        )}
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
