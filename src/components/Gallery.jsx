// src/components/Gallery.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo/WhatsApp Image 2024-08-17 at 10.10.51_a8c7da21.png';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKZFzNxg-Q1uNqqCLJ422nkau-0DMyOa6Dg&s',
  'https://www.walchandsangli.ac.in/images/WalchandBuilding.jpg',
  'https://source.unsplash.com/random/800x600?nature,mountain',
  'https://source.unsplash.com/random/800x600?nature,sky',
  // Add more image URLs as needed
];

function Gallery() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className="gallery-container h-[100vh] w-full flex items-center justify-center "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-[80%] h-[60%] overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence>
          <motion.img
            key={current}
            src={images[current]}
            alt={`Gallery Image ${current}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Gallery;
