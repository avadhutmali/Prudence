import React from 'react';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const TextReveal = ({ text }) => {
  return (
    <div className="flex text-white text-[10vh] font-bold">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default TextReveal;
