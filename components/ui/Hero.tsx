'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {

  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- CONFIGURACIÓN DE ANIMACIÓN TIPO MÁQUINA DE ESCRIBIR ---
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.04, // Velocidad de escritura (más bajo = más rápido)
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Función auxiliar para renderizar texto con efecto typewriter
  const TypewriterText = ({ text, className }: { text: string, className?: string }) => (
    <motion.span className={className} variants={sentence} initial="hidden" animate="visible">
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
    >

      {/* --- FONDO SUTIL --- */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange/5 via-white to-white opacity-60" />

      {/* --- CONTENIDO PRINCIPAL CENTRADO --- */}
      <div className="relative z-10 px-6 max-w-5xl text-center flex flex-col items-center">

        {/* Título Principal con Efecto Typewriter */}
        <motion.h1
          className="text-5xl lg:text-7xl font-display text-navy leading-[1.15] mb-8"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {/* Primera Línea */}
          <span className="block">
            {/* "Palabras que" en Navy */}
            {Array.from("Palabras que ").map((char, index) => (
              <motion.span key={`l1-${index}`} variants={letter}>{char}</motion.span>
            ))}
            {/* "Convierten" en Orange Italic */}
            <span className="text-orange font-serif italic">
              {Array.from("Convierten").map((char, index) => (
                <motion.span key={`l1-acc-${index}`} variants={letter}>{char}</motion.span>
              ))}
            </span>
          </span>

          {/* Segunda Línea */}
          <span className="block mt-2">
            {/* "Estrategias que" en Navy */}
            {Array.from("Estrategias que ").map((char, index) => (
              <motion.span key={`l2-${index}`} variants={letter}>{char}</motion.span>
            ))}
            {/* "Venden" en Italic (Navy) */}
            <span className="font-serif italic">
              {Array.from("Venden").map((char, index) => (
                <motion.span key={`l2-acc-${index}`} variants={letter}>{char}</motion.span>
              ))}
            </span>
          </span>
        </motion.h1>

        {/* Subtítulo / Descripción (Aparece después del título) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }} // Delay alto para esperar a que termine de "escribir" el título
          className="text-navy/70 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-10 font-light text-balance"
        >
          Eleva la identidad de tu marca con una narrativa sofisticada. Fusiono estrategia y creatividad para transformar lectores curiosos en clientes fieles.
        </motion.p>

        {/* Botón CTA */}
        <motion.button
          onClick={scrollToServices}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="text-orange font-serif italic text-xl border-b border-orange/30 hover:border-orange pb-1 transition-colors"
        >
          Descubrir mis servicios
        </motion.button>
      </div>

      {/* --- INDICADOR DE SCROLL --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 cursor-pointer"
        onClick={scrollToServices}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-navy/40 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-orange to-transparent opacity-50"></div>
      </motion.div>

    </section>
  );
};