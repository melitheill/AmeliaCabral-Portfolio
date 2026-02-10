'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  children,
  className = '',
  icon,
  ...props
}) => {
  const isPrimary = variant === 'primary';
  const widthClass = fullWidth ? "w-full" : "w-fit";

  return (
    <motion.button
      className={`
        relative rounded-full font-sans font-medium tracking-wide flex items-center justify-center gap-2 overflow-hidden px-8 py-4 text-xs md:text-sm disabled:opacity-50 disabled:cursor-not-allowed
        ${isPrimary
          ? 'bg-navy text-white shadow-premium-navy'
          : 'border border-navy text-navy bg-transparent'
        }
        ${widthClass} ${className}
      `}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        initial: {
          scale: 1,
          backgroundColor: isPrimary ? "#0C2C47" : "transparent"
        },
        hover: {
          scale: 1.03,
          backgroundColor: isPrimary ? "#BF512C" : "rgba(12, 44, 71, 0.05)",
          transition: { duration: 0.3, ease: "easeOut" }
        },
        tap: { scale: 0.95 }
      }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            variants={{
              initial: { x: 0 },
              hover: { x: 4, transition: { duration: 0.2, ease: "easeInOut" } }
            }}
          >
            {icon}
          </motion.span>
        )}
      </span>
    </motion.button>
  );
};