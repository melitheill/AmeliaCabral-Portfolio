'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface FadeInUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInUp: React.FC<FadeInUpProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};