'use client';
import { motion } from 'framer-motion';

export default function AnimateOnScroll({ children, delay = 0, direction = 'up', className = '' }) {
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 24 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
